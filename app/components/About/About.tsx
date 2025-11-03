import TiltedCard from '../TiltedCard/TiltedCard';
import AnimatedContent from '../AnimatedContent/AnimatedContent'
import ScrollFloat from '../ScrollFloat/ScrollFloat';
import PixelCard from '../PixelCard/PixelCard';

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center justify-center gap-40">
        <div>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
          textClassName="text-9xl font-bold"
        >
          About Me
        </ScrollFloat>
        </div>
        <div>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <div>
              <TiltedCard
                imageSrc="/assets/About.jpg"
                altText="Razzy Muflih"
                captionText="This Is Me"
                containerHeight="350px"
                containerWidth="350px"
                imageHeight="600px"
                imageWidth="450px"
                rotateAmplitude={15}
                scaleOnHover={1.3}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                imageClassName="grayscale"
                overlayContent={
                  <div style={{ width: '450px', height: '600px' }}>
                    <PixelCard variant="blue" className="bg-transparent border-none w-full h-full" />
                  </div>
                }
              />
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
