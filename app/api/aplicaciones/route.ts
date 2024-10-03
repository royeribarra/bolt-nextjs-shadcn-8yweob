import { NextResponse } from 'next/server';
import { getConnection } from '@/src/utils/database';
import { Aplicacion } from '@/src/entity/Aplicacion';

export async function GET() {
  try {
    const connection = await getConnection();
    const aplicacionRepository = connection.getRepository(Aplicacion);
    const aplicaciones = await aplicacionRepository.find({ relations: ['abogado', 'oferta'] });
    return NextResponse.json(aplicaciones);
  } catch (error) {
    console.error('Error fetching aplicaciones:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const connection = await getConnection();
    const aplicacionRepository = connection.getRepository(Aplicacion);
    const newAplicacion = aplicacionRepository.create(body);
    await aplicacionRepository.save(newAplicacion);
    return NextResponse.json(newAplicacion, { status: 201 });
  } catch (error) {
    console.error('Error creating aplicacion:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}