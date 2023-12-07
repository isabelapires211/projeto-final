import React from 'react';
import Cadastrar from '../Cadastrar/Cadastrar';

const Home = () => {
  const videoId = [
    '',
    '',
  ];

  return (
    <div className="home">
      {videoId.map((videoId, index) => (
        <div key={index} className="video-container">
          <iframe
            title={`Video ${index + 1}`}
            width="560"
            height="315"
            src={"https://www.youtube.com/watch?v=3Uv8FfLMhsw${videoId}"}
           frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
      <Cadastrar />
    </div>
  );
};

export default Home;
