import axios from "axios";

const fetchPlaylist = async () => {
  try {
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              process.env.SPOTIFY_CLIENT_ID +
                ":" +
                process.env.SPOTIFY_CLIENT_SECRET
            ).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const accessToken = tokenResponse.data.access_token;
    const playlistResponse = await axios.get(
      "https://api.spotify.com/v1/playlists/15HVxOaAQS1RquOtu0Ije2/tracks",
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    );
    return playlistResponse.data;
  } catch (error) {
    throw error;
  }
};

export async function GET(req: Request, res: Response) {
  try {
    const data = await fetchPlaylist();
    return Response.json((data));
  } catch (error) {
    console.error('Error fetching Spotify playlist:', error);
  }
};