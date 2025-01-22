import Image from "next/image";

interface CardProps {
  title: string;
  text: string;
  link?: string;
  linkText?: string;
  image?: React.ReactNode;
}

export default function About() {
  return (
    <div className="text-primary-content min-h-screen relative bg-primary pb-4 flex flex-colitems-center ">
      <div className=" absolute h-full w-full overflow-clip">
        <Image
          alt="bg"
          height={1000}
          width={1000}
          src="/cyclone.svg"
          className="absolute w-full h-full -left-1/3 top-1/3 scale-[2] mix-blend-overlay opacity-70"
        />
      </div>
      <div className="pt-20 flex flex-col w-full items-center gap-10 z-10">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse ">
          <div className="basis-2/3 flex gap-10 justify-center h-full flex-col">
            <div className="h-80 w-full rounded-lg shadow-xl">
              <Image
                src="/Working.jpeg"
                className="h-full w-full object-cover rounded-lg"
                height={300}
                width={300}
                alt="image-1"
              />
            </div>
            <div className="h-80 w-full rounded-lg shadow-xl">
              <Image
                src="/meet.jpeg"
                className="h-full w-full object-cover rounded-lg"
                height={300}
                width={300}
                alt="image-1"
              />
            </div>
          </div>
          <div className="px-10">
            <h1 className="text-2xl sm:text-3xl  md:text-6xl font-bold">
              Wait, who?
            </h1>
            <p className="py-20 pt-10 text-xl max-w-sm sm:max-w-2xl">
              We are Alacrity Education, a youth-founded NGO, created by young
              people for young people, driven by the desire to promote
              high-quality STEAM (Science, Technology, Engineering, and
              Mathematics) education.
            </p>
            <h1 className="text-2xl font-semibold pt-5">
              Not just keyboard warriors
            </h1>
            <p className="py-20 pt-5 text-xl">
              Our goal is to advocate for quality education and promote it in
              the most practical and pragmatic way possible. We don't want to
              remain just an "online publication" or an Instagram account. We
              aim to organize hands-on activities where interested individuals
              can practically develop their skills over longer periods of time.
            </p>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1737549060">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
