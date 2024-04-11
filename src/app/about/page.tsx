"use client";

import Link from "next/link";
import useSWR from "swr";
import { ThreeDots } from "react-loader-spinner";

type ExternalUrls = {
  spotify: string;
};

type Track = {
  id: string;
  name: string;
  external_urls: ExternalUrls;
  artists: [
    {
      name: string;
      external_urls: ExternalUrls;
    }
  ];
};

type Playlist = {
  items: {
    track: Track;
  }[];
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function useSpotifyPlaylists() {
  const { data, error } = useSWR<Playlist>("/api/spotify", fetcher, {
    refreshInterval: 10000,
  });
  return {
    playlists: data,
    isLoading: !error && !data,
    isError: error,
  };
}
function SpotifyPlaylists() {
  const { playlists, isLoading, isError } = useSpotifyPlaylists();

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex place-content-center">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#756D94"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  // Optionally, handle error state
  if (isError) {
    return <div>Error loading playlists.</div>;
  }

  // Render playlists if not loading and no error
  return (
    <section className="hover:border-moss-green transition-all duration-300 rounded-lg p-2">
      <ul className="mt-4">
        {playlists?.items?.map((item, index) => (
          <div className="grid grid-cols-2" key={index}>
            <Link
              href={item.track.external_urls.spotify}
              className="font-sans transition-all duration-300 p-2 hover:text-papaya-whip text-champagne-pink"
              key={item.track.id}
            >
              {index + 1}. {item.track.name} {" "}
            </Link>
            <Link
              href={item.track.artists[0].external_urls.spotify}
              className="p-2 font-sans text-chinese-violet hover:text-plum transition-all"
              key={`${item.track.artists[0].name}-${index}`}
            >
              {item.track.artists[0].name}{" "}
            </Link>
          </div>
        ))}
      </ul>
    </section>
  );
}

export default function About() {
  return (
    <div className="bg-raisin-black text-cinereous min-h-screen p-6 font-sans">
      <div className="max-w-2xl mx-auto">
        <div id="intro" className="mb-12">
          <h1 className="text-4xl text-papaya-whip mb-4 tracking-tighter leading-tight font-sans">
            about
          </h1>
          <div className="flex-col space-y-4">
            <p className="text-lg leading-relaxed font-light tracking-wide font-sans">
              I&apos;m a software engineer at Optum on a team whose mission is
              to create the next evolution of healthcare tools to empower
              advanced analytics capabilities for billions of healthcare
              transactions.{" "}
            </p>
            <p className="text-lg leading-relaxed font-light tracking-wide font-sans">
              I&apos;m originally from the Chicago-land area and I attended Iowa
              State University and received a bachelor&apos;s of science in
              Software Engineering in 2021. During my time there, I interned at
              Principal Financial as a software engineer and was a software
              engineering peer mentor for 2 years.
            </p>
            <p className="text-lg leading-relaxed font-light tracking-wide font-sans">
              Outside of tech, I&apos;m an avid runner (please follow me on
              Strava) and dabble in cycling, climbing, rollerblading, and
              various outdoor activities.
            </p>
          </div>
        </div>

        <h1 className="text-4xl  text-papaya-whip mb-4 tracking-tighter leading-tight font-sans">
          current 10
        </h1>
        <div className="bg-licoric rounded-lg">
          <p className="text-lg leading-relaxed mb-4 font-light tracking-wide font-sans">
            I listen to *a lot* of music, and so naturally I maintain a playlist
            of my top 10 favorite songs at any given time. Below is what&apos;s
            currently on the list (powered by Spotify).
          </p>
          <SpotifyPlaylists />
        </div>
      </div>
    </div>
  );
}
