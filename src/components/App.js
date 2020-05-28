import React, {useReducer, useState} from 'react';
import reducer from "../reducers"

import Event from "./Event"
import 'bootstrap/dist/css/bootstrap.min.css';

// 状態遷移をさせたいタイミングでdispatchを呼んで、引数にアクション（typeという属性を渡してあげる）を渡してあげればいい
//状態遷移させたいタイミングとは、イベント新規作成とイベント削除ボタンがクリックされた時。


const App = () => {

    const [state, dispatch] = useReducer(reducer, []);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    //addEventはイベント新規作成ボタンがクリックされた時に発生するイベントハンドラー（この中でdispatchを呼んであげたい）
    const addEvent = e => {
        //画面のリロードを防ぐ（必要最低限のDOMだけをレンダーしたい）
        e.preventDefault();
        console.log({title, body});
        dispatch({
            type: "CREATE_EVENT",
            //titleとbodyはまだ作成されていない。フォームから入力されたものを吸い上げて、このコンポーネントに状態として持たせて、それぞれをdispatchの引数として渡してあげることが必要。
            //useStateで状態管理
            title,
            body
        });
        //イベント作成後にフォームの中をお掃除
        setTitle("");
        setBody("");
    };

    console.log({state});

    return (
        <div className="container-fluid">


            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">タイトル</label>
                    <input className="form-control"
                           id="formEventTitle"
                           value={title}
                        // 状態が変わるたびに新たな状態を持たせてあげる必要がある。onChangeのイベントハンドラーを設定
                           onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="formEventBody">ボディ</label>
                    <textarea className="form-control"
                              id="formEventBody"
                              value={body}
                        // 状態が変わるたびに新たな状態を持たせてあげる必要がある。onChangeのイベントハンドラーを設定
                              onChange={e => {
                                  setBody(e.target.value)
                              }}
                    />
                </div>
                <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
                <button className="btn btn-danger">全てのイベントを削除する</button>
            </form>

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
                {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
                </tbody>
            </table>
        </div>
    );
};

export default App;