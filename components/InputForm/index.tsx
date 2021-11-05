import React from "react";
import { useState } from "react";
import { generate } from "functions/generate";
import Brackets from "@components/SVGs/Brackets";

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
    <section className="min-h-screen py-20 flex items-center justify-center bg-blue_2 w-full">
      <form
        className=" bg-blue_1 w-11/12 rounded-md overflow-hidden shadow_custom  max-w-lg lg:max-w-2xl relative"
        action=""
        onSubmit={runGenerate}
      >
        <nav className=" bg-blue_3 flex items-center justify-start py-4 px-6">
          <h1 className="font-bold py-2 px-4 bg-blue_1 shadow text-blue_3 rounded-lg">
            DEV Tokens
          </h1>
        </nav>
        <div className="px-6 py-8 lg:py-10 lg:px-8">
          <label className="flex items-start justify-start flex-col">
            <div className=" text-sm md:text-base text-blue_3 text-opacity-80 ">
              Token Name:
            </div>
            <input
              type=""
              placeholder="Token Name here:"
              required
              className="py-2 px-4 rounded-md bg-input_bg placeholder-dark placeholder-opacity-60 text-dark  text-base mt-1 outline-none md:py-3 md:px-5 md:text-lg focus:shadow-inner"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="flex items-start justify-start flex-col mt-5">
            <div className=" text-sm md:text-base text-blue_3 text-opacity-80 ">
              Symbol:
            </div>
            <input
              type="text"
              placeholder="Token Symbol here:"
              required
              className="py-2 px-4 rounded-md bg-input_bg placeholder-dark placeholder-opacity-60 text-dark  text-base mt-1 outline-none md:py-3 md:px-5 md:text-lg focus:shadow-inner"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
            />
          </label>

          <label className="flex items-start justify-start flex-col mt-5">
            <div className=" text-sm md:text-base text-blue_3 text-opacity-80 ">
              Total Decimals:
            </div>
            <input
              type="number"
              placeholder="Token decimals here:"
              className="py-2 px-4 rounded-md bg-input_bg placeholder-dark placeholder-opacity-60 text-dark  text-base mt-1 outline-none md:py-3 md:px-5 md:text-lg focus:shadow-inner"
              value={decimals}
              onChange={(e) =>
                setDecimals(
                  Number(e.target.value) > 0 ? Number(e.target.value) : 1
                )
              }
            />
          </label>

          <label className="flex items-start justify-start flex-col mt-5">
            <div className=" text-sm md:text-base text-blue_3 text-opacity-80 ">
              Initial supply:
            </div>
            <input
              type="number"
              value={initialSupply}
              className="py-2 px-4 rounded-md bg-input_bg placeholder-dark placeholder-opacity-60 text-dark  text-base mt-1 outline-none md:py-3 md:px-5 md:text-lg focus:shadow-inner"
              onChange={(e) => setInitialSupply(Number(e.target.value))}
            />
            <div className=" text-sm text-blue_3 text-opacity-80 mt-2">
              * these tokens will be minted to the owner on deployment
            </div>
          </label>

          <button className=" py-2 px-5 mt-8 rounded-lg text-white bg-blue_3 hover:bg-dark duration-100 font-medium transform hover:scale-105 active:scale-95">
            Generate Token
          </button>
        </div>
        <div className="hidden lg:block lg:absolute top-32 right-12 shadow-md">
          <Brackets />
        </div>
      </form>
    </section>
  );
}

export default InputForm;
