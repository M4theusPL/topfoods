import React from 'react'
import TrescZamowienia from "../TrescZamowienia";
import IloscZamowienia from "../IloscZamowienia";
import PodsumowanieZamowienia from "./PodsumowanieZamowienia";
import TworzenieZamowienia from "../TworzenieZamowienia";
export default  class PozycjaZamowieniaItem extends React.Component{
    constructor(props) {
        super(props);
    }

    state={
        c:this.props.element.cena,
    }

    render() {
        return  <div className={'restauracja'}>
            <ul>
                <div className={'daniaokienko'}>
                    <TrescZamowienia title={this.props.element.nazwadania} subtitle={this.props.element.opisdania} price={this.props.element.cena} />
                    <div className={'ilosc'}>
                        <IloscZamowienia stackPlus={()=>this.props.stackPlus()}
                                         stackMinus={()=>this.props.stackMinus()}
                                         liczba={this.props.liczba}
                                         c={this.state.c}
                        />
                    </div>
                </div>
            </ul>
        </div>

    }
}