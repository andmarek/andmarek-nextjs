import { NextRequest, NextResponse } from 'next/server';
import { fetchPlaylist } from '@/app/about/spotifyData';

export async function GET(req: Request, res: Response) {
  try {
    const data = await fetchPlaylist();
    return Response.json((data));
  } catch (error) {
    console.error('Error fetching Spotify playlist:', error);
  }
};