import React, {Component} from 'react';

class Year extends Component {
    render() {
        return (
            <div className="Year">
                {this.props.id + 1}. Jahr:{' '}
                <input onChange={e => this.props.onChange(this.props.id, e.target.value)} value={this.props.value} />
                <button onClick={() => this.props.onRemove(this.props.id)}>-</button>
            </div>
        );
    }
}

export default Year;
