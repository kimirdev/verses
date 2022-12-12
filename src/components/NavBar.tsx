import { Link } from "react-router-dom";

export default function NavBar(props: {color: string}) {
  return (
    <div className="block fixed inset-x-0 top-3 z-10 bg-gray-200 shadow-2xl w-screen max-w-[700px] 
    left-[50%] translate-x-[-50%] rounded-xl h-10 border-gray-500">
        <div className='flex justify-around items-center h-[100%]'>
        <Link style={{color: props.color, transition: 'all 1s ease'}} to='/'>Home</Link>
        <Link style={{color: props.color, transition: 'all 1s ease'}} to='/fav'>Fav</Link>
        </div>
    </div>
  )
}
