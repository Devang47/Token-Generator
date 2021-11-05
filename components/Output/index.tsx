import React from "react";

function index({ data }: { data: any }) {
  const copyData = () => {
    navigator.clipboard.writeText(data).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };

  return (
    <section className=" min-h-screen py-20 flex items-center justify-center">
      <div className="shadow_custom bg-blue_1 w-11/12 rounded-lg overflow-hidden max-w-lg">
        <nav className=" bg-dark flex items-center justify-start py-4 px-6">
          <h1 className="  font-bold py-2 px-4 bg-blue_1 shadow text-dark rounded-lg">
            DEV Tokens
          </h1>
        </nav>
        <div className="output w-full ">
          <div className="relative">
            <pre className=" py-6 px-6 overflow-x-scroll ">
              <code className=" text-sm md:text-base">{data}</code>
              <button
                onClick={copyData}
                className="absolute bottom-4 right-4 py-2 px-4 text-white bg-blue_3 hover:bg-dark duration-100 rounded-lg font-medium"
              >
                Copy
              </button>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
