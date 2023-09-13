import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/ArrowUpRight.svg";

export default function AboutMainContent(props) {
  return (
    <div className="flex h-full flex-col items-center gap-28 py-32 lg:pt-24 xs:pt-16">
      <div
        className={`flex h-fit w-fit gap-[8rem] px-[18rem] font-light 3xl:pl-[16rem] 3xl:pr-[10rem] 2xl:gap-[5rem] xl:pl-[13rem]
                    xl:pr-[8rem] lg:gap-[5rem] lg:px-[4rem] md:gap-[3rem] md:px-[3rem] sm:flex-col xs:px-[2.5rem]`}
      >
        <div className="flex flex-col justify-between py-3 sm:flex-row sm:items-center">
          <div
            className={`flex flex-col gap-1 text-3xl text-lighter-gray 3xl:text-2xl 2xl:text-xl xl:text-[2vw] lg:text-[2.5vw] 
                        md:text-[2.75vw] sm:text-[4vw] xs:text-[4.5vw]`}
          >
            <span>#Dev</span>
            <span>#Web</span>
            <span>#Software</span>
            <span>#ProceduralGraphics</span>
            <span>#WebGL</span>
            <span>#Freelance</span>
          </div>
          <div
            className={`flex flex-col gap-3 text-2xl text-light-gray dark:text-off-white 3xl:text-xl 2xl:text-lg xl:text-[1.75vw]
                        lg:text-[2.25vw] sm:text-[3.75vw] xs:text-[4vw]`}
          >
            <Link
              to={"mailto:brendanmerritt1@gmail.com"}
              id="underline"
              className="flex w-fit cursor-pointer gap-1 after:bg-light-gray"
            >
              <span>Email</span>
              <Arrow
                id={`${props.dark ? "icon-dark" : "icon-light"}`}
                className="h-9 3xl:h-8 2xl:h-7 xl:h-[2.5vw] lg:h-[3.5vw] sm:h-[6vw] xs:h-[6.5vw]"
              />
            </Link>
            <Link
              to={"https://github.com/brendanmerritt1"}
              id="underline"
              className="flex w-fit cursor-pointer gap-1 after:bg-light-gray"
            >
              <span>GitHub</span>
              <Arrow
                id={`${props.dark ? "icon-dark" : "icon-light"}`}
                className="h-9 3xl:h-8 2xl:h-7 xl:h-[2.5vw] lg:h-[3.5vw] sm:h-[6vw] xs:h-[6.5vw]"
              />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/brendanmerritt1/"}
              id="underline"
              className="flex w-fit cursor-pointer gap-1 after:bg-light-gray"
            >
              <span>LinkedIn</span>
              <Arrow
                id={`${props.dark ? "icon-dark" : "icon-light"}`}
                className="h-9 3xl:h-8 2xl:h-7 xl:h-[2.5vw] lg:h-[3.5vw] sm:h-[6vw] xs:h-[6.5vw]"
              />
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-col gap-16 text-5xl leading-normal text-darker-gray dark:text-off-white 3xl:text-4xl 3xl:leading-normal 
                      2xl:text-3xl 2xl:leading-relaxed xl:text-[2.75vw] lg:text-[3.5vw] md:text-[3.75vw] sm:text-[5vw] 
                      xs:text-[5.5vw] xs:leading-[1.85]`}
        >
          <span>
            Hello, I'm Brendan Merritt - a web & software developer based in
            Raleigh, North Carolina.
          </span>
          <span>
            I create websites and software using languages such as JavaScript
            and C++, and frameworks such as React and Node. Currently my
            favorite tech stack for web development is MERN. I have 2+ years of
            full-stack development experience, with my main strength
            specializing in frontend.
          </span>
        </div>
      </div>
      <div className="w-[30vw] xl:w-[35vw] lg:w-[45vw] md:w-[50vw] xs:w-[65vw]">
        <img
          src="/kitty.jpg"
          alt="Brendan's cat, Luna"
          className="rounded-xl"
        />
      </div>
      <div
        className={`flex flex-col gap-16 px-[18rem] text-5xl leading-normal font-light text-darker-gray dark:text-off-white 3xl:pr-[10rem] 
                    3xl:text-4xl 3xl:leading-normal 2xl:text-3xl 2xl:leading-relaxed xl:pl-[14rem] xl:text-[2.75vw] lg:px-[4rem] 
                    lg:text-[3.5vw] md:px-[3rem] md:text-[3.75vw] sm:text-[5vw] xs:text-[5.5vw] xs:leading-[1.85]`}
      >
        <span>
          I graduated from the University of North Carolina at Chapel Hill with
          a major in Computer Science and a minor in Applied Sciences and
          Engineering. I am experienced in interactive development, as well as
          multidisciplinary engineering within the intersection of software and
          hardware.
        </span>
        <span>
          I also love eating cuisines from around the world, my two favorites
          being Mexican and Korean food. I will never turn down authentic tacos,
          tortas, or tteok-bokki!
        </span>
      </div>
      <div className="flex w-full justify-evenly px-[18vw] 3xl:px-[10rem] xl:px-[8rem] lg:px-[7rem] md:px-[5rem] sm:px-[2rem] xs:flex-col xs:px-8 xs:gap-8">
        <img
          src="/grad_1.jpg"
          alt="Brendan graduation 1"
          className="w-[25vw] rounded-xl lg:w-[30vw] md:w-[33vw] sm:w-[38vw] xs:w-[50vw]"
        />
        <img
          src="/grad_2.jpg"
          alt="Brendan graduation 2"
          className="w-[25vw] rounded-xl lg:w-[30vw] md:w-[33vw] sm:w-[38vw] xs:w-[50vw] ml-auto"
        />
      </div>
    </div>
  );
}
