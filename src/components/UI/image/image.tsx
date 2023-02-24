import { useSpring, animated } from "@react-spring/web";
import { TypeImageProps } from "./typeImageProps";

export const Image = ({ urlImage }: TypeImageProps) => {
  const imageSpring = useSpring({
    from: { opacity: 0 },
    delay: 1000,
    to: { opacity: 1 },
  });
  return (
    <animated.div style={{ ...imageSpring }} className="flex justify-center ">
      {urlImage.length > 0 ? (
        <img
          src={urlImage}
          loading="lazy"
          alt=""
          className="transition ease-in-out shadow-xl w-96 h-96 rounded-xl"
        />
      ) : (
        <div></div>
      )}
    </animated.div>
  );
};
