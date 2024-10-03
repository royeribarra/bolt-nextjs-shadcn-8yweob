import { NextResponse } from 'next/server';
import { getConnection } from '@/src/utils/database';
import { Oferta } from '@/src/entity/Oferta';

export async function GET() {
  try {
    const connection = await getConnection();
    const ofertaRepository = connection.getRepository(Oferta);
    const ofertas = await ofertaRepository.find({ relations: ['cliente', 'habilidades_requeridas'] });
    return NextResponse.json(ofertas);
  } catch (error) {
    console.error('Error fetching ofertas:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const connection = await getConnection();
    const ofertaRepository = connection.getRepository(Oferta);
    const newOferta = ofertaRepository.create(body);
    await ofertaRepository.save(newOferta);
    return NextResponse.json(newOferta, { status: 201 });
  } catch (error) {
    console.error('Error creating oferta:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}