import React, {useState} from 'react'

function MyComponent()
{
    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [isEmployee,setisEmployee] = useState(true);

    const toggleIsEmployee = () => {
        if(isEmployee){
            setisEmployee(false);
        }
        else{
            setisEmployee(true);
        }
    }

    const updateStatus = () =>{
        setisEmployee(true);
    }

    const updateAge = () => 
    {
        setAge(25);
    }
    const updateName = () => {
        setName("Tamer");
    }

    const increamentAge = () =>{
        setAge(age + 1);
    }
    

    return (
            <div>
                    <p>Name: {name}</p>
                    <button onClick={updateName}>Set Name</button>

                    <p>Age: {age}</p>
                    <button onClick={increamentAge}>Set Age</button>

                    <p>Status: {isEmployee ? "He is an employee" : "he is not an employee"}</p>
                    <button onClick={toggleIsEmployee}>Set Employee</button>

            </div>

    );
}

export default MyComponent