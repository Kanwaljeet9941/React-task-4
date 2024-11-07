import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
      <InputField />
      <Toggler />
      <HideOrShow />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="first">
      <button onClick={() => setCount((c) => c - 1)} className="btn">
        -
      </button>
      <p>Count:{count}</p>
      <button onClick={() => setCount((c) => c + 1)} className="btn">
        +
      </button>
    </div>
  );
}

function InputField() {
  const [inp, setInp] = useState("");
  function handleChange(e) {
    setInp(e.target.value);
  }
  return (
    <div className="second">
      <input
        type="text"
        placeholder="Enter text.."
        className="inp"
        onChange={handleChange}
      />
      <p>{inp}</p>
    </div>
  );
}

function Toggler() {
  const [btn, setBtn] = useState(true);
  const [isOn, setIsOn] = useState(true);
  function toggleClass() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <button
        onClick={() => {
          setBtn((b) => !b);
          toggleClass();
        }}
        className={isOn ? "on" : "off"}
      >{`${btn ? "ON" : "OFF"}`}</button>
    </div>
  );
}

function HideOrShow() {
  const [hide, setHide] = useState(false);
  return (
    <div className="fourth">
      <p>Hello I am {hide ? <span>Kamal</span> : ""}</p>
      <button
        className="btn btn-2"
        onClick={() => {
          setHide((h) => !h);
        }}
      >
        H/S
      </button>
    </div>
  );
}

export default App;
