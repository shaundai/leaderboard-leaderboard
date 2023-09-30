import { PlayerItem } from './PlayerItem'
import { playerData, playerDataType } from '../utils'
import './PlayerList.css'
import { useState } from 'react'
import { AddPlayer } from './AddPlayer'

const Headers = () => {
	return (
		<header className='header-row'>
			<div className='headers rank'>Rank</div>
			<div className='headers player'>Player</div>
			<div className='headers score'>Score</div>
		</header>
	)
}

export const PlayerList = () => {
	const [playerList, setPlayerList] = useState<playerDataType>(playerData)

	const handleScoreChange = (index: number, newScore: number) => {
		playerList[index] = { ...playerList[index] }
		playerList[index].score = newScore
		setPlayerList([...playerList])
	}

	const handleDeletePlayer = (index: number) => {
		playerList.splice(index, 1)
		setPlayerList([...playerList])
	}

	const sortPlayerListByScore = () => {
		const sortedPlayerList = playerList.sort((a, b) => b.score - a.score)
		return sortedPlayerList
	}

	const playerDisplay = sortPlayerListByScore().map((player, index) => {
		return (
			<PlayerItem
				playerInfo={player}
				rank={index + 1}
				index={index}
				handleDeletePlayer={handleDeletePlayer}
				handleScoreChange={handleScoreChange}
			/>
		)
	})
	const handleAddPlayer = (newName: string) => {
		setPlayerList([...playerList, { name: newName, score: 0, id: 6 }])
	}
	return (
		<section className='scoreboard'>
			<Headers />
			<ul className='player-list-container'>{playerDisplay}</ul>
			<AddPlayer handleAddPlayer={handleAddPlayer} />
		</section>
	)
}
