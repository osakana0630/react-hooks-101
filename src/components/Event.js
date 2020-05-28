import React, {useContext} from "react";
import {
    DELETE_EVENT,
    ADD_OPERATION_LOG
} from "../actions"
import AppContext from "../contexts/AppContext";
import {timeCurrentIso8601 } from "../utils";


const Event = ({ event }) => {
    const {dispatch} = useContext(AppContext);
             const id = event.id;


        // この中でdispatchを呼んであげたい。
        // 削除ボタンがクリックされて、このイベントハンドラーが呼び出されたら、該当のイベントを削除した現在の状態と初期状態をactionにつめて、reducerにdispatchしたい
        const handleClickDeleteButton = () => {
            //reducer側がどのイベントを削除すればいいのか判別できるようにidを渡してあげ const result = window.confirm("全てのイベントを本当に削除しても良いですか？");
            const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`);
            if (result) {
                dispatch({type: DELETE_EVENT, id})

                dispatch({
                    type: ADD_OPERATION_LOG,
                    description: `イベント(id=${id})を削除しました。`,
                    operatedAt: timeCurrentIso8601()
                })
            }
        };

        return (
            //ユニークなキーとして、idを付与してあげないとjsx側が、あるイベントが削除された時にどのイベントが削除されたか分からない
            <tr>
                <td>{id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button>
                </td>
            </tr>
        )

};

export default Event


