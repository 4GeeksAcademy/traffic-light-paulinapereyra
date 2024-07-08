import React, {useState} from "react";

function TrafficLight () {
	const [color,setColor] = useState("")
    
    function changeColor (e) {
        setColor(e.target.id)
    }
    console.log("hola")
        return (
            <>
                <div className="d-inline-flex flex-column bg-dark p-2 rounded mx-auto">
                <input type="button" id="red" className={`bg-danger rounded-circle ${color == "red" ? "selected" : "opacity-50" }`} onClick={changeColor} style={{width: "100px", height: "100px"}} />
                <input type="button" id="yellow" className={`bg-warning rounded-circle ${color == "yellow" ? "selected" : "opacity-50" }`} onClick={changeColor} style={{width: "100px", height: "100px"}} />
                <input type="button" id="green" className={`bg-success rounded-circle ${color == "green" ? "selected" : "opacity-50" }`} onClick={changeColor} style={{width: "100px", height: "100px"}} />
              </div>
            </>
        )
          
}

export default TrafficLight;