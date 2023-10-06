import shaundai from '../assets/shaundai.jpeg'
import cassidy from '../assets/cassidy.jpeg'
import jason from '../assets/jason.jpeg'
import david from '../assets/david.jpeg'

export const INITIAL_SCORE = 0

export type playerDataType = {
	name: string
	id: number
	src?: string
	score: number
}[]

export const playerData: playerDataType = [
	{ name: 'Shaundai Person', id: 1, src: shaundai, score: INITIAL_SCORE },
	{ name: 'Jason Lengstorf', id: 2, src: jason, score: INITIAL_SCORE },
	{ name: 'Cassidy Williams', id: 3, src: cassidy, score: INITIAL_SCORE },
	{ name: 'David K. Piano', id: 4, src: david, score: INITIAL_SCORE },
]
