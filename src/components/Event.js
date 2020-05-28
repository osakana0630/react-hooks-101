import React from "react";

const Event = ({ dispatch, event }) => {
            const id = event.id;

        // この中でdispatchを呼んであげたい。
        // 削除ボタンがクリックされて、このイベントハンドラーが呼び出されたら、該当のイベントを削除した現在の状態と初期状態をactionにつめて、reducerにdispatchしたい
        const handleClickDeleteButton = () => {
            //reducer側がどのイベントを削除すればいいのか判別できるようにidを渡してあげる
            dispatch({type: "DELETE_EVENT", id})
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



// {
//     //イベント一覧を取得するための状態は全てstateが持っているのでそれを展開してあげるだけでよい
//     state.map((event, index) => {
//         const id = event.id;
//
//         // この中でdispatchを呼んであげたい。
//         // 削除ボタンがクリックされて、このイベントハンドラーが呼び出されたら、該当のイベントを削除した現在の状態と初期状態をactionにつめて、reducerにdispatchしたい
//         const handleClickDeleteButton = () => {
//             //reducer側がどのイベントを削除すればいいのか判別できるようにidを渡してあげる
//             dispatch({type: "DELETE_EVENT", id})
//         };
//
//         return (
//             //ユニークなキーとして、idを付与してあげないとjsx側が、あるイベントが削除された時にどのイベントが削除されたか分からない
//             <tr key={index}>
//                 <td>{id}</td>
//                 <td>{event.title}</td>
//                 <td>{event.body}</td>
//                 <td>
//                     <button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button>
//                 </td>
//             </tr>
//         )
//     })
// }