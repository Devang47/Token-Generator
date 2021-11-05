import type { NextPage } from "next";
import Head from "next/head";

import { useState } from "react";
import { ToastContainer } from "react-toastify";

import InputForm from "@components/InputForm/index";
import Output from "@components/Output/index";
import Loader from "@components/LoadingScreen/index";

const Home: NextPage = () => {
  const [OutputData, setOutput] = useState({
    data: `// SPDX-License-Identifier: MIT
pragma solidity >=0.4.16 <0.9.0;
  
import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol';
  
contract ContractName is ERC20{
    address public admin;
    constructor() ERC20('TokenName', 'Symbol') {
        _mint(msg.sender, 1000 * 10 ** 18);
        admin = msg.sender;
    }
    
    function mint(address to, uint amount) external {
        require(msg.sender == admin, 'only admin');
        _mint(to, amount);
    }
    
    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }
}`,
  });

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Loader />

      <section className=" lg:grid lg:grid-cols-2">
        <Head>
          <title>ERC-20 Token Generator</title>
          <meta
            name="description"
            content="This is a free tool which helps in generating ERC-20 token solidity code."
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#0c0f0a" />
        </Head>

        <InputForm setOutput={setOutput} />
        <Output data={OutputData} />
      </section>
    </>
  );
};

export default Home;
