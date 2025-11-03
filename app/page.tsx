'use client';
import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import TextType from "./components/TextType/TextType";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import About from "./components/About/About";
import About2 from "./components/About/About2"
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <main>
    <div className="relative z-10">
        <div className="grid grid-cols-12 min-h-[calc(100vh-4rem)]">
          <div className="col-span-6 flex flex-col items-center justify-center" style={{position: 'relative'}}>
            <div className="text-white text-7xl font-bold font-poppins mb-4">
              <TextType
                text={["Muhamad Razzy Muflih"]}
                typingSpeed={100}
                pauseDuration={3000}
                showCursor={true}
                cursorCharacter="_"
              />
            </div>
            <div className="flex items-center text-6xl font-bold font-poppins">
              <span className="mr-4 text-white">Saya</span>
              <RotatingText
                texts={['Student', 'Web Developer', 'Enginering', 'Fullstack Developer']}
                mainClassName="bg-[#5682B1] text-white px-2 py-1 rounded-lg overflow-hidden"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
          <div className="col-span-6 flex items-center justify-center bg-transparent">
            <Lanyard position={[2, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    <ScrollVelocity texts={["MUHAMAD RAZZY MUFLIH", "MUHAMAD RAZZY MUFLIH"]} />
    <About />
    <About2 />
    <Skills />
    </main>
  );
}
