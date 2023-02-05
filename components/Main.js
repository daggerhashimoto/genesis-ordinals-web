import React, { useState } from "react";

export default function Main() {
  const [currentDiv, setCurrentDiv] = useState(1);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDiv(currentDiv === 1 ? 2 : 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentDiv]);

  return (
    <>

    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-10">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-5xl text-5xl items-center Avenir xl:w-4/5 text-gray-900">
            Carved onto the Bitcoin blockchain forever.
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-md">
            Genesis Ordinals are true digital artifacts called Inscriptions. Their data is embedded inside of a special kind of transaction, allowing it to become an everlasting part the Bitcoin blockchain.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="https://github.com/r1/nine4-2/"
            >
              <span className="justify-center">Find out more</span>
            </a>
          </div>
        </div>
        <div
        className={`w-80 xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10 ${
          currentDiv === 1 ? "block" : "hidden"
        } transition-opacity duration-3000 ease-in-out`}
      >
          <img
            className="w-80 md:ml-1 ml-24"
            alt="inscription-0"
            src="/images/0.svg"
          ></img>      </div>
      <div
        className={`w-80 xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10 ${
          currentDiv === 2 ? "block" : "hidden"
        } transition-opacity duration-3000 ease-in-out`}
      >
        <p>OP_FALSE</p>
        <p>OP_IF</p>

        <p>&nbsp; &nbsp;OP_PUSH "ord"</p>
        <p>&nbsp; &nbsp;OP_1</p>
        <p>&nbsp; &nbsp;OP_PUSH "text/plain;charset=utf-8"</p>
        <p>&nbsp; &nbsp;OP_0</p>
        <p>&nbsp; &nbsp;OP_PUSH "Hello, world!"</p>
        <p>OP_ENDIF</p>
      </div>
      </div>

    </section>
    </>

  );
}
