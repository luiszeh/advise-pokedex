import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppProvider from './context/AppProvider';

export default function Routes() {
    return (
        <AppProvider>
            <Switch>
                <Route exact path="/" component={ Home }/>
            </Switch>
        </AppProvider>
    )
}
