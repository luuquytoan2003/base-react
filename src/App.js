import React from 'react';
import './App.scss';
import MyComponent from './components/MyComponent';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and lưu quý toàn
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  render(){
    return(
      <>
        hello world với Eric &amp; hỏi dân it
        <MyComponent title={'hello friend'}/>
      </>
    )
  }
}

export default App;
