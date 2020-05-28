import React from "react";
import {DELETE_EVENT} from "../actions"



const Event = ({ dispatch, event }) => {
            const id = event.id;

        // この中でdispatchを呼んであげたい。
        // 削除ボタンがクリックされて、このイベントハンドラーが呼び出されたら、該当のイベントを削除した現在の状態と初期状態をactionにつめて、reducerにdispatchしたい
        const handleClickDeleteButton = () => {
            //reducer側がどのイベントを削除すればいいのか判別できるようにidを渡してあげ const result = window.confirm("全てのイベントを本当に削除しても良いですか？");
            const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`);
            if (result) dispatch({type: "DELETE_EVENT", id})
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


