import { PlayerItem } from './PlayerItem'
import { playerData, playerDataType } from '../utils'
import './PlayerList.css'
import { useState } from 'react'
import { AddPlayer } from './AddPlayer'
import michaelangelo from '../../assets/michaelangelo.jpg'

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
	let idCount = 5

	const handleAddPlayer = (newName: string, avatar: string) => {
		setPlayerList([
			...playerList,
			{
				name: newName,
				src: `/src/assets/${avatar}.jpeg`,
				score: 0,
				id: idCount,
			},
		])
		idCount++
	}
	return (
		<section className='scoreboard'>
			<Headers />
			<ul className='player-list-container'>{playerDisplay}</ul>
			<AddPlayer handleAddPlayer={handleAddPlayer} />
		</section>
	)
}
