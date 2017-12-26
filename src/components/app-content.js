'use strict'
import React, { Component } from 'react'
import Search from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'
import PropTypes from 'prop-types' 
class AppContent extends Component {

    render() {
        return (
            <div>
                <div className='app'>
                    <Search />
                    {!!this.props.userinfo && <UserInfo 
                        userinfo={this.props.userinfo}
                    />}
                    {!!this.props.userinfo && <Actions /> }
                    {!!this.props.repos.length && 
                        <Repos className='repos' title='Repositorio:'
                        repos={this.props.repos}
                        />
                    }
                    {!!this.props.starred.length && 
                        <Repos className='starred' title='Favoritos'
                            repos={this.props.starred} 
                        />
                    }


                </div>

            </div>
        )
    }
}
AppContent.propTypes = {
    userinfo: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}
export default  AppContent