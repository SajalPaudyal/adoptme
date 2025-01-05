import OptimizedImage from "./OptimizedImage";
import dogImage from "../assets/dog.png";
import { useState } from "react";

export default function Tabs() {
  const [tab, setTab] = useState<number>(0);

  return (
    <section className="p-6 lg:p-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8">
          <div className="h-[500px] overflow-y-auto rounded-lg shadow-sm bg-white p-6">
            <div
              className={`transition-opacity duration-500 ${
                tab === 0 ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <div className="flex flex-col items-center">
                <OptimizedImage
                  image={dogImage}
                  alt="cute-dog"
                  width={250}
                />
                <div className="text-xl flex flex-col gap-3 mt-6 text-center">
                  <div className="flex items-center space-x-5">
                    <span className="text-red-500 text-xl font-semibold">
                      Spread love and kindness
                    </span>
                  </div>
                  <div className="flex items-center space-x-5">
                    <span className="text-blue-500 text-xl font-semibold">
                      Influence us to save more pets
                    </span>
                  </div>
                  <div className="flex items-center space-x-5">
                    <span className="text-yellow-500 text xl font-semibold">
                      Get a best friend
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-opacity duration-500 ${
                tab === 1 ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Register",
                    description:
                      "Register yourself to the system with your personal details and contact.",
                  },
                  {
                    step: 2,
                    title: "Fill up",
                    description: "Fill up the form of consent.",
                  },
                  {
                    step: 3,
                    title: "Contact",
                    description:
                      "You'll be contacted by the owner or one of our colleagues.",
                  },
                  {
                    step: 4,
                    title: "Have a companion",
                    description:
                      "Enjoy a new adventure with your new best friend.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-700">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`transition-opacity duration-500 ${
                tab === 2 ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold text-yellow-700 mb-4">
                  Participate in Our Mission
                </h2>
                <p className="text-gray-600 text-center max-w-md">
                  Join us in making a difference! Whether you want to volunteer,
                  donate, or spread the word, your participation helps us save
                  more pets and bring joy to families.
                </p>
                <button className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300">
                  Get Involved
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <button
              className={`p-5 w-full lg:w-64 border-2 rounded-lg transition duration-300 ${
                tab === 0
                  ? "border-green-500 bg-green-50"
                  : "border-green-100 bg-white hover:bg-green-50"
              }`}
              onClick={() => setTab(0)}
            >
              <h2 className="text-green-700 text-xl font-semibold">Why Adopt</h2>
            </button>
            <button
              className={`p-5 w-full lg:w-64 border-2 rounded-lg transition duration-300 ${
                tab === 1
                  ? "border-blue-500 bg-blue-50"
                  : "border-blue-100 bg-white hover:bg-blue-50"
              }`}
              onClick={() => setTab(1)}
            >
              <h2 className="text-blue-700 text-xl font-semibold">
                How it works
              </h2>
            </button>
            <button
              className={`p-5 w-full lg:w-64 border-2 rounded-lg transition duration-300 ${
                tab === 2
                  ? "border-yellow-500 bg-yellow-50"
                  : "border-yellow-100 bg-white hover:bg-yellow-50"
              }`}
              onClick={() => setTab(2)}
            >
              <h2 className="text-yellow-700 text-xl font-semibold">
                Participate
              </h2>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}