import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function LottieSection2() {
  return (
    <section className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] bg-white overflow-hidden">
      <div className="flex w-full h-full">
        {/* Repeat the square animation multiple times to fill width */}
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className="flex-shrink-0 aspect-square h-full">
            <DotLottieReact
              src="https://lottie.host/7ba4cd4a-9569-4d6a-aea2-39b3ae4b035d/vUnOigrrNk.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
