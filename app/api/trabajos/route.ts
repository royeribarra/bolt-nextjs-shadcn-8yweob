import { NextResponse } from 'next/server';
import { getConnection } from '@/src/utils/database';
import { Trabajo } from '@/src/entity/Trabajo';

export async function GET() {
  try {
    const connection = await getConnection();
    const trabajoRepository = connection.getRepository(Trabajo);
    const trabajos = await trabajoRepository.find({ relations: ['aplicacion_aceptada'] });
    return NextResponse.json(trabajos);
  } catch (error) {
    console.error('Error fetching trabajos:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const connection = await getConnection();
    const trabajoRepository = connection.getRepository(Trabajo);
    const newTrabajo = trabajoRepository.create(body);
    await trabajoRepository.save(newTrabajo);
    return NextResponse.json(newTrabajo, { status: 201 });
  } catch (error) {
    console.error('Error creating trabajo:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}