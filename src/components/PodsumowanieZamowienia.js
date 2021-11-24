import React from 'react'
import IloscZamowienia from "../IloscZamowienia";
export default class PodsumowanieZamowienia extends React.Component{
    render(){
        return(
            <div id={'podsumowaniezamowienia'}>
                <div id={'podsumowaniezamowieniewnetrze'}>
                    <div class={'podsumowanienaglowek'}>Podsumowanie zamowienia</div>
                    <div class={'podsumowanieilosc'}>Ilość: {this.props.ilosc} szt</div>
                    <div class={'podsumowanieilosc'}>Wartość: {this.props.suma}zł</div>
                </div>
            </div>
        );
    }
}