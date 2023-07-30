import { Game } from "@/components/Game.jsx";

export default function Home() {
  return (
    <main className="flex px-5 w-screen h-screen justify-center items-center relative overflow-hidden">
      
      <div className="w-[914px] h-[1130px] rounded-[20px] bg-[#5C62C2] absolute -rotate-[65deg] -left-[850px] top-[350px] sm:top-[400px] sm:-left-[600px] md:-left-[500px] lg:-left-[200px] xl:-left-[100px] 2xl:-left-[50px]"></div>

      <div className="w-[914px] h-[1130px] rounded-[20px] bg-[#5C62C2] absolute -rotate-[65deg] -right-[900px] sm:-right-[850px] md:-right-[750px] lg:-right-[600px] xl:-right-[500px] 2xl:-right-[320px] -top-[250px]"></div>

      <Game />
    </main>
  )
}
