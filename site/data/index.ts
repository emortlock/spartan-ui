import paragraphs from './loremIpsum'
import titles from './titles'

const numberOfTitles = titles.length
const numberOfParagraphs = paragraphs.length

const getRandomIndex = (max: number) => Math.floor(Math.random() * max)

export const getTitle = (index?: number) =>
  titles[typeof index !== 'undefined' ? index : getRandomIndex(numberOfTitles)]

export const getParagraph = (index?: number) =>
  paragraphs[
    typeof index !== 'undefined' ? index : getRandomIndex(numberOfParagraphs)
  ]
