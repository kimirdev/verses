// import QuoteBox from "../components/QuoteBox";

import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faSolidStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getVerse, isCurrFav, randomizeVerse, saveFav, unsaveFav } from "../bible/storage";


const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

const getRandomColor = () => colors[Math.floor(Math.random()*colors.length)]

export default function HomePage(props: {color: string, lang: string, setColor: (color:string)=>void}) {

    const [quote, setQuote] = useState(getVerse('en').text)
    const [chapter, setChapter] = useState(getVerse('en').chapter)
    const [isFav, setIsFav] = useState(isCurrFav())
    
    const handleFavClick = () => {
        if (isCurrFav()) {
            unsaveFav()
            setIsFav(false)
        } else {
            saveFav()
            setIsFav(true)
        }
    }

    useEffect(()=> {
        const {text, chapter} = getVerse(props.lang)
        setQuote(text)
        setChapter(chapter)
    }, [props.lang])

    const handleNewClick = () => {
      props.setColor(getRandomColor())
      randomizeVerse()
      const {text, chapter} = getVerse(props.lang)
  
      setIsFav(isCurrFav())
      setQuote(text)
      setChapter(chapter)
    }

    return (
      <div id="quote-box" className='bg-white rounded-xl p-10 text-center shadow-2xl w-[700px]'>
          <p id="text" className='my-5' style={{color: props.color, transition: "all 1s ease"}}>{quote}</p>
          <p id="book-chapter" className='my-5' style={{color: props.color, transition: "all 1s ease", opacity: 70}}>{chapter}</p>
          <button style={{backgroundColor: props.color, transition: "all 1s ease"}} type="button" id="new-quote" onClick={handleNewClick} 
            className='
            my-5
            text-white 
            w-[150px] 
            h-12
            mx-auto
            rounded-xl
            shadow-2xl'
          >
              New Verse
          </button>
          
          <div style={{color: props.color, transition: "all 1s ease"}}
          className="mt-3 hover:cursor-pointer w-8 h-8 mx-auto" onClick={handleFavClick}>
            <FontAwesomeIcon icon={isFav ? faSolidStar : faRegularStar} className='w-8 h-8' />
          </div>
        </div>
    )
  }
  