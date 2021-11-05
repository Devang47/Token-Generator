import type { NextPage } from "next";
import Head from "next/head";

import { useState } from "react";
import { ToastContainer } from "react-toastify";

import InputForm from "@components/InputForm/index";
import Output from "@components/Output/index";

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

      <section className=" lg:grid lg:grid-cols-2">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <InputForm setOutput={setOutput} />
        <Output data={OutputData} />
      </section>
    </>
  );
};

export default Home;
