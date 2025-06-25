import { useState } from "react";
function App() {
  // function changeColor(color) {
  //   document.getElementById('back').style.background = color
  // }

  const [color, changeColor] = useState('white')

  return (
    <div className="min-h-screen bg-black text-blue-400 flex flex-col justify-end items-center p-4" style={{backgroundColor: color}}>
      <div className="w-full max-w-[90%] bg-white rounded-lg p-3 shadow-md overflow-x-auto flex flex-wrap justify-stretch gap-2">
        <button
          className="bg-red-600 text-white"
          onClick={() => {
            changeColor('red');
          }}
        >
          Red
        </button>
        <button
          className="bg-green-600 text-white"
          onClick={() => {
            changeColor('lightseagreen');
          }}
        >
          Green
        </button>
        <button
        className="bg-blue-600 text-white"
          onClick={() => {
            changeColor('blue');
          }}
        >
          Blue
        </button>
        <button
        className="bg-[olive] text-white"
          onClick={() => {
            changeColor('olive');
          }}
        >
          Olive
        </button>
        <button
        className="bg-gray-700 text-white"
          onClick={() => {
            changeColor('gray');
          }}
        >
          Grey
        </button>
        <button
        className="bg-yellow-600 text-black"
          onClick={() => {
            changeColor('yellow');
          }}
        >
          Yellow
        </button>
        <button
          className="bg-pink-600 text-white"
          onClick={() => {
            changeColor('pink');
          }}
        >
          Pink
        </button>
        <button
        className="bg-purple-600 text-white"
          onClick={() => {
            changeColor('purple');
          }}
        >
          Purple
        </button>
        <button
        className="bg-[#b2b2c7] text-black"
          onClick={() => {
            changeColor('#b2b2c7');
          }}
        >
          Lavender
        </button>
        <button
        className="bg-white text-black"
          onClick={() => {
            changeColor('white');
          }}
        >
          White
        </button>
        <button
        className="bg-black text-white"
          onClick={() => {
            changeColor('black');
          }}
        >
          Black
        </button>
      </div>
    </div>
  );
}
export default App;
