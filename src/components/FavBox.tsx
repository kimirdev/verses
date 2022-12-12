import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IVerse } from '../bible/storage'

export default function FavBox(props: {color: string, delete: ()=>void, verse: IVerse, lang: string}) {
    return (
        <div id="quote-box" className='bg-white rounded-xl p-10 text-center shadow-2xl max-w-[700px] my-[50px]'>
            <p id="text" className='mb-5' style={{color: props.color, transition: "all 1s ease"}}>{props.verse.text}</p>
            <p id="book-chapter" className='mt-5' style={{color: props.color, transition: "all 1s ease", opacity: 70}}>{props.verse.chapter}</p>
            <FontAwesomeIcon icon={faStar} onClick={props.delete} style={{color: props.color, transition: "all 1s ease"}} className='w-8 h-8 mt-3' />
        </div>
    )
}
