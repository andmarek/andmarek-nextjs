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
            Hi! I'm <span className="font-medium">Andrew Marek</span>, a software engineer at <span className="italic">Optum</span>. 
            Welcome to my digital <span className="underline">homepage</span>, where you can find information on projects 
            I've worked on, my resume, and gain a little insight into who I am and what I'm about. 
          </p>
        </div>

        <h1 className="text-4xl font-extrabold text-papaya-whip mb-4 tracking-tighter leading-tight font-serif">
            current 10 spotify playlist
          </h1>
        <div className="bg-licoric rounded-lg shadow-lg">
          <p className="text-lg leading-relaxed mb-4 font-light tracking-wide">
            I maintain a playlist of my top 10 favorite songs at any given time 
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
