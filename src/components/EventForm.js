import React, {useContext ,useState} from "react";
import {
    CREATE_EVENT,
    DELETE_ALL_EVENTS
} from "../actions";
import AppContext from "../contexts/AppContext";



//App.js側でpropsとして、state,dispatchを受け取る
const EventForm = () => {

const{ state, dispatch} = useContext(AppContext)
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    //addEventはイベント新規作成ボタンがクリックされた時に発生するイベントハンドラー（この中でdispatchを呼んであげたい）
    const addEvent = e => {
        //画面のリロードを防ぐ（必要最低限のDOMだけをレンダーしたい）
        e.preventDefault();
        dispatch({
            type: CREATE_EVENT,
            //titleとbodyはまだ作成されていない。フォームから入力されたものを吸い上げて、このコンポーネントに状態として持たせて、それぞれをdispatchの引数として渡してあげることが必要。
            //useStateで状態管理
            title,
            body
        });
        //イベント作成後にフォームの中をお掃除
        setTitle("");
        setBody("");
    };


    const deleteAllEvents = (e) => {
        e.preventDefault();
        const result = window.confirm("全てのイベントを本当に削除しても良いですか？");
        if (result) dispatch({type: DELETE_ALL_EVENTS })
    };

    const unCreatable = title === "" || body === "";


    return (
        <React.Fragment>
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
                <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
                <button className="btn btn-danger" onClick={deleteAllEvents}
                        disabled={state.length === 0}>全てのイベントを削除する
                </button>
            </form>
        </React.Fragment>
    )
};

export default EventForm;
