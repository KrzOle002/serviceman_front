import { useState } from "react";
import { Wrapper, Circle } from "./SwipeButton.style";

const SwipeButton = () => {
  const [isActive, setIsAcive] = useState(false);

  const changeState = () => {
    setIsAcive((current) => !current);
  };

  return (
    <Wrapper
      style={{
        backgroundColor: isActive ? "#1976D2" : "rgba(0, 0, 0, 0.6)",
        justifyContent: isActive ? "flex-end" : "flex-start",
      }}
      onClick={changeState}
    >
      <Circle />
    </Wrapper>
  );
};

export default SwipeButton;
