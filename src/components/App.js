import React, { useReducer } from 'react';
import reducer from "../reducers"
import EventForm from "./EventForm"
import Events from "./Events"
import AppContext from "../contexts/AppContext";
import 'bootstrap/dist/css/bootstrap.min.css';


// 状態遷移をさせたいタイミングでdispatchを呼んで、引数にアクション（typeという属性を渡してあげる）を渡してあげればいい
//状態遷移させたいタイミングとは、イベント新規作成とイベント削除ボタンがクリックされた時。


const App = () => {

    const [state, dispatch] = useReducer(reducer, []);


    return (
        <AppContext.Provider value={{state, dispatch}}>
        <div className="container-fluid">

            <EventForm />
            <Events />
        </div>
            </AppContext.Provider>

            );
};

export default App;