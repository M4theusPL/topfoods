import './App.css';
import Menu from "./Menu";
import Pracownicy from './Pracownicy';
import Restauracje from "./Restauracje";
import TworzenieZamowienia from "./TworzenieZamowienia";
import ZestawDnia from "./ZestawDnia";
import Zamowienia from "./Zamowienia";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Logowanie from "./Logowanie";
import {isLogged} from "./Sesja";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path={'/'} component={isLogged()?Menu:Logowanie}/>
                <Route exact path={'/'} component={Logowanie}/>
                <Route path={'/Menu'} component={Menu}/>
                <Route path={'/Restauracje'} component={Restauracje} />
                <Route path={'/TworzenieZamowienia'} component={TworzenieZamowienia} />
                <Route path={'/ZestawDnia'} component={ZestawDnia} />
                <Route path={'/Zamowienia'} component={Zamowienia} />
                <Route path={'/Pracownicy'} component={Pracownicy} />
            </Switch>
        </Router>

    </div>
  );
}

export default App;
