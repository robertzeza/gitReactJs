'use strict'
import React, { Component } from 'react';


class UserInfo extends Component {

    render() {
        return ( 
            <div className='user-info'>
            
                      <img src={this.props.userinfo.photo} />
                      <h1> <a href={`https://github.com/${this.props.userinfo.username}`}> Robert Zeza</a> </h1>
                      <ul className='repos-info'>
                        <li> - Repositorios</li>
                        <li> - Seguidores </li>
                        <li> - Seguindo  </li>
                      </ul>
            
                      
                    </div>
        )
    } 
}

export default UserInfo