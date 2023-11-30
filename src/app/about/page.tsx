"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function About() {
  const [playlist, setPlaylist] = useState<Playlist | null>(null);

  async function fetchPlaylistData() {
    try {
      const response = await fetch("/api/spotify");
      const data = await response.json();
      setPlaylist(data);
      data.items.map((item: any) => console.log(item.track));
    } catch (error) {
      console.log("Error fetching Spotify playlist: ", error);
      throw error;
    }
  }

  useEffect(() => {
    fetchPlaylistData();
  }, []);

  return (
    <div className="bg-raisin-black text-cinereous min-h-screen p-6 font-sans">
      <div className="max-w-2xl mx-auto">
        <div id="intro" className="mb-12">
          <h1 className="text-4xl text-papaya-whip mb-4 tracking-tighter leading-tight font-sans">
            about
          </h1>
          <p className="text-lg leading-relaxed font-light tracking-wide font-sans">
            Hi, I&apos;m Andrew! I&apos;m a software engineer currently living
            in Seattle. I currently work at Optum, as a backend engineer.
            I&apos;m well-versed in Python, AWS, and React. Although, I&apos;m
            always learning new stuff in my freetime.
          </p>
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

          {playlist && (
            <section className="hover:border-moss-green transition-all duration-300 border-2 rounded-lg p-5">
              <ul className="mt-4">
                {playlist.items.map((item, index) => (
                  <div className="flex" key={index}>
                    <Link
                      href={item.track.external_urls.spotify}
                      className="font-sans transition-all duration-300 p-2 hover:text-papaya-whip text-champagne-pink"
                      key={item.track.id}
                    >
                      {" "}
                      {index + 1}. {item.track.name} -{" "}
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
          )}
        </div>
      </div>
    </div>
  );
}
