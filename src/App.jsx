import { useState } from "react";
import './app.css'

const App = () =>{
    let [name, setName]= useState("");
    let [age, setAge]= useState("");
    const [result, setResult]= useState([]);

    const handleSubmit = (event) => {
        let letters =  /^[A-Za-z\s]*$/ ;
        let numbers = /^\d+$/;
        event.preventDefault();
        const data = {name,age}
        if(name == ""){
            alert("Fadlan geli magacaaga");
          
        }else if(!name.match(letters)){

            alert("Fadlan Magac saxan geli");
         }else if(age == ""){
            alert("Fadlan geli da'daada")

        }else if (!age.match(numbers)){
            alert("Fadlan geli da' sax ah")

        } else{
            setResult(() => [data])
                setName("")
                setAge("")
        }
    }
    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)}/>
                <br />
                <input name="age" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)}/>
                <br />
                <button>Submit</button>
            </form>
            {
                result.map((info)=> info.age>18?
                <p className="result"> Your name is {info.name} and your age is {info.age} and you are over 18</p> :
                <p className="result"> Your name is {info.name} and your age is {info.age} and you are under 18</p>
                )
            }
        </div>
    )

}
export default App