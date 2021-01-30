import React  from 'react';
import Button from '@material-ui/core/Button';
import SignIn from './pages/SignIn';
import Home   from './pages/Home';
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path = '/signin' component = {SignIn} />
                <Route path = '/' component = {Home} />
            </Switch>
        </div>
    );
}

export default App;
