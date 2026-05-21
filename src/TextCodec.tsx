import { useState, useEffect } from 'react';
import './TextCodec.css';
import { encodingAlgorithms } from './lib/encoders';

export type TextCodecProps = {
  value: string,
  placeholder?: string
  onChange?: (_: string) => void,
  onAlgorithmChange?: (_: string) => void,
  defaultAlgorithm?: string,
  defaultEncode?: boolean,
}

export default function TextCodec({
  value,
  placeholder = '',
  onChange = (_: string) => void 0,
  onAlgorithmChange = (_: string) => void 0,
  defaultAlgorithm = 'lolcryption',
  defaultEncode = true,
}: TextCodecProps) {
  const [algorithm, setAlgorithm] = useState(defaultAlgorithm);
  const [encode, setEncode] = useState(defaultEncode);
  const [output, setOutput] = useState('');

  const encodeText = (text: string) =>
    encode || encodingAlgorithms[algorithm].symmetric
      ? encodingAlgorithms[algorithm].encode(text)
      : encodingAlgorithms[algorithm].decode(text);

  useEffect(() => setOutput(encodeText(value)), [value, algorithm, encode]);
  useEffect(() => onAlgorithmChange(algorithm), [algorithm]);
  useEffect(() => onChange(output), [output]);

  return (
    <div className="TextCodec">
      <div className="toolbar">
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          {Object.values(encodingAlgorithms).map((algo) => (
            <option selected={algorithm === algo.id} value={algo.id}>
              {algo.label}
            </option>
          ))}
        </select>
        <div>
          <label htmlFor="encode">Encode</label>
          <input
            id="encode"
            type="checkbox"
            checked={encode}
            onChange={(e) => setEncode(e.target.checked)}
          />
        </div>
      </div>
      <div className="output">
        {output ? (
          <p>{output}</p>
        ) : (
          <p className="placeholder">{encodeText(placeholder)}</p>
        )}
      </div>
    </div>
  );
}
