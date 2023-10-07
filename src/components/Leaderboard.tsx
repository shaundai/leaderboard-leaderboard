import { useState } from 'react'
import { PlayerList } from './scoreboard/PlayerList.tsx'
import { SuccessBanner } from './scoreboard/SuccessBanner.tsx'
import './Leaderboard.css'

export const Leaderboard = () => {
	const [isSuccessBannerVisible, setIsSuccessBannerVisible] = useState(false)
	const [votedPlayers, setVotedPlayers] = useState<string[]>([''])

	return (
		<>
			{isSuccessBannerVisible && <SuccessBanner votedPlayers={votedPlayers} />}
			<h1 className='title'>
				<span className='leaderboard'>Leaderboard</span>
				<span>Scoreboard</span>
			</h1>
			<h3 className='tagline'>
				Vote for your fave leaderboard or enter your own leaderboard to the
				competition!
			</h3>
			<PlayerList
				setVotedPlayers={setVotedPlayers}
				setIsSuccessBannerVisible={setIsSuccessBannerVisible}
			/>
		</>
	)
}
