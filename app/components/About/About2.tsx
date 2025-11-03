import ScrollReveal from '../ScrollReveal/ScrollReveal';

export default function About2() {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white">
      <div className="mx-24">
      <ScrollReveal
        baseOpacity={2}
        enableBlur={true}
        baseRotation={3}
        blurStrength={5}
        textClassName="text-xl font-semibold"
        
      >
      I am a dedicated Full-Stack Developer skilled in building scalable and dynamic web applications using PHP, JavaScript, and Node.js from crafting intuitive front-end interfaces to developing powerful back-end systems. I’m deeply passionate about exploring all areas of programming, including web development, AI, and other emerging technologies. Always eager to learn and innovate, I stay up to date with the latest tech trends to continuously expand my expertise. My goal is to create solutions that are not only functional and efficient but also impactful and inspiring for users.
      </ScrollReveal>
      </div>
    </section>
  )
}