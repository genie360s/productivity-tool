import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-[75vw] items-center justify-between  text-sm lg:flex">
        <Navbar />
      </div>

      
    </main>
  );
}
