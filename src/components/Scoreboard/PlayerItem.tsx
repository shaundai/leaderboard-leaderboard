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
	setVotedPlayers,
	setIsSuccessBannerVisible,
}: {
	playerInfo: playerInfoProps
	rank: number
	index: number
	handleDeletePlayer: (id: number) => void
	handleScoreChange: (index: number, score: number, id: number) => void
	setVotedPlayers: (votedPlayers: string[]) => void
	setIsSuccessBannerVisible: (isSuccessBannerVisible: boolean) => void
}) => {
	const { id, name, src, score } = playerInfo
	const ogPlayerIds = [1, 2, 3, 4]
	const isOGPlayer = ogPlayerIds.includes(id)
	const isForeverLeader = id === 1

	const handleActivateSuccessBanner = () => {
		setIsSuccessBannerVisible(true)
		setTimeout(() => setIsSuccessBannerVisible(false), 1500)
	}

	const handleVote = () => {
		const currentScore = isForeverLeader
			? score + LEADER_INCREMENT
			: score + randomNumberFromInterval(-5, 8)
		handleScoreChange(index, currentScore, id)
		setVotedPlayers(isForeverLeader ? [name] : [name, 'Shaundai Person'])
		handleActivateSuccessBanner()
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
