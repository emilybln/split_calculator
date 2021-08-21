import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {Store} from '@reduxjs/toolkit'
import Home from './components/Home'

interface IAppProps {
    store: Store
}

const App: React.FC<IAppProps> = ({store}) => (
        <Provider store={store}>
            <Router>
                <React.Fragment>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </React.Fragment>
            </Router>
        </Provider>
    )

export default App
