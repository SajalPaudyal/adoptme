import coverImage from "../assets/header.png";
import CTABUtton from "../components/CTAButton";

import OptimizedImage from "../components/OptimizedImage";
import SwiperCarousel from "../components/SwiperCarousel";

export default function Home() {
  return (
    <div className="flex min-w-full justify-center">
      <main className="container my-80">
        <section>
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="flex flex-col gap-10 items-start">
              <h1 className="font-nunito font-bold text-5xl lg:text-7xl">
                Find a Perfect Furry Companion
              </h1>
              <p className="font-syne text-xl lg:max-w-2xl xl:text-2xl">
                Give Love. Give Home. Gain a Friend for Life. Adopt a Rescued
                Pet Today!
              </p>
              <div className="flex gap-10">
                <CTABUtton text="Adopt" buttonType="primary" />
                <CTABUtton text="Donate" buttonType="secondary" />
              </div>
            </div>
            <div>
              <OptimizedImage
                image={coverImage}
                alt="cover-image"
                width={800}
              />
            </div>
          </div>
        </section>
        <section className="my-60 px-20">
          <div className="mb-20 flex flex-col gap-5">
            <h2 className="text-6xl font-bold text-center">
              We are waiting for you
            </h2>
            <p className="text-2xl text-center">We are searching for a home and a companion, take us with you...</p>
          </div>
          <SwiperCarousel />
        </section>
      </main>
    </div>
  );
}
