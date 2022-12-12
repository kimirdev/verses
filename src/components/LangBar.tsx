export default function LangBar(props: {color: string, handleLanguageChange: (str: string)=>void}) {
  return (
    <div className="block fixed inset-x-0 bottom-3 z-10 bg-gray-200 shadow-2xl w-screen max-w-[700px] 
    left-[50%] translate-x-[-50%] rounded-xl h-10 border-gray-500">
        <div className='flex justify-around items-center h-[100%]'>
          <button style={{color: props.color, transition: 'all 1s ease'}} onClick={() => props.handleLanguageChange('en')}>ENG</button>
          <button style={{color: props.color, transition: 'all 1s ease'}} onClick={() => props.handleLanguageChange('kor')}>KOR</button>
          <button style={{color: props.color, transition: 'all 1s ease'}} onClick={() => props.handleLanguageChange('rus')}>RUS</button>
        </div>
      </div>
  )
}
