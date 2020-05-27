import React, {useState} from 'react';


const App = (props) => {
    // //初期値の設定
    // const initialStates = {
    //     name: "",
    //     price: 1000
    // };

    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.price);

    const reset = () => {
        setPrice(props.price);
        setName(props.name)
    };


    return (
        <React.Fragment>
            <p>現在の{name}は、{price}円です</p>
            <button onClick={() => setPrice(price + 1)}>+1</button>
            <button onClick={() => setPrice(price - 1)}>-1</button>
            <button onClick={reset}>Reset</button>
            {/*e.target.valueでonChaneが発生した時にinputに入力させている値を拾うことができる*/}
            <input value={name} onChange={e => setName(e.target.value)}/>


        </React.Fragment>
    );
};

App.defaultProps = {
    //初期値の設定
    name: "",
    price: 1000
};


export default App;
