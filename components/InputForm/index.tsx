import React from "react";
import { useState } from "react";
import { generate } from "functions/generate";

function InputForm({ setOutput }: { setOutput: any }) {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [decimals, setDecimals] = useState(18);
  const [initialSupply, setInitialSupply] = useState(1000);

  const runGenerate = (e: any) => {
    e.preventDefault();

    setOutput(
      generate({
        name,
        symbol,
        decimals,
        initialSupply,
      })
    );
  };

  return (
    <div>
      <form action="" onSubmit={runGenerate}>
        <label>
          Token Name:
          <input
            type=""
            placeholder="Token Name here:"
            required
            className="py-3 px-6 border outline-none focus:bg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Symbol:
          <input
            type="text"
            placeholder="Token Symbol here:"
            required
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
        </label>
        <br />
        <label>
          Total Decimals:
          <input
            type="number"
            placeholder="Token decimals here:"
            value={decimals}
            onChange={(e) => setDecimals(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Initial supply:
          <input
            type="number"
            value={initialSupply}
            onChange={(e) => setInitialSupply(Number(e.target.value))}
          />
          * these tokens will be minted to the owner on deployment
        </label>
        <br />
        <button>Generate Token</button>
      </form>
    </div>
  );
}

export default InputForm;
