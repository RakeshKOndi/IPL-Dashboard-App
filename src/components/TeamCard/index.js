// Write your code here

import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {data} = props
  const {name, id, teamImageUrl} = data
  console.log(data)
  return (
    <Link className="nav-link" to={`/team-matches/${id}`}>
      <li className="team-card">
        <img src={teamImageUrl} alt="teamImage" className="team-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
