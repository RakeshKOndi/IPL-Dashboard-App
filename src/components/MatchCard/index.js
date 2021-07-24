// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails
  const statusClassName = matchStatus === 'Won' ? 'won status' : 'lost status'
  return (
    <li className="recent-match-card">
      <img src={competingTeamLogo} alt="competingTeam" className="image" />
      <h1 className="heading">{competingTeam}</h1>
      <p className="result">{result}</p>
      <p className={statusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
