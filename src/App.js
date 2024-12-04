import React from 'react';
import Block from './Block';
import './App.css';
import image1 from './images/f3.png';
import image2 from './images/f4.png';
import image3 from './images/f5.png';

const App = () => {
  return (
    <div className="main-container">
      <h1>Чем можем помочь?</h1>
      <div className="block-wrapper">
        <Block
          title="Первый блок"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={image1}
        />
        <Block
          title="Второй блок"
          description="Curabitur vel nulla id eros pellentesque molestie."
          image={image2}
        />
        <Block
          title="Третий блок"
          description="Mauris volutpat sapien sit amet bibendum sodales."
          image={image3}
        />
      </div>
    </div>
  );
};

export default App;
