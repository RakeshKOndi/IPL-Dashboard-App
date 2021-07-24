// Write your code here

import Loader from 'react-loader-spinner'
import {Component} from 'react'

import TeamCard from '../TeamCard'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamsData: [],
  }

  componentDidMount() {
    this.fetchTeamsData()
  }

  fetchTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }))
    this.setState({teamsData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, teamsData} = this.state
    return (
      <div className="bg-container">
        <div className="home-page-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl-logo"
            className="ipl-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <ul className="match-card-container">
            {teamsData.map(teamData => (
              <TeamCard key={teamData.id} data={teamData} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
