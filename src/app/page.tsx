"use client";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { LuMapPin, LuMail, LuPhone } from "react-icons/lu";
import MenuMobile from "./components/layout/mobile_menu";
import Button from "./components/atoms/Button";

export default function Home() {
  return (
    <main>
      <header className="bg-dark fixed inset-0 z-10 container mx-auto flex h-[102px] items-center justify-between pt-[50px]">
        <div className="flex items-center gap-2.5">
          <div className="relative mx-auto h-[69px] w-[69px] lg:h-[102px] lg:w-[102px]">
            <Image src="/logo.png" alt="Logo App" fill />
          </div>
          <div className="relative mx-auto h-7 w-[46px] lg:h-[46px] lg:w-[76px]">
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
        <div className="hidden items-center gap-[38px] lg:flex">
          <Button className="btn btn-light">Contact Us</Button>
          <Button className="btn btn-primary">Join Hydra</Button>
        </div>

        <MenuMobile />
      </header>

      <section className="container mx-auto flex h-screen flex-col justify-center gap-24 pt-[100px]">
        <div className="flex items-center justify-between sm:flex-col-reverse lg:flex-row">
          <div className="flex max-w-[450px] flex-col">
            <h1 className="text-[40px] font-bold">
              <span className="from-primary to-base bg-linear-to-r bg-clip-text text-[46px] text-transparent">
                Dive
              </span>{" "}
              Into The Depths
            </h1>
            <h2 className="text-[40px] font-bold">
              Of{" "}
              <span className="from-base to-primary bg-linear-to-r bg-clip-text text-[46px] text-transparent">
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
          <div className="relative h-[426px] w-[490px]">
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
            <div className="absolute inset-0 z-20 overflow-hidden rounded-t-[100px] rounded-br-[100px] rounded-bl-[240px] border-17 border-[#00000013]">
              <Image
                src="/vr.png"
                alt="Hydra Virtual Reality"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around rounded-full bg-radial from-[#3A3456] from-0% to-[#211E2E] to-95% px-[50px] py-[58px] shadow-lg">
          <div className="flex items-center justify-center gap-5">
            <LuMapPin className="text-primary text-5xl" />
            <div className="flex flex-col">
              <h3 className="text-[24px] font-bold">Pay Us a Visit</h3>
              <p className="text-[14px]">
                Union St, Seattle, WA 98101, United States
              </p>
            </div>
          </div>
          <div className="border-primary/40 flex items-center justify-center gap-5 border-x px-12">
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
