import { LEADER_INCREMENT, randomNumberFromInterval } from './utils'
import './PlayerItem.css'

interface playerInfoProps {
	id: number
	name: string
	src?: string
	score: number
}
export const PlayerItem = ({
	playerInfo,
	rank,
	index,
	handleDeletePlayer,
	handleScoreChange,
}: {
	playerInfo: playerInfoProps
	rank: number
	index: number
	handleDeletePlayer: (id: number) => void
	handleScoreChange: (index: number, score: number) => void
}) => {
	const { id, name, src, score } = playerInfo

	const handleClick = () => {
		const currentScore =
			id === 1
				? score + LEADER_INCREMENT
				: score + randomNumberFromInterval(-5, 8)
		handleScoreChange(index, currentScore)
	}

	const handleClick = () => {
		handleDeletePlayer(id)
	}

	const VoteButton = () => {
		return (
			<button className='vote-button' onClick={handleClick}>
				VOTE
			</button>
		)
	}

	return (
		<li className='player-container' key={`${id}-${name}`}>
			<a className='delete-player' onClick={handleClick}>
				✖
			</a>
			<div>#{rank}</div>
			<div className='avatar-container'>
				<img className='avatar' src={src} alt={name} />
			</div>
			<span className='player-name'>{name}</span>
			<span className='player-score'>{score}</span>
			<VoteButton />
		</li>
	)
}
