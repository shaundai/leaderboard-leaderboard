import { LEADER_INCREMENT, randomNumberFromInterval } from '../utils'
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
	const ogPlayerIds = [1, 2, 3, 4]
	const isOGPlayer = ogPlayerIds.includes(id)

	const handleVote = () => {
		const currentScore =
			id === 1
				? score + LEADER_INCREMENT
				: score + randomNumberFromInterval(-5, 8)
		handleScoreChange(index, currentScore)
	}

	const handleRemove = () => {
		handleDeletePlayer(index)
	}

	const VoteButton = () => {
		return (
			<div className='vote-button-container'>
				<button className='vote-button' onClick={handleVote}>
					VOTE
				</button>
			</div>
		)
	}

	return (
		<li className='player-container' key={`${id}-${name}`}>
			<tr className='rank-container'>#{rank}</tr>
			<div className='player-info'>
				<div className='avatar-container'>
					<img className='avatar' src={src} alt={name} />
				</div>
				<span className='player-name'>
					{name}
					{!isOGPlayer && (
						<a className='delete-player' onClick={handleRemove}>
							✖
						</a>
					)}
				</span>
			</div>
			<span className='player-score'>{score}</span>
			<VoteButton />
		</li>
	)
}