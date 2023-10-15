"use client";

import { useEffect, useState } from "react";

type Track = {
  id: string;
  name: string;
  // ... other properties
};

type Playlist = {
  items: {
    track: Track;
  }[];
};

export default function About() {
  const [playlist, setPlaylist] = useState<Playlist | null>(null);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await fetch("/api/spotify");
        const data = await response.json();
        setPlaylist(data);
      } catch (error) {
        console.error("Error fetching playlist from API:", error);
      }
    };

    fetchPlaylistData();

    // Set up interval to fetch data every few minutes (e.g., every 10 minutes)
    const interval = setInterval(fetchPlaylistData, 600000); // 600000ms = 10 minutes

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-raisin-black text-cinereous min-h-screen p-6 font-sans">
      <div className="max-w-2xl mx-auto">
        <div id="intro" className="mb-12">
          <h1 className="text-4xl font-extrabold text-papaya-whip mb-4 tracking-tighter leading-tight font-serif">
            whoami
          </h1>
          <p className="text-lg leading-relaxed font-light tracking-wide">
            Hi, I&apos;m Andrew! I&apos;m a software engineer currently living
            in Seattle. I currently work at Optum, as a backend engineer.
            I&apos;m well-versed in Python, AWS, and React. Although, I&apos;m
            always learning new stuff in my freetime.
          </p>
        </div>

        <h1 className="text-4xl font-extrabold text-papaya-whip mb-4 tracking-tighter leading-tight font-serif">
          current 10
        </h1>
        <div className="bg-licoric rounded-lg shadow-lg">
          <p className="text-lg leading-relaxed mb-4 font-light tracking-wide">
            I listen to *a lot* of music, and so naturally I maintain a playlist
            of my top 10 favorite songs at any given time. Below is what&apos;s
            currently on the list (powered by Spotify).
          </p>

          {playlist && (
            <section>
              <ul className="mt-4">
                {playlist.items.map((item) => (
                  <li className="font-mono transition-all duration-300 p-2 hover:text-papaya-whip text-champagne-pink" key={item.track.id}>{item.track.name}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
