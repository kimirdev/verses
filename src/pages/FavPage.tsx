import { useState } from "react";
import { getAllKeys, getVerseByKey } from "../bible/storage";
import FavBox from "../components/FavBox";

export default function FavPage(props: {color: string, lang: string}) {
    const [keys, setKeys] = useState(getAllKeys())

    return (
        <div>
            {keys.map(x => <FavBox key={x} color={props.color} 
                delete={() => {localStorage.removeItem(x); setKeys(getAllKeys())}} 
                verse={getVerseByKey(props.lang, x)} lang={props.lang} 
            />)}
        </div>
    )
}
