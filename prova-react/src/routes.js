import React from "react"
import Home from './pages/Home'
import Blocks from "./pages/Blocks"
import Cards from "./pages/Cards"
import Forms from './pages/Forms'
import Pricing from './pages/Pricing'
import { Switch, Route } from "react-router-dom";



export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/blocks" components={Blocks} />
            <Route path="/cards" components={Cards} />
            <Route path="/forms" components={Forms} />
            <Route path="/pricing" components={Pricing} />
            <Route component={() => <div>404</div>} />
        </Switch>
    )
}

