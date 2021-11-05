import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function Index({ data }: { data: any }) {
  const [copy, setCopy] = useState("Copy");

  const copyData = () => {
    navigator.clipboard.writeText(data).then(() => {
      setCopy("Copied");

      toast.success("Copied!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  return (
    <motion.section
      animate={{
        y: [-20, 0],
        opacity: [0, 1],
        transition: {
          duration: 0.8,
          delay: 2.8,
          ease: [0.65, 0, 0.35, 1],
        },
      }}
      id="result"
      className="min-h-screen py-20 flex items-center justify-center w-full opacity-0"
    >
      <div className="shadow-lg bg-blue_1 w-11/12 rounded-lg overflow-hidden max-w-lg lg:max-w-2xl">
        <nav className=" bg-dark flex items-center justify-start py-4 px-6 shadow_custom">
          <h1 className=" font-bold py-2 px-4 bg-blue_1 shadow text-dark rounded-lg shadow_custom">
            {data.fileName || <> Your contract:</>}
          </h1>
        </nav>
        <div className="output w-full ">
          <div className="relative">
            <pre className=" py-6 px-6 overflow-x-scroll text-dark ">
              <code className="">{data.data}</code>
              {data && (
                <button
                  onClick={copyData}
                  className="absolute bottom-6 right-6 py-2 px-5 text-white bg-blue_3 hover:bg-dark duration-100 rounded-lg font-medium transform hover:scale-105 active:scale-95 lg:bottom-10 lg:right-10 flex items-center justify-center gap-2"
                >
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="16"
                      height="16"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="">{copy}</div>
                </button>
              )}
            </pre>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Index;
