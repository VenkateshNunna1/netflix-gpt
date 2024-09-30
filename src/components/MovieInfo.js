import React from "react";

const movieInfo = ({ title, overview }) => {
  return (
    <div className="sm:my-36 my-16 sm:mx-20 mx-4 absolute ">
      <h1 className="sm:text-5xl text-2xl font-bold sm:my-4 my-2 text-white">
        {title}
      </h1>
      <h2 className="sm:w-96 w-0 sm:block hidden my-4 text-md text-white">
        {overview}
      </h2>
      <button className="bg-red-600 sm:my-2 my-1  sm:px-6 px-3 sm:py-4 py-2 text-white sm:text-2xl text-xl sm:font-bold font-semibold sm:mx-2  mx-1 sm:rounded-lg rounded-md ">
        Play▶
      </button>
      <button className="bg-red-600 sm:my-2 my-1  sm:px-6 px-3 sm:py-4 py-2 text-white sm:text-2xl text-xl sm:font-bold font-semibold sm:mx-2  mx-1 sm:rounded-lg rounded-md ">
        Info ⓘ
      </button>
    </div>
  );
};

export default movieInfo;
