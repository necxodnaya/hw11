import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const refColor = useRef();
  console.log(refColor);

  useEffect(() => {
    const timer = setInterval(() => {
      if (refColor.current.style.backgroundColor === "red") {
        return refColor.current.style.backgroundColor = "grey"
      }else if (refColor.current.style.backgroundColor === "grey") {
        return refColor.current.style.backgroundColor = "yellow"
      }else if (refColor.current.style.backgroundColor === "yellow") {
        return refColor.current.style.backgroundColor = "blue"
      }
      return refColor.current.style.backgroundColor = "red"
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        border: "2px solid",
      }}
      ref={refColor}
    ></div>
  );
}

export default App;
