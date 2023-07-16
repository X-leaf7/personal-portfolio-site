import Button from "../Button";
import FeaturedProject from "./FeaturedProjects";
import PersonalProjects from "./PersonalProjects";

const Project = () => {
  return (
    <div
      id="project-section"
      className="flex flex-col min-h-screen justify-center shadow-lg px-5 lg:px-16 py-5 lg:py-16 bg-base-100"
    >
      <div className="w-full flex flex-col my-5 justify-start items-start">
        <h3 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
          Client&apos;s Projects
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
          Portfolio
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content mb-5">
          Let&apos;s sneak a peek at my work.
        </h2>
        <p className="mb-5 font-light leading-loose w-full md:max-w-2xl text-xs md:text-base">
          Here is my short-listed work that I delivered to my clients and as
          well as my personal projects.
        </p>
      </div>

      <FeaturedProject />

      <Button type={"link"} link={"/archive"} text={"View more"} />
    </div>
  );
};

export default Project;
