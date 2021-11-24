import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Menu from './Menu';

export default class Zamowienia extends React.Component {

    state = {
    }

    render() {
        return (
            <div>
                <Menu/>
                <div id={'kontener'}>
                    <div class={'napisglowny'}>Zamówienia</div>



                </div>
            </div>
        );
    }
}