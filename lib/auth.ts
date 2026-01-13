export function checkAuth(authHeader: string | null): boolean {
  if (!authHeader?.startsWith('Basic ')) return false;

  const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  return (
    username === (process.env.ADMIN_USER || 'admin') &&
    password === (process.env.ADMIN_PASS || 'admin')
  );
}

export function requireAuth(request: Request): Response | null {
  if (!checkAuth(request.headers.get('authorization'))) {
    return new Response('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Admin Area"' }
    });
  }
  return null;
}
