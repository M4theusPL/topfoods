import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Menu from './Menu';
import IloscZamowienia from "./IloscZamowienia";

export default class TrescZamowienia extends React.Component {
    render() {
        return (
            <div>
                <div className={'nazwadania'}>{this.props.title}</div>
                <div className={'opisdania'}>{this.props.subtitle}</div>
                <div className={'cena'}>{this.props.price}zł</div>
            </div>
        );
    }
}