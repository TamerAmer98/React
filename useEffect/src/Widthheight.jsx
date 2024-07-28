import React, {useState,useEffect} from "react";

function Widthheight()
{
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {

            window.addEventListener("resize",handleResize);
            document.title = `Orignal Size: ${width} x ${height}`;
            //document.title = `Orignal Size: ${width} ${height}`; if i want the title to update accordningly i need to remove the array of dependencies

    },[]);

    function handleResize()
    {

        setWidth(innerWidth);
        setHeight(window.innerHeight);

    }

    return(<>

            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
    
    
    
    
    </>);


}

export default Widthheight