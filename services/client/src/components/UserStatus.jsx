import React from 'react'
import axios from 'axios'

class UserStatus extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      id: '',
      username: ''
    }
  }

  componentDidMount = () => {
    this.getUserStatus()
  }

  getUserStatus = event => {
    const options = {
      url: `${process.env.REACT_APP_USERS_SERVICE_URL}/auth/status`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    }

    return axios(options)
      .then(res => {
        this.setState({
          email: res.data.data.email,
          id: res.data.data.id,
          username: res.data.data.username
        })
      })
      .catch(err => console.error(err))
  }

  render () {
    return (
      <div>
        <ul>
          <li>
            <strong>User ID:</strong> {this.state.id}{' '}
          </li>
          <li>
            <strong>Email:</strong> {this.state.email}{' '}
          </li>
          <li>
            <strong>Username: </strong> {this.state.username}{' '}
          </li>
        </ul>
      </div>
    )
  }
}

export default UserStatus