import { users } from '../../lib/users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

const SECRET = 'your_jwt_secret'; // Use env var in production

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  const user = users.find((u) => u.username === username);
  if (!user) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  const token = jwt.sign({ id: user.id, username: user.username }, SECRET, {
    expiresIn: '1h'
  });
  return Response.json({ token });
}
