import { useSpring, animated } from "@react-spring/web";
import { TypeChildren } from "../../utils/TypeChildren";

export const Heading = ({ children }: TypeChildren) => {
  const headingSprings = useSpring({
    from: { x: -500, opacity: 0 },
    delay: 500,
    to: { x: 0, opacity: 1 },
  });
  return (
    <animated.div
      style={{ ...headingSprings }}
      className="text-4xl font-bold leading-relaxed text-headline drop-shadow-lg"
    >
      {children}
    </animated.div>
  );
};
