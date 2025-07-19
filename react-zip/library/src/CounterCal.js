import { Component } from "react";

class CounterCal extends Component{
    constructor(){
        super()

        this.state ={
            val:0
        }
    }
    handleAdd =()=>{
        this.setState({val:this.state.val+1})
    }
    handleSub = ()=>{
        this.setState({val:this.state.val-1})
    }

    render(){
        return(
            <>
               <h1>{this.state.val}</h1>
               <button onClick={this.handleAdd}>Add</button>
               <button onClick={this.handleSub}>Sub</button>
            </>
        )
    }
}

export default CounterCal;