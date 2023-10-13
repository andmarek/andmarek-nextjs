import SpotifyWebApi from "spotify-web-api-node";

const TopTenTracks = async () => {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });

  try {
    const credentials = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(credentials.body["access_token"]);
    const trackData = await spotifyApi.getPlaylistTracks(
      "15HVxOaAQS1RquOtu0Ije2"
    );
    const tracks = trackData.body.items;

    return (
      <div className="bg-raisin-black text-cinereous p-6 mx-auto w-full">
        {tracks.map((track, index) => (
          <div key={index} className="border-b py-2">
            {index + 1}. {track.track?.name || "Unknown Track"} -{" "}
            {track.track?.artists?.[0]?.name || "Unknown Artist"}
          </div>
        ))}
      </div>
    );
  } catch (err) {
    console.log("Something went wrong!", err);
    return (
      <div className="bg-raisin-black text-cinereous p-6 mx-auto w-full md:w-3/4 lg:w-1/2">
        {" "}
        Error fetching tracks occurred.{" "}
      </div>
    );
  }
};

export default TopTenTracks;
