import coverImage from "../assets/header.png";

import OptimizedImage from "../components/OptimizedImage";

export default function Home() {
  return (
    <div className="flex min-w-full justify-center">
      <div className="container my-80">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-col gap-10 items-start">
            <h1 className="font-nunito font-bold text-5xl lg:text-7xl">
              Find a Perfect Furry Companion
            </h1>
            <p className="font-syne text-xl lg:max-w-2xl xl:text-2xl">
              Give love, home and befriend to these loyal rescued cats and dogs
              gain a friend for life
            </p>
            <div className="flex gap-10">
              
            </div>
          </div>
          <div>
            <OptimizedImage image={coverImage} alt="cover-image" width={800} />
          </div>
        </div>
      </div>
    </div>
  );
}
