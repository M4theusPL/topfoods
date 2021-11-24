import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Menu from './Menu';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/plain.css'
export default class Pracownicy extends React.Component{

    state={
        nimie: null,
        nnazwisko: null,
        nemail: null,
        nnrtel: null,
        pracownicy: [{
                'imie': 'Jan',
                'nazwisko': 'Kowalski',
                'numer': 123456789,
                'mail': 'j@kowalski.pl',
            },
            {
                'imie': 'Janina',
                'nazwisko': 'Nowak',
                'numer': 465789123,
                'mail': 'j@nowak.pl',
            },
            {
                'imie': 'Stefan',
                'nazwisko': 'Luka',
                'numer': 789456132,
                'mail': 's@luka.pl',
            }],
    }

    wyswietl=(e)=>{
        var dodaj = document.getElementById('wyswietl');
        dodaj.style.display='none';
        var zamknij = document.getElementById('zamknij');
        zamknij.style.display='block';
        var form = document.getElementById('formularzdodania');
        form.style.display= 'block';
    }

    zamknij=(e)=>{
        var form = document.getElementById('formularzdodania');
        form.style.display= 'none';
        var dodaj = document.getElementById('wyswietl');
        dodaj.style.display='block';
        var zamknij = document.getElementById('zamknij');
        zamknij.style.display='none';
    }

    dodaj=(e)=>{
        let arr = this.state.pracownicy;

        if(this.validateEmail(this.state.nemail)===false){
            alert('Zły email podano: '+this.state.nemail)
            return;
        }

        if((Boolean(this.state.nimie)&&Boolean(this.state.nnazwisko)&&Boolean(this.state.nnrtel)&&Boolean(this.state.nemail))?
            (arr.push({
            "imie": this.state.nimie,
            "nazwisko": this.state.nnazwisko,
            "numer": this.state.nnrtel,
            "mail": this.state.nemail,
            }))
                :alert('Uzupełnij poprawnie wszystkie pola!'))
        this.setState({pracownicy: arr})
    }

    imie=(e)=>{
        this.setState({
            nimie: e.target.value
        })
    }

    nazwisko=(e)=>{
        this.setState({
            nnazwisko: e.target.value
        })
    }

    validateEmail=(mail)=>
    {
        return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
    }

    mail=(e)=>{
        this.setState({nemail: e.target.value});
    }


    nrtel=(e)=>{
        this.setState({
            nnrtel: e
        })
    }

    wyloguj(){
        localStorage.removeItem('login-haslo');
        window.location.reload();
    }

    render() {
        return(
            <div>
                <Menu />
                <div class={'napisglowny'}>Pracownicy</div>

                <div id={'formularzdodania'}>
                    <div id={'formularzdodaniatlo'}>

                        <table>
                            <tr>
                                <td>Imie: </td>
                                <td><input type={'text'} onChange={this.imie} maxLength={30} required/></td>
                            </tr>
                            <tr>
                                <td>Nazwisko: </td>
                                <td><input type={'text'} onChange={this.nazwisko} maxLength={30} required/></td>
                            </tr>
                            <tr>
                                <td>Numer telefonu: </td>
                                <td id={'telefon'}><PhoneInput
                                    inputStyle={{height:'22px', width:'164.8px'}}
                                    buttonStyle={{height:'22px'}}
                                    country={'pl'}
                                    international
                                    defaultCountry="PL"
                                    onChange={this.nrtel}/>
                                    </td>
                            </tr>
                            <tr>
                                <td>E-mail: </td>
                                <td><input type={'email'} onChange={this.mail} maxLength={30} required/></td>
                            </tr>
                        </table>
                        <div id={'zamknij'}>
                            <button onClick={this.zamknij.bind(this)}>Zamknij formularz</button>
                            <span id={'dodaj'}><button onClick={this.dodaj.bind(this)}>Dodaj pracownika</button></span>
                        </div>

                    </div>
                </div>
                <div id={'wyswietl'}><button onClick={this.wyswietl.bind(this)}>Dodaj pracownika</button></div>


                <div id={'tabelkapracownicy'}>
                    <table>
                        <tr>
                            <th>Imie</th>
                            <th>Nazwisko</th>
                            <th>Numer telefonu</th>
                            <th>E-mail</th>
                        </tr>
                            {this.state.pracownicy.map((element)=>
                                <tr><td>{element.imie}</td><td>{element.nazwisko}</td><td>{element.numer}</td><td>{element.mail}</td></tr>
                            )}
                    </table>
                </div>



            </div>
        );
    }
}