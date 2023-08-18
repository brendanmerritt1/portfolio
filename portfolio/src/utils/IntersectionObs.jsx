import { useInView } from "react-intersection-observer";

// Displays picture or video depending on visibility in viewport
export const inViewProps = () => {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });
  return { ref, inView };
};

export const picOrVid = (inView) => {
  if (!inView) {
    return (
      <picture>
        <source srcSet="/solar-system-wallpaper-img.webp" type="image/webp" />
        <source srcSet="/solar-system-wallpaper-img.png" type="image/png" />
        <img src="/solar-system-wallpaper-img.webp" alt="Flowers" />
      </picture>
    );
  } else {
    return (
      <video autoPlay muted loop>
        <source src="/solar-system-wallpaper-video.webm" type="video/webm" />
        <source src="/solar-system-wallpaper-video.mp4" type="video/mp4" />
      </video>
    );
  }
};
