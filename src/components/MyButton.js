import { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <button onClick={handleClick} className="button">
      Clicked {count} times
    </button>
  );
};

export default MyButton;
