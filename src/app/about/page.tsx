// About.tsx
import TopTenTracks from "./spotifyData";

const About = () => {
  return (
    <div className="bg-raisin-black text-cinereous min-h-screen p-6 font-sans">
      <div className="max-w-2xl mx-auto">
        <div id="intro" className="mb-12">
          <h1 className="text-4xl font-extrabold text-papaya-whip mb-4 tracking-tighter leading-tight font-serif">
            whoami
          </h1>
          <p className="text-lg leading-relaxed font-light tracking-wide">
            Hi, I&apos;m Andrew! I&apos;m a software engineer currently living in Seattle.
            I currently work at Optum, as a backend engineer.

            I&apos;m well-versed in Python, AWS, and React.  Although, I&apos;m always learning new stuff in my freetime.


          </p>
        </div>

        <h1 className="text-4xl font-extrabold text-papaya-whip mb-4 tracking-tighter leading-tight font-serif">
          current 10
        </h1>
        <div className="bg-licoric rounded-lg shadow-lg">
          <p className="text-lg leading-relaxed mb-4 font-light tracking-wide">
            I listen to *a lot* of music, and so naturally I maintain a playlist of my top 10 favorite songs at any given time. Below is what&apos;s currently on the list (powered by Spotify).
          </p>

          <div className="">
            <TopTenTracks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
