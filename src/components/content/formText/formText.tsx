import { useSpring, animated } from "@react-spring/web";
import React from "react";
import { ButtonSubmit } from "../../UI/button/buttonSubmit/buttonSubmit";
import { Input } from "../../UI/input/input";
import { TypeFormTextProps } from "./typeFormTextProps";

export const FormText = ({
  value,
  handleOnChange,
  handleSubmit,
}: TypeFormTextProps) => {
  const formSpring = useSpring({
    from: { x: 500, opacity: 0 },
    delay: 500,
    to: { x: 0, opacity: 1 },
  });
  return (
    <animated.form
      style={{ ...formSpring }}
      className="flex justify-between gap-2"
      onSubmit={handleSubmit}
    >
      <Input value={value} handleOnChange={handleOnChange} />
      <ButtonSubmit>Send</ButtonSubmit>
    </animated.form>
  );
};
