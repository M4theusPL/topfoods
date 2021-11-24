import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Menu from './Menu';

export default class IloscZamowienia extends React.Component {

    state = {
        liczba: 0,
        wartosc: 0,
    }

    inkrementacja = () => {
        let war = this.state.wartosc;
        let warr = this.props.c;
        war = warr + war;
        this.setState({wartosc: war});
        this.setState({
            liczba: this.state.liczba + 1
        }, () => this.props.stackPlus());
    }

    dekrementacja = () => {
        if ((this.state.liczba <= 0) && (this.state.wartosc <= 0)) {
            return false;
        } else {
            let war = this.state.wartosc;
            let warr = this.props.c;
            war = war - warr;
            this.setState({wartosc: war})
            this.setState({
                liczba: this.state.liczba - 1
            }, () => this.props.stackMinus())
        }
    }

    render() {
        return (
            <div>
                <div className={'napisilosc'}>Ilość</div>
                <button onClick={this.inkrementacja.bind(this)}>+</button>
                <output>{this.state.liczba}</output>
                <button onClick={this.dekrementacja.bind(this)}>-</button>
                <output>{this.state.wartosc}zł</output>
            </div>
        );
    }
}