import { useState } from 'react'
import { RickAndMortyCharacters } from './components/RickAndMortyCharacters'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


return <RickAndMortyCharacters/>
// function App() {
//   const name = 'Name'; //ove vrijednosti se mogu proslijediti preko {} i onda unutar njih pisemo js kod
//   const country = 'NL';
//   const [count, setCount] = useState(0);
//   const [input, setInput] = useState('');

//   const handleUserInput = (event)=>{
//     let string = event.target.value;
//     let string2 = '';
//     for(let i=0; i<string.length; i++){  
//       if(string.charAt(i) != 'a'){
//           string2 += string.charAt(i);
//           // console.log(string.charAt(i));
//           // setInput(string.charAt(i));
//         }
//     }
//     console.log(string2);
//     setInput(string);
//   }

//   // return (
    

//   //   {/* <button onClick={()=>setCount(count+1)}>Click me {count}</button>

//   //     <div>
//   //       <h1 className='first-h1' style={{backgroundColor: 'lime', fontSize: 48}}>Hello World!</h1>
//   //       <h2 onClick={() =>console.log('Hi')}>{name} <span>Lekovic</span> - <span>VL</span></h2>
//   //       <p dangerouslySetInnerHTML={{__html: '<b>Monday Funday :)</b>'}}></p>

//   //       <input name="text" value={input} placeholder='Enter text..' onChange={handleUserInput} />
//   //     </div> */}
    
//   // )
// }


export default App
