import { PlayerList } from './scoreboard/PlayerList'
import './Leaderboard.css'

export const Leaderboard = () => {
	return (
		<>
			<h1 className='title'>Leaderboard Scoreboard</h1>
			<h3 className="tagline">Vote for your fave leaderboard or enter your own leaderboard to the competition!</h3>
			<PlayerList />
		</>
	)
}
