'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Repos extends Component {

    render() {
        return ( 
            <div className={this.props.className}>
            <h2>  {this.props.title}</h2>
            <ul>
                {this.props.repos.map((repo) => ( 
                    <li> <a href={repo.link} > {repo.name} </a> </li>
                ))}
            </ul>
          </div>
    
        )
    } 
    
}
Repos.defaultProps = {
    className: '',
    title: ''
}

Repos.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array,
}
export default Repos