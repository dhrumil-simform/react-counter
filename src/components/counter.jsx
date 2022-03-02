import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.Value
    // }

    // constructor(){
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    render() {   
        return ( 
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
        </div>
        )}

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.Value === 0) ? "warning" : "primary";
        return classes;
        
    }

    formatCount(){
        const { Value } = this.props.counter
        return Value === 0 ? 'Zero' : Value
    }
}
 
export default Counter;