import React, {useState} from 'react';


const App = () => {
    const [count, setCount] = useState(0);

    //setCountでcountの値が変化するとコンポーネントを再描画するように促す
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    //setCountの引数に関数をぶち込んで値を更新することもできる（更新処理が複雑になる場合に使う）
    const increment2 = () => setCount(previousCount => previousCount + 1);
    const decrement2 = () => setCount(previousCount => previousCount - 1);

    // const reset = () => setCount(previousCount => previousCount =  0);
    const reset = () => setCount(0);


    const multiple = () => setCount(count * 2);
    const division = () => setCount(previousCount => {
        return previousCount % 3 === 0 ? previousCount / 3 : previousCount
    });

    return (


        <React.Fragment>
            <div>count: {count}</div>
            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
            </div>
            <div>
                <button onClick={increment2}>+1</button>
                <button onClick={decrement2}>-1</button>
            </div>

            <div>
                <button onClick={reset}>Reset</button>
            </div>

            <div>
                <button onClick={multiple}>x2</button>
            </div>

            <div>
                <button onClick={division}>３の倍数の時だけ３で割る</button>
            </div>

        </React.Fragment>
    );
};

export default App;
