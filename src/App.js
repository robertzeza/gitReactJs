import React, { Component } from 'react';
import './App.css';
import './dist/css/index.css'
import Search from './components/search'
import UserInfo from './components/userInfo'
import Actions from './components/actions'
import Repos from './components/repos'
import AppContent from './components/app-content'
class App extends Component {

  constructor() {
    super()
    this.state = {
      userinfo: {
        username:'Robert zeza',
        repos: '12',
        followers: 10,
        following: 10,
        photo: 'https://avatars0.githubusercontent.com/u/22530150?v=4'
      },
      repos:[{
        name: 'Repo',
        link: '#',
      }],
      starred: [{
        name:'Repo starred',
        link:'#',
      }]

    }
  }
  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos = {this.state.repos}
      starred = { this.state.starred}
    />
  }
  
}

export default App;
