import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "../views/Home"
import "./style.css"

export default function Routes() {
    return (
        <Router>

                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="#">About</Link>
                        </li>
                        <li>
                            <Link to="#">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </Switch>
           
        </Router>
    );
}