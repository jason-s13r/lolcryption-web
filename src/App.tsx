import { useState } from "react";
import "./App.css";
import Lolcryption from "./Lolcryption";

function App() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const presets = [
    "Hello, World!",
    "The quick brown fox jumps over the lazy dog.",
  ];

  return (
    <>
      <h1>LOLcryption</h1>

      <textarea
        id="textInput"
        placeholder="Hello, World!"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <Lolcryption
        placeholder="Hello, World!"
        value={text}
        onChange={setOutput}
      />

      <div className="blurb">
        <h2>Presets</h2>
        {presets.map((preset, i) => (
          <button
            key={i}
            className="preset-button"
            onClick={() => setText(preset)}
          >
            {preset.slice(0, 20)}
            {preset.length > 20 ? "..." : ""}
          </button>
        ))}
        {output ? (
          <button
            className="repeat-button"
            data-repeat="recurse"
            onClick={() => setText(output)}
          >
            &#x27F3;
          </button>
        ) : (
          <></>
        )}
      </div>

      <div className="blurb highlight tertiary">
        <h2>About LOLcryption</h2>
        <p>
          LOLcryption is a substitution cipher like ROT13, but with a twist.
        </p>
        <p>
          While ROT13 shifts the characters along one alphabet, LOLcryption uses
          two — consonants and vowels.
        </p>
        <p>
          LOLcryption considers vowels separate, and shifts them independently.
          'a' becomes 'i', 'e' becomes 'o', 'i' becomes 'u', 'o' becomes 'a',
          and 'u' becomes 'e'.
        </p>
        <p>Similarly, 'b' becomes 'n', and so on until 'z' becomes 'm'.</p>
      </div>

      <div className="blurb highlight tertiary">
        <h2>About Theucon</h2>
        <p>Theucon is a string scrambler.</p>
        <p>
          The algorithm takes the input string, scrambles the characters
          according to a sequence of integers, and returns the output string.
          For simplicity, 0 is considered part of the sequence.
        </p>
      </div>

      <div className="blurb tertiary columns">
        <p>
          Made by <a href="https://1j.nz">Jason</a>.
        </p>
        <p>
          github: <a href="https://github.com/jason-s13r/lolcryption-web">
            jason-s13r/lolcryption-web
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
