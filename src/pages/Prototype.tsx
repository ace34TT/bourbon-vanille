import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
//
const loadImage = async (path: string): Promise<string> => {
  try {
    const imageModule = await import(path);
    return imageModule.default;
  } catch (error) {
    console.error("Error loading image:", error);
    return "";
  }
};

const imagePaths = [
  "./../assets/backgrounds/1.jpg",
  "./../assets/backgrounds/2.jpg",
  "./../assets/backgrounds/3.jpg",
  "./../assets/backgrounds/5.jpg",
];

export default function Prototype() {
  const [loadedImages, setLoadedImages] = useState<any[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const loaded = await Promise.all(
        imagePaths.map((path) => loadImage(path))
      );
      setLoadedImages(loaded);
    };
    loadImages();
  }, []);
  useEffect(() => {}, []);
  return (
    <>
      {loadedImages.length === imagePaths.length && (
        <>
          <div className="3d-section relative">
            <div className="w-screen h-screen main-section sticky top-0 relative">
              <div
                className="w-full h-full absolute z-10"
                style={{ zIndex: 10 }}
              >
                <img
                  src={loadedImages[0]}
                  alt="Your Image"
                  className="w-full h-full object-cover"
                ></img>
              </div>
              <div
                className="w-full h-full absolute z-20"
                style={{ zIndex: 20 }}
              >
                <img
                  src={loadedImages[1]}
                  alt="Your Image"
                  className="w-full h-full object-cover"
                ></img>
              </div>
              <div
                className="w-full h-full absolute z-30"
                style={{ zIndex: 30 }}
              >
                <img
                  src={loadedImages[2]}
                  alt="Your Image"
                  className="w-full h-full object-cover"
                ></img>
              </div>
              <div
                className="w-full h-full absolute z-40"
                style={{ zIndex: 40 }}
              >
                <img
                  src={loadedImages[3]}
                  alt="Your Image"
                  className="w-full h-full object-cover"
                ></img>
              </div>
            </div>
            {/*  */}
            <div className="sub-section-1 px-32 flex justify-around items-center h-screen w-screen absolute top-0  z-20 bg-gray-500 opacity-50">
              <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui
                fugiat inventore autem quibusdam voluptatibus, placeat rem nisi
                enim. Omnis, expedita totam.
              </div>
              <div className="flex-1"></div>
            </div>
            <div className="sub-section-2 px-32 flex justify-around items-center h-screen w-screen z-20 bg-yellow-500 opacity-50">
              <div className="flex-1"></div>
              <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui
                fugiat inventore autem quibusdam voluptatibus, placeat rem nisi
                enim. Omnis, expedita totam.
              </div>
            </div>
            <div className="sub-section-3 px-32 flex justify-around items-center h-screen w-screen z-20 bg-green-500 opacity-50">
              <div className="flex-1"></div>
              <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui
                fugiat inventore autem quibusdam voluptatibus, placeat rem nisi
                enim. Omnis, expedita totam.
              </div>
            </div>
            <div className="sub-section-3 px-32 flex justify-around items-center h-screen w-screen z-20 bg-red-500 opacity-50">
              <div className="flex-1"></div>
              <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui
                fugiat inventore autem quibusdam voluptatibus, placeat rem nisi
                enim. Omnis, expedita totam.
              </div>
            </div>
          </div>
          <div className="h-screen bg-gray-500 flex justify-center items-center">
            Footer
          </div>
        </>
      )}
    </>
  );
}
