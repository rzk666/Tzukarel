import React, { useState } from 'react';
import Square from './components/square';
import styles from './App.module.scss';

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       x: 5,
//       myState: 'test',
//     }
//   }

//   handleTestState() {

//   }

//   render() {
//     console.log(5);
//     return (
//       <div>
//         test
//       </div>
//     )
//   }
// }

const styleOne = {
  background: 'red',
  width: 200,
  height: 200,
}

const styleTwo = {
  background: 'yellow',
  width: 300,
  height: 300,
}

const styleThree = {
  background: 'green',
  width: 400,
  height: 400,
}

const App = () => {
  const [ opacity, setOpacity ] = useState(100);
  const onSquareClick = (newOpacity) => {
      setOpacity(newOpacity);
  }
  return (
  <div className={styles.window}>
    <Square
      opacityTo={40}
      changeOpacity={(newOpacity) => onSquareClick(newOpacity)}
      squareStyle={{ 
        ...styleOne,
        opacity: `${opacity}%`
      }}
    >
      <Square
        squareStyle={{
          background:'black',
          width: styleOne.width / 2,
          height: styleOne.height / 2}}
      />
    </Square>
    <Square
      opacityTo={80}
      changeOpacity={(newOpacity) => onSquareClick(newOpacity)}
      squareStyle={{ 
        ...styleTwo,
        opacity: `${opacity}%`
      }}
    />
    <Square
      opacityTo={10}
      changeOpacity={(newOpacity) => onSquareClick(newOpacity)}
      squareStyle={{ 
        ...styleThree,
        opacity: `${opacity}%`
      }}
    />
    <div
      onClick={() => {
        if (opacity){
          setOpacity(0);
        } else {
          setOpacity(100);
        }
      }}
      style={{ 
        color: 'white',
        width: '100px',
        height: '100px',
        background:'black'
      }}
    >
      CLICK ME
    </div>
  </div>
)}

export default App;
