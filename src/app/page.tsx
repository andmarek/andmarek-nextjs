import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <main className="bg-raisin-black flex min-h-screen flex-col items-center">
        <div className="items-center justify-between font-mono text-sm">
          <Hero />
        </div>
      </main>
    </div>
  );
}
