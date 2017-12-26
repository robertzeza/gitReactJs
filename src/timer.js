'use strict'

import React, {Component} from 'react'

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            time : 0
        }
        this.timer
        
    }
    
    componentDidMount () {
        this.timer = setInterval( () => {
           this.setState ({
                time: this.state.time + 1
            }) 
        },1000)
    }

    componentWillUnmount () {
        console.log(this.timer)
        clearInterval(this.timer)
    }

    componentWillReceiveProps (nextPropss) {
        //SetState
      //  console.log("componentwillrecieveprops ", this.props , nextPropss)
    }

    shouldComponentUpdate(nextPropss, nexState){
      //  console.log(nextProp ss)
       // console.log(nexState)
        return true
    }

    componentWillUpdate (nextPropss, nextState) {
        //Verificação
        //console.log("componentWillUpdate", nextPropss, nextState)
    }

    componentDidUpdate (prevProp, prevState) {
        console.log("componentDidUpdate", prevProp, prevState)
        console.log("ESTADOS",this.state, prevState )
    }

    render()
    {
         return (    <div>Timer :  {this.state.time} </div>)
    }
}
export default Timer