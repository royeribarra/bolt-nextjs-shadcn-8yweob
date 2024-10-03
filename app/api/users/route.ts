import { NextResponse } from 'next/server';
import { getConnection } from '@/src/utils/database';
import { User } from '@/src/entity/User';

export async function GET() {
  try {
    const connection = await getConnection();
    const userRepository = connection.getRepository(User);
    const users = await userRepository.find({ relations: ['perfil'] });
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const connection = await getConnection();
    const userRepository = connection.getRepository(User);
    const newUser = userRepository.create(body);
    await userRepository.save(newUser);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}