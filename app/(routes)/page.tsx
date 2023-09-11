import Image from "next/image";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";
import "./assets/css/style.css";

import news1 from "./assets/images/naa-01.jpg";
import news2 from "./assets/images/naa-02.jpg";
import news3 from "./assets/images/naa-03.jpg";
import news4 from "./assets/images/naa-04.png";

import ph_Logo from "./assets/images/philippines-logo.png";
import collection1 from "./assets/images/collection-01.jpg";
import collection2 from "./assets/images/collection-02.jpg";
import collection3 from "./assets/images/collection-03.jpg";
import collection4 from "./assets/images/collection-04.jpg";

import category1 from "./assets/images/category-01.png";
import category2 from "./assets/images/category-02.jpg";
import category3 from "./assets/images/category-03.jpg";
import category4 from "./assets/images/category-04.jpg";
import category5 from "./assets/images/category-05.jpg";

import fb from "./assets/images/fb-logo.svg";
import twitter from "./assets/images/twitter-logo.svg";
import pinterest from "./assets/images/pinterest-logo.svg";
import tiktok from "./assets/images/tiktok-logo.svg";
import instagram from "./assets/images/instagram-logo.svg";

import about_us from "./assets/images/about-us-logo.png";

const HomePage = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 items-center gap-12 lg:max-h-screen">
        <div className="ms-5">
          <p className="text-xl mb-3 ">ITS ALL HERE</p>
          <h1 className="text-3xl flex-wrap flex break-words lg:text-7xl md:text-5xl">
            SHOP AT YOUR OWN PACE
          </h1>
          <Link href="/store">
            <button className="border border-black p-2 rounded-full lg:px-8 lg:py-4 mt-8 ms-5 lg:text-xl text-sm px-4 hover:bg-black hover:text-white">
              Explore Now! &#8594;
            </button>
          </Link>
        </div>
        <Image src={ph_Logo} alt="ph-logo" className="max-h-[500px] " />
      </div>

      {/* Pannel 2 */}
      <div className=" mt-20 ">
        <h1 className="flex justify-center lg:text-3xl text-2xl font-bold items-center gap-6">
          <hr className="border border-black w-[5%]" />
          Our Collections
          <hr className="border border-black w-[5%]" />
        </h1>

        <div className="grid grid-cols-4 gap-5 mt-7 ">
          <div className="aspect-ratio-4/5 relative image_item">
            <Image
              src={collection1}
              alt="collection1"
              className="object-cover h-full w-full"
            />
            <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
              <div className="flex gap-4">
               <Link href="/">
                  <p className="text-white text-lg font-medium">Coming Soon</p>
               </Link>
              </div>
            </div>
          </div>
          <div className="aspect-ratio-4/5 relative image_item">
            <Image
              src={collection2}
              alt="collection2"
              className="object-cover h-full w-full"
            />
            <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
              <div className="flex gap-4">
              <Link href="/">
                  <p className="text-white text-lg font-medium">Coming Soon</p>
               </Link>
              </div>
            </div>
          </div>
          <div className="aspect-ratio-4/5 relative image_item">
            <Image
              src={collection3}
              alt="collection3"
              className="object-cover h-full w-full"
            />
            <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
              <div className="flex gap-4">
              <Link href="/">
                  <p className="text-white text-lg font-medium">Coming Soon</p>
               </Link>
              </div>
            </div>
          </div>
          <div className="aspect-ratio-4/5 relative image_item">
            <Image
              src={collection4}
              alt="collection4"
              className="object-cover h-full w-full"
            />
            <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
              <div className="flex gap-4">
              <Link href="/">
                  <p className="text-white text-lg font-medium">Coming Soon</p>
               </Link>
              </div>
            </div>
          </div>
        </div>

        <Link href="/store" className="flex justify-center">
          <button className=" border border-black p-2 rounded-full lg:px-12 lg:py-3 mt-8 ms-5 lg:text-xl text-sm px-4 hover:bg-black hover:text-white">
            See More! &#8594;
          </button>
        </Link>
      </div>

      {/* 3RD PANNEL */}
      <div className="py-10">
        <h1 className="flex justify-center lg:text-3xl text-2xl font-bold items-center gap-6">
          <hr className="border border-black w-[5%]" />
          Categories
          <hr className="border border-black w-[5%]" />
        </h1>

        <div className="grid  gap-5 mt-7 ">
          <div className="grid grid-cols-2 gap-6 ">
            <div className="aspect-video relative image_item">
              <Image
                src={category1}
                alt="category1"
                className="object-cover h-full w-full "
              />
              <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <div className="flex gap-4">
                <Link href="/">
                  <p className="text-white text-lg font-medium">Textiles</p>
               </Link>
                </div>
              </div>
            </div>
            <div className="aspect-video relative image_item">
              <Image
                src={category2}
                alt="category2"
                className="object-cover h-full w-full "
              />
              <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <div className="flex gap-4">
                  <p>Hello</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="aspect-video relative image_item">
              <Image
                src={category3}
                alt="category3"
                className="object-cover h-full w-full "
              />
              <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <div className="flex gap-4">
                  <p>Hello</p>
                </div>
              </div>
            </div>
            <div className="aspect-video relative image_item">
              <Image
                src={category4}
                alt="category4"
                className="object-cover h-full w-full "
              />
              <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <div className="flex gap-4">
                  <p>Hello</p>
                </div>
              </div>
            </div>
            <div className="aspect-video relative image_item">
              <Image
                src={category5}
                alt="category5"
                className="object-cover h-full w-full "
              />
              <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <div className="flex gap-4">
                  <p>Hello</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PANNEL 4 */}
      <article className="min-h-screen w-[80%] mx-auto mb-44 md:mb-80">
        <h1 className="flex justify-center lg:text-3xl text-2xl mt-15  py-10  font-bold items-center gap-6">
          <hr className="border border-black w-[5%]" />
          News and Articles
          <hr className="border border-black w-[5%]" />
        </h1>

        <div className="grid lg:grid-cols-2 gap-3">
          <div className="row-span-3 aspect-ratio-[2/4] relative  max-h-[580px] ">
            <Image src={news1} alt="" className="object-cover h-full w-full " />
            <div className="absolute bottom-4 bg-[#FDF6F6] opacity-80 left-4 w-11/12 p-5">
              <p className="text-2xl font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora, velit.
              </p>
              <small className="mt-5 text-lg">July 15 2023</small>
            </div>
          </div>

          <div className="grid-flow-col max-h-[300px] gap-3">
            <div className="grid grid-cols-2 gap-4 aspect-square ">
              <Image
                src={news2}
                alt=""
                className="object-cover h-full w-full"
              />
              <div>
                <div className="bg-[#A8A2A5] w-20">
                  <p className="ms-4">Pottery</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  unde!
                </p>
              </div>

              <Image
                src={news3}
                alt=""
                className="object-cover h-full w-full"
              />
              <div>
                <div className="bg-[#A8A2A5] w-[90px]">
                  <p className="ms-4">Painting</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  unde!
                </p>
              </div>

              <Image
                src={news4}
                alt=""
                className="object-cover h-full w-full"
              />
              <div>
                <div className="bg-[#A8A2A5] w-24">
                  <p className="ms-4">Graphics</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  unde!
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[#539B87] lg:mt-2 w-full h-56 flex justify-center items-center align-middle p-4">
        <div>
          <h1 className="font-bold text-2xl mx-auto flex justify-center lg:text-4xl">
            "Unleash the Power of Art"
          </h1>
          <p className="text-center mt-2 text-lg lg:text-2xl">
            Embrace the vibrant creativity of Filipino artists and support their
            dreams.
          </p>
        </div>
      </section>

      <section className="">
        <div className="relative grid place-items-center">
          <div className="font-bold absolute -bottom-12 bg-white p-1 lg:text-3xl m-2 w-3/5 lg:w-2/5">
            <p className="flex justify-center bg-[#E1E1E1] p-5 ">
              GET TO KNOW THEM
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap lg:flex-nowrap sm:flex-1 items-center w-9/12 mt-32 gap-7 mx-auto">
        <Image src={about_us} alt="" className="max-w-[400px] flex justify-center mx-auto"/> 
        <div className="">
          <h1 className="font-bold text-4xl flex lg:justify-end justify-center mb-6">About Us</h1>
          <p className="lg:text-end sm:text-center">
            At <span className="font-bold">Obra</span>, we believe that art has
            the power to transform lives, ignite emotions, and bridge cultural
            gaps. We are committed to providing a supportive space where artists
            can shine, connect with art enthusiasts, and thrive in their
            creative journeys.
          </p>
          <Link href="/" className="flex lg:justify-end justify-center">
            <button className=" border border-black p-2 rounded-full lg:px-10 lg:py-2 mt-8 ms-5 lg:text-lg text-sm px-4 hover:bg-black hover:text-white">
              Read More! &#8594;
            </button>
          </Link>
        </div>
      </section>

      <section className="flex gap-5 justify-center my-14"> 
        <Image src={twitter} alt="" className="w-12"/>
        <Image src={pinterest} alt="" className="w-12"/>
        <Image src={tiktok} alt=""className="w-12"/>
        <Image src={fb} alt=""className="w-12"/>
        <Image src={instagram} alt=""className="w-12"/>
      </section>
    </Container>
  );
};

export default HomePage;
