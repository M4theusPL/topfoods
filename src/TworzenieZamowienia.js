import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Menu from './Menu';
import IloscZamowienia from "./IloscZamowienia";
import PozycjaZamowieniaItem from "./components/PozycjaZamowieniaItem";
import PodsumowanieZamowienia from "./components/PodsumowanieZamowienia";

export default class TworzenieZamowienia extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        liczba: 0,
        ilosc:0,
        cena:0,
        wartosc:0,
        wartoscc:0,
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

    stackPlus(){
        let ilosc=this.state.ilosc;
        ilosc=ilosc+1;
        this.setState({ilosc: ilosc})

    }

    stackMinus(){
        let ilosc=this.state.ilosc;
        ilosc=ilosc-1;
        this.setState({ilosc: ilosc})
    }

    render() {
        return (
            <div>
                <Menu/>
                <div id={'kontener'}>
                    <div class={'napisglowny'}>Tworzenie zamówienia</div>

                    <div id={'tabelkarestauracje'}>
                        {this.state.dania.map((element) =>
                           <PozycjaZamowieniaItem
                               stackMinus={()=>this.stackMinus()}
                               stackPlus={()=>this.stackPlus()}
                               element={element}
                               liczba={this.props.liczba}/>
                        )}
                    </div>
                <PodsumowanieZamowienia ilosc={this.state.ilosc} suma={this.state.suma}/>
                </div>
            </div>
        );
    }
}