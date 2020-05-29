import React, {useEffect, useReducer} from 'react';
import reducer from "../reducers"
import EventForm from "./EventForm"
import Events from "./Events"
import OperationLogs from "./OperationLogs"
import AppContext from "../contexts/AppContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const APP_KEY = "appWithRedux";


const App = () => {
    const appStore = localStorage.getItem(APP_KEY);
    const initialState = appStore ? JSON.parse(appStore) : {
        events: [],
        operationLogs: []
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // const string = JSON.stringify(state);
        // console.log({string})
        localStorage.setItem(APP_KEY, JSON.stringify(state))
    }, [state]);


    return (
        <AppContext.Provider value={{state, dispatch}}>
            <div className="container-fluid">

                <EventForm/>
                <Events/>
                <OperationLogs/>

            </div>
        </AppContext.Provider>

    );
};

export default App;