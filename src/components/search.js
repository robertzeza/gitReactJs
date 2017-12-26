'use strict'
import React, { Component } from 'react';


class Search extends Component {

    render() {
        return ( 
                <div className='search'>
                    <input type='search'
                     placeholder='Digite o nome do usuario no github'/>
                     onChange={(e) => {
                         console.log('change', e.target.value)
                     }}
                </div>
        )
    } 
}

export default Search