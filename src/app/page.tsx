"use client";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { LuMapPin, LuMail, LuPhone } from "react-icons/lu";
import MenuMobile from "./components/layout/mobile_menu";

export default function Home() {
  return (
    <main>
      <header className="fixed inset-0 container bg-dark mx-auto flex items-center justify-between h-[102px] pt-[50px] z-10">
        <div className="flex items-center gap-2.5">
          <div className="relative mx-auto lg:w-[102px] lg:h-[102px] md:w-14 md:h-14">
            <Image src="/logo.png" alt="Logo App" fill />
          </div>
          <div className="relative mx-auto w-[76px] h-[46px]">
            <Image src="/logo_text.png" alt="Logo Text" fill />
          </div>
        </div>

        {/* Navbar Links */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-11 font-bold uppercase">
            <li>About</li>
            <li>Services</li>
            <li>Technologies</li>
            <li>How To</li>
          </ul>
        </nav>

        {/* Button Group */}
        <div className="hidden lg:flex items-center gap-[38px]">
          <button className="btn btn-light">Contact Us</button>
          <button className="btn btn-primary">Join Hydra</button>
        </div>

        <MenuMobile />
      </header>

      <section className="container mx-auto pt-[100px] h-screen flex flex-col justify-center gap-24">
        <div className="lg:flex md:block items-center justify-between">
          <div className="flex flex-col max-w-[450px]">
            <h1 className="text-[40px] font-bold">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-base">
                Dive
              </span>{" "}
              Into The Depths
            </h1>
            <h2 className="text-[40px] font-bold">
              Of{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-base to-primary">
                Virtual Reality
              </span>
            </h2>
            <p className="pt-9 pb-[66px] text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>

            <div className="flex items-center">
              <button className="btn btn-primary">Build Your World</button>
              <button className="btn text-primary">
                <GoArrowRight size={60} />
              </button>
            </div>
          </div>
          <div className="relative w-[490px] h-[426px]">
            {/* GARIS */}
            {/* <div className="fixed top-1/2 left-1/2 -z-10">
              <div
                className="fixed w-[600px] h-[900px] 
      rounded-full border border-white/10"
              ></div>
            </div>

            <div className="fixed top-0 left-1/2 -z-10">
              <div
                className="fixed w-[600px] h-[900px] 
      rounded-full border border-white"
              ></div>
            </div> */}

            {/* FRAME GAMBAR — ini yang punya shape dan overflow */}
            <div
              className="
      absolute inset-0
      rounded-t-[100px] rounded-br-[100px] rounded-bl-[240px]
      border-17 border-[#00000013]
      overflow-hidden
      z-20
    "
            >
              <Image
                src="/vr.png"
                alt="Hydra Virtual Reality"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around py-[58px] px-[50px] rounded-full bg-radial from-[#3A3456] from-0% to-[#211E2E] to-95% shadow-lg">
          <div className="flex items-center justify-center gap-5">
            <LuMapPin className="text-primary text-5xl" />
            <div className="flex flex-col">
              <h3 className="text-[24px] font-bold">Pay Us a Visit</h3>
              <p className="text-[14px]">
                Union St, Seattle, WA 98101, United States
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 px-12 border-x border-primary/40">
            <LuPhone className="text-primary text-5xl" />
            <div className="flex flex-col">
              <h3 className="text-[24px] font-bold">Give Us a Call</h3>
              <p className="text-[14px]">(110) 1111-1010</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <LuMail className="text-primary text-5xl" />
            <div className="flex flex-col">
              <h3 className="text-[24px] font-bold">Send Us a Message</h3>
              <p className="text-[14px]">Contact@HydraVTech.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
