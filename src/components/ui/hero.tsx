import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen relative">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <div className="w-1/2">
          <Image
            src="/logo.svg"
            alt="hero"
            width={1000}
            height={1000}
            className="h-full w-full"
            layout="responsive"
          />
        </div>
        <div className="max-w-1/2">
          <h1 className="text-6xl font-bold">
            Give a child a chance to{" "}
            <span className="text-primary">qualitative education</span>
          </h1>
          <p className="py-6">
            90% of romanians don’t know the metrics for measuring air quality
            <br />
            60% of students don’t think their teachers are prepared to teach
            about environmental problems
          </p>
          <a
            href="https://buymeacoffee.com/alacrity_education"
            className="btn btn-primary"
          >
            Donate
          </a>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1737547199">
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
