import './App.css';
import {useDispatch, useSelector,} from 'react-redux'
import {decrementCounter, incrementCounter} from "./redux/actions/CounterAction";

function App() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter());
    };
    const handleDecrement = () => {
        dispatch(decrementCounter());
    };

    return (
        <div className="App">
            <h3>Redux Counter App</h3>
            <p>Count:{count}</p>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{margin: '5px'}}>
                    <button onClick={() => handleIncrement()}>Increment</button>
                </div>
                <div style={{margin: '5px'}}>
                    <button onClick={() => handleDecrement()}>Decrement</button>
                </div>
            </div>
        </div>
    );
}

export default App;
