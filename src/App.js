import React, {Component} from 'react';

import Year from './Year';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            years: [{
                value: 0,
                id: 0
            }]
        };

        this.addYear = this.addYear.bind(this);
        this.removeYear = this.removeYear.bind(this);
        this.updateYear = this.updateYear.bind(this);
    }

    addYear() {
        const next = {
            value: 0,
            id: this.state.years[this.state.years.length - 1].id + 1
        };

        this.setState({
            years: [...this.state.years, next]
        });
    }

    removeYear(id) {
        this.setState({
            years: this.state.years.filter(year => year.id !== id)
        });
    }

    updateYear(id, value) {
        const before = this.state.years.filter(year => year.id === id)[0];

        before.value = parseInt(value);

        if (isNaN(before.value)) {
            before.value = 0;
        }

        this.setState({
            years: [...this.state.years.filter(year => year.id !== id), before]
        });
    }

    calculate() {

    }

    render() {
        const renderYears = () => {
            return this.state.years.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)).map(year => <Year
                id={year.id}
                key={year.id}
                onRemove={this.removeYear}
                value={year.value}
                onChange={this.updateYear} />)
        };

        return (
            <div className="App">

                <h1>PrimCalq</h1>
                <small>Prämienberechnung</small>

                {renderYears()}

                <button onClick={this.addYear}>Jahr hinzufügen</button>
            </div>
        );
    }
}

export default App;
