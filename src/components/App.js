// create your App component here
import React from "react"

function App(){

    const [dog, setDog] = React.useState("")

    React.useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=>r.json())
        .then(data=>{
            setDog(data.message)
        })
    }, [])

    if(dog === ""){
        return (
            <p>Loading...</p>
        )
    }else{
        return (
            <img src={dog} alt="A Random Dog" />
        )
        
    }
}

export default App