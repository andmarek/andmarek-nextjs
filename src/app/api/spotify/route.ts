import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { fetchPlaylist } from '@/app/about/spotifyData';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchPlaylist();
    //res.status(200).json(data);
    console.log(data)
    return Response.json((data));
  } catch (error) {
    console.error('Error fetching Spotify playlist:', error);
    res.status(500).json({ error: 'Failed to fetch Spotify playlist' });
  }
};