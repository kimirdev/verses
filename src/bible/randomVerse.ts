import {bible} from './rst'

const rndNum = (a: number, b: number) => Math.floor(Math.random()* (a-b)+b) 

export const getRandomVerse = () : {text: string, chapter: string} => {
  const books = bible.Books

  const book = books[rndNum(0, books.length)]

  const chapter = book['Chapters'][rndNum(0, book['Chapters'].length)]

  const verse = chapter['Verses'][rndNum(0, chapter.Verses.length)]

  return {text: verse.Text, chapter: `${book.BookName} ${chapter.ChapterId}:${verse.VerseId}`}
}