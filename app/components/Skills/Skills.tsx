'use client';
import React from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaGithub, FaNodeJs, FaDocker } from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import { SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="w-12 h-12 text-red-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="w-12 h-12 text-blue-500" /> },
  { name: 'SASS', icon: <FaSass className="w-12 h-12 text-pink-500" /> },
  { name: 'JAVASCRIPT', icon: <FaJsSquare className="w-12 h-12 text-yellow-500" /> },
  { name: 'REACT JS', icon: <FaReact className="w-12 h-12 text-blue-400" /> },
  { name: 'GITHUB', icon: <FaGithub className="w-12 h-12 text-white" /> },
  { name: 'NODE JS', icon: <FaNodeJs className="w-12 h-12 text-green-500" /> },
  { name: 'FIREBASE', icon: <IoLogoFirebase className="w-12 h-12 text-yellow-400" /> },
  { name: 'MONGODB', icon: <SiMongodb className="w-12 h-12 text-green-400" /> },
  { name: 'DOCKER', icon: <FaDocker className="w-12 h-12 text-blue-600" /> },
];

const stripes = Array.from({ length: 12 });

export default function Skills() {
  return (
    <section className="hero-bg">
      <div className="absolute inset-0 flex flex-col transform -rotate-45 scale-[2.5]">
        {stripes.map((_, i) => {
          const fromTop = i % 2 === 0;
          const animationName = fromTop ? 'slide-in-top' : 'slide-in-bottom';
          const color = i % 2 === 0 ? 'bg-[#5682B1]' : 'bg-black';

          return (
            <div key={i} className="h-[14vmin] overflow-hidden">
                <div
                    className={`${color} h-full`}
                    style={{
                        animation: `${animationName} 1s ease-out forwards`,
                        animationDelay: `${i * 0.1}s`,
                        transform: fromTop ? 'translateY(-100%)' : 'translateY(100%)',
                    }}
                />
            </div>
          );
        })}
      </div>

      <div className="content-panel">
        <h2 className="title">What I do</h2>
        <p className="subtitle">
          I am from Indonesia and currently living in Depok. I am doing Bachelor's in Software engineering and I will graduate in the year 2025. I am Ui Ux designer and currently working as a freelancer.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:bg-gray-700"
            >
              {skill.icon}
              <span className="mt-4 text-sm font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
