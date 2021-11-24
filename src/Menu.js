import React from "react";
import Pracownicy from "./Pracownicy";
import Restauracje from "./Restauracje";
import TworzenieZamowienia from "./TworzenieZamowienia";
import ZestawDnia from "./ZestawDnia";
import Zamowienia from "./Zamowienia";
import '../node_modules/font-awesome/css/font-awesome.min.css';

export default class Menu extends React.Component{

    pokaz(){
        document.getElementById('rozwinmenu').style.display='none'
        document.getElementById('ukryjmenu').style.display='block'
        document.getElementById('menu').style.display='block'
    }

    ukryj(){
        document.getElementById('ukryjmenu').style.display='none'
        document.getElementById('rozwinmenu').style.display='block'
        document.getElementById('menu').style.display='none'
    }

    wyloguj(){
        localStorage.removeItem('login-haslo');
        window.location.reload();
    }

    render() {
        return(
            <div id={'gmenu'}>
                <div id={'pokazukryj'}>
                    <a onClick={this.pokaz}><div id={'rozwinmenu'}>Rozwiń menu</div></a>
                    <a onClick={this.ukryj}><div id={'ukryjmenu'}>Ukryj menu</div></a>
                    <div class={'clear'}></div>
                </div>

                <div id={'menu'}>
                    <a href={'/'}><div class={'menuprzycisk2'}><i className="fa fa-cutlery fa-6" aria-hidden="true"></i>
                    </div></a>
                    <a href={'/Restauracje'}><div class={'menuprzycisk'}>Restauracje</div></a>
                    <a href={'/ZestawDnia'}><div class={'menuprzycisk'}>Zestaw dnia</div></a>
                    <a href={'/Zamowienia'}><div class={'menuprzycisk'}>Zamówienia</div></a>
                    <a href={'/Pracownicy'}><div class={'menuprzycisk'}>Pracownicy</div></a>
                    <a onClick={this.wyloguj} href={'/'}><div class={'menuprzycisk'}>Wyloguj się</div></a>
                </div>
            </div>

        );
    }
}