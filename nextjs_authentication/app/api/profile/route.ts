import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

const SECRET = 'your_jwt_secret';

export async function GET(request: NextRequest) {
  const auth = request.headers.get('authorization');
  if (!auth || !auth.startsWith('Bearer ')) {
    return Response.json({ error: 'No token' }, { status: 401 });
  }
  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    return Response.json({ user: decoded });
  } catch {
    return Response.json({ error: 'Invalid token' }, { status: 401 });
  }
}
