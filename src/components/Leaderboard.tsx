import { PlayerList } from './Scoreboard/PlayerList'
import './Leaderboard.css'

export const Leaderboard = () => {
	return (
		<>
			<h1>Leaderboard Scoreboard</h1>
			<h3 className="tagline">Rate the best leaderboard or enter your own leaderboard to the competition!</h3>
			<PlayerList />
		</>
	)
}
