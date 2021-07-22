import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const AppFunctional = ({ message, initialCounter }) => {
  // innerText vs innerHTML
  // int count
  const [count, setCount] = useState(initialCounter);
  const [count1, setCount1] = useState(initialCounter);

  const colorPalette = ["#cb997e", "#ddbea9", "#ffe8d6", "#b7b7a4", "#a5a58d"];

  useEffect(() => {
    document.getElementById("message1").innerHTML = "Component in Updated";
    document.getElementById("App1").style.backgroundColor =
      colorPalette[Math.floor(Math.random() * colorPalette.length)];
  }, [count, count1]);

  return (
    <div id="App1">
      {/* <h1 className="important-message">{message}</h1> */}
      <h1 id="message1"></h1>
      <span>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </span>
      <span>
        <h1>{count1}</h1>
        <button onClick={() => setCount1(count1 + 1)}>+</button>
        <button onClick={() => setCount1(count1 - 1)}>-</button>
      </span>
    </div>
  );
};

AppFunctional.propTypes = {
  message: PropTypes.string.isRequired,
  initialCounter: PropTypes.number.isRequired,
};

export default AppFunctional;
