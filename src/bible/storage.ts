// import {bible} from './rst'
import {enBible} from './en_bbe'
import {ruBible} from './ru_synodal'
import {korBible} from './ko_ko'
import {bookNames} from './bookDict' 

let bookId = 0
let chapterId = 0
let verseId = 0

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

export interface IVerse {
    text: string, 
    chapter: string
}

function getBookByLang(lang: string) {
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
        case 'kor':
            bible = korBible
            bookLang = 'kor'
            break;
        default:
            bible = enBible
            bookLang = 'en'
    }

    return {bible, bookLang}
}

export function getAllKeys() {
    const len = localStorage.length
    let arr:string[] = []

    for (let i = 0; i < len; i++) {
        arr.push(localStorage.getItem(localStorage.key(i) as string) as string)
    }

    return arr
}

export function saveFav() {
    localStorage.setItem(`${bookId}-${chapterId}-${verseId}`, `${bookId}-${chapterId}-${verseId}`)
}

export function unsaveFav(book = bookId, chapter = chapterId, verse = verseId) {
    localStorage.removeItem(`${book}-${chapter}-${verse}`)
}

export function isCurrFav() {
    const curr = localStorage.getItem(`${bookId}-${chapterId}-${verseId}`)
    return curr !== null
}

export function getVerseBySignas(lang: string, bookId: number, chapterId: number, verseId: number) : IVerse {
    const {bible, bookLang} = getBookByLang(lang)

    const chapters = bible[bookId].chapters

    const chapter = chapters[chapterId]

    const verse = chapter[verseId]

    const bookName = bookNames.find(x => x.abbr === bible[bookId].abbrev) as IBookName

    const title = bookName[bookLang as keyof typeof bookName]

    return {text: verse, chapter: `${title} ${chapterId+1}:${verseId+1}`}
}

export const getVerse = (lang: string) : IVerse => {
    return getVerseBySignas(lang, bookId, chapterId, verseId)
}

export function getVerseByKey(lang: string, key: string) : IVerse {
    if (!key) {
        return {text: '', chapter: ''}
    }
    const tokens = key.split('-').map(x => Number(x))
    return getVerseBySignas(lang, tokens[0], tokens[1], tokens[2])
}

export const randomizeVerse = () => {
    bookId = rndNum(0, enBible.length)

    const chapters = enBible[bookId].chapters

    chapterId = rndNum(0, chapters.length)
    const chapter = chapters[chapterId]

    verseId = rndNum(0, chapter.length)
}
