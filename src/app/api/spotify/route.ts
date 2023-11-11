import { fetchPlaylist } from '@/app/about/spotifyData';

export async function GET(req: Request, res: Response) {
  try {
    const data = await fetchPlaylist();
    console.log('data', data);
    return Response.json((data));
  } catch (error) {
    console.error('Error fetching Spotify playlist:', error);
  }
};