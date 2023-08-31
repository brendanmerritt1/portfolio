import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/ArrowUpRight.svg";

export default function AboutMainContent(props) {
  return (
    <div className="flex h-full flex-col items-center gap-28 py-32">
      <div className="flex h-fit w-fit gap-[8rem] px-[18rem] font-light">
        <div className="flex flex-col justify-between py-3 text-2xl">
          <div className="flex flex-col gap-1 text-3xl text-lighter-gray">
            <span>#Dev</span>
            <span>#Web</span>
            <span>#Software</span>
            <span>#ProceduralGraphics</span>
            <span>#WebGL</span>
            <span>#Freelance</span>
          </div>
          <div className="flex flex-col gap-3 text-light-gray dark:text-off-white">
            <Link
              to={"mailto:brendanmerritt1@gmail.com"}
              id="underline"
              className="flex w-fit cursor-pointer gap-1 after:bg-light-gray"
            >
              <span>Email</span>
              <Arrow
                id={`${props.dark ? "icon-dark" : "icon-light"}`}
                className="h-9"
              />
            </Link>
            <Link
              to={"mailto:brendanmerritt1@gmail.com"}
              id="underline"
              className="flex w-fit cursor-pointer gap-1 after:bg-light-gray"
            >
              <span>GitHub</span>
              <Arrow
                id={`${props.dark ? "icon-dark" : "icon-light"}`}
                className="h-9"
              />
            </Link>
            <Link
              to={"mailto:brendanmerritt1@gmail.com"}
              id="underline"
              className="flex w-fit cursor-pointer gap-1 after:bg-light-gray"
            >
              <span>LinkedIn</span>
              <Arrow
                id={`${props.dark ? "icon-dark" : "icon-light"}`}
                className="h-9"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-16 text-5xl leading-normal text-darker-gray dark:text-off-white">
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
      <div className="w-[30vw]">
        <img
          src="/kitty.jpg"
          alt="Brendan's cat, Luna"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-16 px-[18rem] text-5xl font-light leading-normal text-darker-gray dark:text-off-white">
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
      <div className="flex w-full justify-evenly px-[18rem]">
        <img
          src="/grad_1.jpg"
          alt="Brendan graduation 1"
          className="w-[25vw] rounded-xl"
        />
        <img
          src="/grad_2.jpg"
          alt="Brendan graduation 2"
          className="w-[25vw] rounded-xl"
        />
      </div>
    </div>
  );
}
