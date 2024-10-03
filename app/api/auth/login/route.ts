import { NextResponse } from 'next/server';
import { getConnection } from '@/src/utils/database';
import { User } from '@/src/entity/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  try {
    const { login, password } = await request.json();
    const connection = await getConnection();
    const userRepository = connection.getRepository(User);

    // Find user by email or username
    const user = await userRepository.findOne({
      where: [{ email: login }, { username: login }],
      select: ['id', 'email', 'username', 'password', 'role']
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    return NextResponse.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}