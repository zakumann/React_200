import React, { Component } from 'react';

class R013_ArrowFunction extends Component {

    constructor(props){
        super(props);
        this.state = {
            arrowFunc: 'React200',
            num: 3
        };
    }

    componentDidMount(){
        Function1(1);
        this.Function2(1,1);
        this.Function3();
        this.Function4();
        this.Function5(0,2,3);

        function Function1(num1){
            return console.log(num1+', Es5 Function');
        }
    }

    Function2 = (num1, num2) => {
        let num3 = num1 + num2;
        console.log(num3+' . Arrow Function : '+this.state.arrowFunc);
    }

    Function3() {
        var this_bind = this;
        setTimeout(function(){
            console.log(this_bind.state.num+'. Es5 Callbakc Function noBind : ');
            console.log(this.state.arrowFunc);
        }, 100);
    }

    Function4(){
        setTimeout(function(){
            console.log('4. Es5 Callback Function Bind : '+this.state.arrowFunc);
        }.bind(this),1)
    }

    Function5 = (num1, num2, num3) => {
        const num4 = num1 + num2 + num3;
        setTimeout(()=> {
            console.log(num4+'. Arrow Callback Function : '+this.state.arrowFunc);
        }, 100);
    }

    render(){
        return(
            <h2>[THIS IS ARROWFUNCTION]</h2>
        )
    }
}

export default R013_ArrowFunction;