import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {counters: [
        {id: 1, Value: 4},
        {id: 2, Value: 0},
        {id: 3, Value: 0},
        {id: 4, Value: 0}
    ] } 
    render() { 
        return (<div>
            {this.state.counters.map(counter => (
                <Counter key={counter.id} value={counter.Value} />
            ))}
        </div>);
    }
}
 
export default Counters;