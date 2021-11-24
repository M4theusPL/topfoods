import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Menu from './Menu';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/plain.css'
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';

export default class Restauracje extends React.Component {

    state = {
        nnazwa: null,
        nkuchnia: null,
        ngodz: null,
        ngodz2: null,
        nlokalizacja: null,
        nnrtel: null,
        restauracje: [{
            'obrazek': './logo192.png',
            'nazwaresturacji': 'U Jana',
            'godzinyotwarcia': 'pn-pt 8-16',
            'kuchnia': 'Polska',
            'numer': 123456789,
            'lokalizacja': 'ul. Jasna 23',
        },
            {
                'obrazek': './logo192.png',
                'nazwaresturacji': 'Bistro',
                'godzinyotwarcia': 'pn-pt 10-18',
                'kuchnia': 'Włoska',
                'numer': 465789123,
                'lokalizacja': 'ul. Ciemana 50',
            },
            {
                'obrazek': './logo192.png',
                'nazwaresturacji': 'u Papy',
                'godzinyotwarcia': 'pn-pt 9-17, sob 8-15',
                'kuchnia': 'Pizzeria',
                'numer': 789456132,
                'lokalizacja': 'ul. Za Rogiem 101',
            }],
    }

    wyswietl = (e) => {
        var dodaj = document.getElementById('wyswietl');
        dodaj.style.display = 'none';
        var zamknij = document.getElementById('zamknij');
        zamknij.style.display = 'block';
        var form = document.getElementById('formularzdodania');
        form.style.display = 'block';
    }

    zamknij = (e) => {
        var form = document.getElementById('formularzdodania');
        form.style.display = 'none';
        var dodaj = document.getElementById('wyswietl');
        dodaj.style.display = 'block';
        var zamknij = document.getElementById('zamknij');
        zamknij.style.display = 'none';
    }

    dodaj = (e) => {
        let arr = this.state.restauracje;

        (Boolean(this.state.nnazwa.trim()) && Boolean(this.state.ngodz.trim()) && Boolean(this.state.nnrtel.trim()) && Boolean(this.state.nlokalizacja.trim()) ?
            (arr.push({
                'obrazek': './logo192.png',
                "nazwaresturacji": this.state.nnazwa,
                "kuchnia": this.state.nkuchnia,
                "godzinyotwarcia": this.state.ngodz + '-' + this.state.ngodz2,
                "numer": this.state.nnrtel,
                "lokalizacja": this.state.nlokalizacja,
            })) :
            alert('Uzupełnij poprawnie wszystkie pola!'));
        this.setState({pracownicy: arr})

        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        this.setState({
            wartosciinput: [{}]
        })
    }


    nazwarestauracji = (e) => {
        this.setState({
            nnazwa: e.target.value
        })
    }

    kuchnia = (e) => {
        this.setState({
            nkuchnia: e.target.value
        })
    }

    godzinyotwarcia = (hourArray) => {

        if (hourArray[0] === undefined) {
            this.setState({ngodz2: hourArray[1]})
        } else {
            this.setState({ngodz: hourArray[0]})
        }
    }

    lokalizacja = (e) => {
        this.setState({
            nlokalizacja: e.target.value
        })
    }

    nrtel = (e) => {
        this.setState({
            nnrtel: e
        })
    }

    wyloguj() {
        localStorage.removeItem('login-haslo');
        window.location.reload();
    }

    render() {
        return (
            <div>
                <Menu/>
                <div id={'kontener'}>
                    <div class={'napisglowny'}>Resturacje</div>

                    <div id={'formularzdodania'}>
                        <div id={'formularzdodaniatlo'}>

                            <table>
                                <tr>
                                    <td>Nazwa restauracji:</td>
                                    <td><input type={'text'} onChange={this.nazwarestauracji} maxLength={30} required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kuchnia:</td>
                                    <td><input type={'text'} onChange={this.kuchnia} maxLength={30} required/></td>
                                </tr>
                                <tr>
                                    <td>Godziny otwarcia:</td>
                                    {/*<td><input type={'text'} onChange={this.godzinyotwarcia} maxLength={20} required/></td>*/}
                                    <td>
                                        <TimeRangePicker
                                            disableClock={true}
                                            // format={"H:m"}
                                            locale={'pl-PL'}
                                            renderNumbers={true}
                                            amPmAriaLabe={"Select AM/PM"}
                                            className={'czas'}
                                            clearAriaLabel={'Clear value'}
                                            onChange={this.godzinyotwarcia}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Numer telefonu:</td>
                                    <td id={'telefon'}><PhoneInput
                                        country={'pl'}
                                        international
                                        defaultCountry="PL"
                                        onChange={this.nrtel}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lokalizacja:</td>
                                    <td><input type={'text'} onChange={this.lokalizacja} maxLength={40} required/></td>
                                </tr>
                            </table>
                            <div id={'zamknij'}>
                                <button onClick={this.zamknij.bind(this)}>Zamknij formularz</button>
                                <span id={'dodaj'}><button
                                    onClick={this.dodaj.bind(this)}>Dodaj restaurację</button></span>
                            </div>

                        </div>
                    </div>
                    <div id={'wyswietl'}>
                        <button onClick={this.wyswietl.bind(this)}>Dodaj restaurację</button>
                    </div>

                    <div id={'tabelkarestauracje'}>
                        {this.state.restauracje.map((element) =>
                            <div class={'restauracja'}>
                                <ul>
                                    <a href={'/TworzenieZamowienia'}>
                                        <div class={'restauracjaokienko'}>
                                            <div class={'obrazekrestauracja'}><img src={element.obrazek}
                                                                                   style={{float: 'left'}}/>

                                                <div class={'nazwaresturacji'}>{element.nazwaresturacji}</div>
                                                <div class={'kuchnia'}>{element.kuchnia}</div>
                                                <div class={'dolrestauracje'}>
                                                    <div class={'dol'}>
                                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                                        {element.godzinyotwarcia}
                                                    </div>
                                                    <div className={'dol'}>
                                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                                        {element.numer}
                                                    </div>
                                                    <div className={'dollokalizacja'}>
                                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                        {element.lokalizacja}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>

            </div>
        );
    }
}