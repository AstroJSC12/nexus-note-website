interface Env {
  WAITLIST_KV: KVNamespace;
}

interface WaitlistEntry {
  email: string;
  source: string;
  createdAt: string;
  userAgent?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await context.request.json() as { email?: string; source?: string };
    const email = (body.email || '').trim().toLowerCase();

    if (!email) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Email is required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Please enter a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Check if KV is available
    if (context.env.WAITLIST_KV) {
      // Check if email already exists
      const existing = await context.env.WAITLIST_KV.get(email);
      if (existing) {
        return new Response(
          JSON.stringify({ ok: true, message: 'You\'re already on the list!' }),
          { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
      }

      // Store the email
      const entry: WaitlistEntry = {
        email,
        source: body.source || 'unknown',
        createdAt: new Date().toISOString(),
        userAgent: context.request.headers.get('User-Agent') || undefined,
      };

      await context.env.WAITLIST_KV.put(email, JSON.stringify(entry));

      // Also maintain a list of all emails for easy export
      const allEmailsKey = '_all_emails';
      const allEmails = await context.env.WAITLIST_KV.get(allEmailsKey);
      const emailList: string[] = allEmails ? JSON.parse(allEmails) : [];
      if (!emailList.includes(email)) {
        emailList.push(email);
        await context.env.WAITLIST_KV.put(allEmailsKey, JSON.stringify(emailList));
      }
    } else {
      // Log to console if KV is not configured (for development)
      console.log('[waitlist] KV not configured, logging only:', {
        email,
        source: body.source || 'unknown',
        createdAt: new Date().toISOString(),
      });
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  } catch (error) {
    console.error('[waitlist] Error:', error);
    return new Response(
      JSON.stringify({ ok: false, error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
