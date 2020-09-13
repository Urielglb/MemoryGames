import React from 'react';
import mixImgs from './js/mixImgs';
import Game from './js/game';
import imgs from './js/imgs';
function App() {
  return (
      <Game imgs={mixImgs(imgs)}></Game>
    );
}

export default App;
