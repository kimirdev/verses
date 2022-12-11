import { useState } from 'react';
import { getRandomVerse } from './bible/randomVerse';

const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

const getRandomColor = () => colors[Math.floor(Math.random()*colors.length)]

function App() {
  const [color, setColor] = useState(getRandomColor())
  const [quote, setQuote] = useState('')
  const [chapter, setChapter] = useState('')

  const handleClick = () => {
    setColor(getRandomColor())
    const {text, chapter} = getRandomVerse()

    setQuote(text)
    setChapter(chapter)
  }

  return (
    <div id="app" style={{backgroundColor: color, transition: "all 1s ease"}} className='h-screen w-screen flex justify-center font-bold items-center'>
      <div id="quote-box" className='bg-white rounded-xl p-10 text-center shadow-2xl w-[700px]'>
        <p id="text" className='my-5' style={{color: color, transition: "all 1s ease"}}>{quote}</p>
        <p id="book-chapter" className='my-5' style={{color: color, transition: "all 1s ease", opacity: 70}}>{chapter}</p>
        <button style={{backgroundColor: color, transition: "all 1s ease"}} type="button" id="new-quote" onClick={handleClick} 
          className='
          my-5 
          mt-5
          bg-gray-500 
          text-white 
          w-[150px] 
          h-12
          mx-auto
          rounded-xl
          shadow-2xl
          hover:opacity-70'>
            New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
