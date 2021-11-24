import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Menu from './Menu';

export default class LosowanieZestawDnia extends React.Component {

    state = {
        wylosowana: null,
        dania: [{
            'id': 1,
            'nazwadania': 'Pierogi ruskie',
            'opisdania': 'możliwość wyboru skwarek',
            'cena': 12.00,
        },
            {
                'id': 2,
                'nazwadania': 'Zupa pomidorowa',
                'opisdania': 'z ryżem',
                'cena': 5.00,
            },
            {
                'id': 3,
                'nazwadania': 'Kotlet schabowy duży',
                'opisdania': 'Kotlet sachowy z ziemnikami i surówkami',
                'cena': 18.00,
            }],
    }

    wylosowane=(random)=>{
        let losowana = (Math.floor(Math.random() * 3 + 1));
        this.setState({
            wylosowana: losowana
        })
        let array = this.state.dania.filter((element) => Boolean(element.id === losowana));
        this.setState({
            wylosowane: array
        })

    }

    render() {
        return (
            <div>
                <div id={'kontener'}>
                    <div class={'napisglowny'}>Zestaw dnia</div>
                    <button onClick={()=>{this.props.wylosowanaliczba(this.state.wylosowane)}}>Losuj</button>
                </div>
            </div>
        );
    }
}