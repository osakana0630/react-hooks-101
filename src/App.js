import React, {useEffect, useState} from 'react';


const App = (props) => {
    //useStateの引数にオブジェクトを渡すことできる。抽象的な状態を持つことができる。
    const [state, setState] = useState(props);
    const {name, price} = state;

    // 仮装DOMがレンダリングされた後に呼ばれる
    useEffect(() => {
        console.log("This is like componentDidMount or componentDidUpdate");
    });

    useEffect(() => {
        console.log("This is like componentDidMount");
    }, []);

    useEffect(() => {
        console.log("This callback is for name only.");
    }, [name]);



    return (
        <React.Fragment>
            <p>現在の{name}は、{price}円です。</p>
            <button onClick={() => setState({...state, price: price + 1})}>+1</button>
            <button onClick={() => setState({...state, price: price - 1})}>-1</button>
            <button onClick={() => setState(props) }>Reset</button>
            {/*setStateの引数にはオブジェクトを受け取る*/}
            <input value={name} onChange={e => setState({...state, name: e.target.value})}/>


        </React.Fragment>
    );
};

App.defaultProps = {
    //初期値の設定
    name: "",
    price: 1000
};


export default App;
