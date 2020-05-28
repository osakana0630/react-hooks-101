import Event from "./Event";
import React from "react";



const Events = ({state, dispatch}) => {

    return (

        <React.Fragment>
            <h4>イベント一覧</h4>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>タイトル</th>
                    <th>ボディー</th>
                </tr>
                </thead>
                <tbody>
                {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch}/>))}
                </tbody>
            </table>
        </React.Fragment>
    )};

export default Events