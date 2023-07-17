import React, { Component } from 'react';

class R009_Es6 extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        var jsString1 = 'Javascript'
        var jsString2 = 'here\n next line.'
        console.log(jsString1 +' 문자열' + jsString2 + '~')

        var Es6String1 = 'ES6'
        var Es6String2 = 'here.'
        console.log(`${Es6String1} 문자열${Es6String2}!!
        ____next line!`);

        var LongString = "A String function added in ES6";
        console.log('startsWith : '+LongString.startsWith("Add in ES6"));
        console.log('endsWith : '+LongString.endsWith("functiongs."));
        console.log('includes : '+LongString.includes("Added String"));
    }

    render(){
        return (
            <h2>[THIS IS ES6 STRING.]</h2>
        )
    }
}

export default R009_Es6;