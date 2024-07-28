import React,{useState} from 'react'

function MyComponent()
{

    const[name,setName] = useState("Guest");
    const[quantity,setQuantity] = useState(1);
    const[message,setMessage] = useState("");
    const[payment,setPayment] = useState(0);
    const[shipping,setShipping] = useState("Dilvery");

    function handleSetShipping(event)
    {
        setShipping(event.target.value);
    }

    function handlePaymentChange(event)
    {
        setPayment(event.target.value);
    }

    function handleMessageChange(event)
    {
        setMessage(event.target.value);
    }

    function handlateQuantityChange(event)
    {
        setQuantity(event.target.value);
    }

    function handleNameChange(event)
    {
        setName(event.target.value);

    }
    return(
            <div>
                    <p>Name: {name}</p>
                    <input value={name} onChange={handleNameChange}/>
                    

                    <p>Quantity: {quantity}</p>
                    <input value={quantity} onChange={handlateQuantityChange} type="number"/>
                    
                    <p>Message: {message}</p>
                    <textarea value={message} onChange={handleMessageChange} placeholder="Enter Dilvery Insctruction"/>
                    
                    <p>Payment: {payment}</p>
                    <select value={payment} onChange={handlePaymentChange}>
                        <option value="null">Select an option</option>
                        <option value="visa">Visa</option>
                        <option value="mastercard">Master Card</option>
                        <option value="giftcard">Gift Card</option>
                    </select>

                    <p>Shipping: {shipping}</p>
                    <label>   
                            <input type="radio" value="Pick Up" checked={shipping==="Pick Up"} onChange={handleSetShipping}/>
                             Pick Up
                    </label><br/>
                    <label>
                            <input type="radio" value="Dilvery" checked={shipping==="Dilvert"} onChange={handleSetShipping}/>
                            Dilvery
                    </label>

            </div>

    );


}

export default MyComponent