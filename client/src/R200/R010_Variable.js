import React, { Component } from 'react';

class R010_Variable extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        var varName = 'react';
        console.log('varName1 : ' + varName);
        var varName = '200'; // 'varName' is already defined no-redeclare
        console.log('varName2 : '+varName); //var can update and Redeclaration.

        let letName = 'react';
        console.log('letName1 : '+letName);
        var varName = '200';
        console.log('letName2 : '+letName); // let은 업데이트가 가능하지만 재선언이 불가능하다.

        const constName = 'react';
        console.log('letName1 : '+ constName); // const는 업데이트는 물론 재선언도 불가능하다.
    }

    render(){
        return (<h2>[THIS IS VARIABLE]</h2>)
    }
}

export default R010_Variable;