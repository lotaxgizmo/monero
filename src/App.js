import React, { useState } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Secondpic from "./components/Secondpic";
import Thirdpart from "./components/Thirdpart";
import Whychoose from "./components/Whychoose";

import yellowherobox2 from '../src/assets/yellowherobox2.svg';
import proceedbtn from '../src/assets/proceedbtn.svg';
import bigtv from '../src/assets/bigtv.svg';
import audio from './assets/audio.mp3';

const SplashPage = ({ onContinueClick }) => {
  const [audioPlayed, setAudioPlayed] = useState(false);

  const handleClick = () => {
    if (!audioPlayed) {
      const audioElement = new Audio(audio);
      audioElement.loop = true; // Set audio to loop
      audioElement.play().then(() => {
        setAudioPlayed(true);
        // Call the provided onContinueClick callback after audio is played
        onContinueClick();
      });
    }
  };

  return (
    <div className="relative heroback flex flex-col items-center justify-center h-screen">
      <img src={yellowherobox2} alt="" className='absolute top-1' />
      <img src={bigtv} alt="" className='' />
      <div
        className="animate-pulse bg-[#F9F301] text-2xl lg:text-4xl font-bold py-5 px-12 cursor-pointer
        h-40 rounded-3xl border-black border-2 flex items-center justify-center align-middle Irish text-[#EA000B]"
        onClick={handleClick}
      >
        {audioPlayed ? 'Proceed' : 'Proceed'}
      </div>
    </div>
  );
};

const MainSite = () => {
  return (
    <div className="total">
      <Header />
      <Hero />
      <Secondpic />
      <Thirdpart />
      <Whychoose />
    </div>
  );
};

const App = () => {
  const [showIntro, setShowIntro] = React.useState(true);

  const handleContinueClick = () => {
    setShowIntro(false);
  };

  return (
    <div>
      {showIntro ? (
        <SplashPage onContinueClick={handleContinueClick} />
      ) : (
        <MainSite />
      )}
    </div>
  );
};

export default App;
