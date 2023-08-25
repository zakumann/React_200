import React, { Component } from 'react';

class R025_SetState extends Component {
    constructor (props){
        super(props);
        this.state = {
            StateString: 'react',
        }
    }

    StateChange = (flag) => {
        if(flag === 'direct') this.setState.StateString = 'react!';
        if(flag === 'setstate') this.setState({StateString : 'react!!'});
    }

    render(){
        return(
            <div style={{padding: "0px"}}>
                <button onClick={(e) => this.StateChange('direct', e)}>
                    state change directly</button>
                <button onClick={(e) => this.StateChange('setstate', e)}>
                    Change to setState</button><br/>
                [state change] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R025_SetState