import { useState, useEffect } from "react";
import './AddABeer.scss'

const AddABeer = (props) => {
    const {beerData, getCustomData} = props;

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [fBrew, setFBrew] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [abv, setAbv] = useState("")
    const [ph, setPh] = useState("")
    const [data, setData] = useState({})

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleTagline = (event) => {
        setTagline(event.target.value)
    }

    const handleFirst = (event) => {
        setFBrew(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleImage = (event) => {
        setImage(event.target.value)
    }

    const handleABV = (event) => {
        setAbv(event.target.value)
    }

    const handlePh = (event) => {
        setPh(event.target.value)
    }

    const datOnPageUpdate = () => {
        setData ({
            id: beerData.length + 1,
            name: name,
            tagline: tagline,
            first_brewed: fBrew.toString(),
            description: description,
            image_url: image,
            abv: abv,
            ph: ph
        })
        
    }



    const handleSubmit = (event) => {
        event.preventDefault()
        fetch ("http://localhost:3012/custom/",
      {
      method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
       },
       body: JSON.stringify(data)

    })
    .then((res) => res.json())
    .then((data) => {
        alert("SUCCESFULLY POSTED CARD!!!")
        getCustomData()
    }) 


    }

    useEffect(datOnPageUpdate,[name,tagline,fBrew,description,image,abv,ph])

    return (
        <div className="add-container">
            <form onSubmit= {handleSubmit} className="add-container__form">
                <label>Name: 
                <input
                value= {name}
                onInput= {handleName}
                ></input>
                </label>
                <label>Tagline: 
                    <input
                    value ={tagline}
                    onInput={handleTagline}
                    ></input>
                </label>
                <label>first_brewed: 
                    <input
                    value= {fBrew}
                    onInput = {handleFirst}
                    ></input>
                </label>
                <label>description
                    <input
                    value={description}
                    onInput={handleDescription}
                    ></input>
                </label>
                <label>image_url: 
                    <input
                    value={image}
                    onInput={handleImage}
                    ></input>
                </label>
                <label>ABV: 
                    <input
                    value={abv}
                    onInput={handleABV}
                    ></input>
                </label>
                <label>ph: 
                    <input
                    value={ph}
                    onInput={handlePh}
                    ></input>
                </label>
                <button>SUBMIT</button>
            </form>


        </div>
    )
}

export default AddABeer;