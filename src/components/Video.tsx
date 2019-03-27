import * as React from 'react';
const ownAPieceImg = require('../img/ownapiece.jpg');

const Video = () => {
  return (
    <div className="flex justify-center border-b py-24">
      <div className="container flex items-center">
        <div className="w-1/3 flex justify-center">
          <img className="rounded h-40" src={ownAPieceImg} />
        </div>
        <div className="w-2/3">
          <h1 className="mb-6 text-3xl">Own a piece of the future</h1>
          <p className="text-grey-darker">
            We’re on a mission to build an open financial system for the world.
            <span className="text-blue-dark font-bold"> Watch the video</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
