import Cover from "../components/Cover";
import NavBar from "../components/NavBar";
import Featured from "../components/products/Featured";
import Testimonies from "../components/products/Testimonies";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <NavBar />
      <Cover />
      <Featured />
      <Testimonies />
      <div className=" flex flex-wrap items-center place-content-between pt-8 pb-16 mx-4 md:mx-12 lg:mx-40">
        <div className="font-sans grayish">
          <h1 className="text-2xl">
            Mayu<span className="font-thin">Mayuni</span>
          </h1>
          <h1 className="text-lg">
            @MayuMayuni.<span className="text-sm">All rights reserved.</span>
          </h1>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <a href="https://www.facebook.com/mayu_mayuni-101985699066797/">
            <Image
              src="/icon-facebook.png"
              width={30}
              height={30}
              alt="facebook-icon"
            />
          </a>
          <a href="https://www.instagram.com/mayu_mayuni/">
            <Image
              src="/icon-instagram.png"
              width={30}
              height={30}
              alt="instagram-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
