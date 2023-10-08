import SpotifyWebApi from "spotify-web-api-node";

const TopTenTracks = async () => {
    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    });
    let topTenTracks = null;

    try {
        const credentials = await spotifyApi.clientCredentialsGrant();
        spotifyApi.setAccessToken(credentials.body['access_token']);
        const trackData = await spotifyApi.getPlaylistTracks('15HVxOaAQS1RquOtu0Ije2');
        const tracks = trackData.body.items;

    return (
        <div className="text-papaya-whip">
            {tracks.map((track, index) => (<div key={index}>{track.track.name} - {track.track.artists[0].name}</div>))}
        </div>
    )
    } catch (err) {
        console.log("Something went wrong!", err)
        return <div> Error fetching tracks occurred. </div>
    }
};

export default TopTenTracks;