import React, {useState} from 'react'


function Counter()
{

    const [counter,updateCount] = useState(0);

    const increament = () => { //increases the count by +1

        updateCount(prevCount => prevCount + 1);
        updateCount(prevCount => prevCount + 1);
        updateCount(prevCount => prevCount + 1);
    }

    const decreament = () => { //decreases the count by -1


        updateCount(preCount => preCount - 1);
        updateCount(preCount => preCount - 1);
        updateCount(preCount => preCount - 1);
    }

    const reset = () => { //resets the counter to zero

        updateCount(0)
    }

    return(
        <>
            <div className='counter-container'>
            <p>Counter: {counter}</p>
            <button className="inc" onClick = {increament}>+1</button>
            <button className="dec" onClick = {decreament}>-1</button>
            <button className="reset" onClick = {reset}>reset</button>
            </div>

        </>

    );
}

export default Counter