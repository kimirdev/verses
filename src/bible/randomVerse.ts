// import {bible} from './rst'
import {enBible} from './en_bbe'
import {ruBible} from './ru_synodal'
import {bookNames} from './bookDict' 

const rndNum = (a: number, b: number) => Math.floor(Math.random()* (a-b)+b) 

interface IBible {
    abbrev: string,
    chapters: string[][],
    name: string
}

interface IBookName {
    abbr: string, 
    name: string,
    en: string,
    rus: string
}

let bookId = 0
let chapterId = 0
let verseId = 0

export const randomizeVerse = () => {
    bookId = rndNum(0, enBible.length)

    const chapters = enBible[bookId].chapters

    chapterId = rndNum(0, chapters.length)
    const chapter = chapters[chapterId]

    verseId = rndNum(0, chapter.length)
}

export const getVerse = (lang: string) : {text: string, chapter: string} => {

    let bible: IBible[] = []
    let bookLang = ''

    switch (lang) {
        case 'en':
            bible = enBible
            bookLang = 'en'
            break;
        case 'rus' :
            bible = ruBible
            bookLang = 'rus'
            break;
        default:
            bible = enBible
            bookLang = 'en'
    }

    // bookId = rndNum(0, bible.length)

    const chapters = bible[bookId].chapters

    // chapterId = rndNum(0, chapters.length)
    const chapter = chapters[chapterId]

    // verseId = rndNum(0, chapter.length)
    const verse = chapter[verseId]

    const bookName = bookNames.find(x => x.abbr === bible[bookId].abbrev) as IBookName

    const title = bookName[bookLang as keyof typeof bookName]

    return {text: verse, chapter: `${title} ${chapterId+1}:${verseId+1}`}
}