import '../Leaderboard.css'

export const SuccessBanner = ({ votedPlayers }: { votedPlayers: string[] }) => {
	const getFormattedPlayerList = votedPlayers.join(' and ')
	return (
		<div className='success'>
			{`You have successfully voted for ${getFormattedPlayerList}`}
		</div>
	)
}
