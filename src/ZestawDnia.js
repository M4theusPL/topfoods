import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Menu from './Menu';

export default class ZestawDnia extends React.Component {

    state = {
        wylosowana: null,
        wylosowane: [],
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

    losuj=(random)=>{
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
                <Menu/>
                <div id={'kontener'}>
                    <div class={'napisglowny'}>Zestaw dnia</div>

                    <button id={'losuj'} onClick={this.losuj.bind(this)}>Pobierz zestaw dnia</button>

                    {this.state.wylosowane.map((element) => (
                        <div id={'tabelkarestauracje'}>
                            <div className={'restauracja'}>
                                <ul>
                                    <div className={'daniaokienko'}>
                                        <div className={'nazwadania'}>{element.nazwadania}</div>
                                        <div className={'opisdania'}>{element.opisdania}</div>
                                        <div className={'cena'}>{element.cena}zł</div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        );
    }
}