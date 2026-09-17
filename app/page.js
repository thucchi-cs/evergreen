import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#9CB080] font-sans">
        
        <div className="flex flex-col w-full h-[100vh] items-center justify-center gap-6 text-center bg-gradient-to-b from-[#9CB080] from-70% to-[#70887E]">
          hello
        </div>

        <div className="flex flex-col w-full h-[100vh] items-center justify-center gap-6 text-center bg-gradient-to-b from-[#70887E] from-70% to-[#70887E]">
          hello
        </div>
        
    </div>
  );
}
