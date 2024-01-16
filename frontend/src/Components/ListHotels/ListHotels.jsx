import { useState } from "react"
import "./ListHotels.css"
import { useEffect } from "react";

export default function ListHotels() {
const [list, setList] = useState("");

const API = "http://localhost:8080/api/hotels"

useEffect(() => {
fetch(API)
.then((response) => {
    return response.json();
})
.then((data) => {
    setList(data)
    console.log(data)
})
},)

return (

<>
<div className="container">
    
</div>
</>
)
}
