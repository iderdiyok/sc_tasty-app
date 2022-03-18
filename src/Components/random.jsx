import { useState, useEffect } from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import Details from "./details";

export default function Random(){

    const [random, setRandom] = useState([])
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then( response => response.json() )
        .then(
            json => {
                setRandom(json.meals[0])
            }
        )   
        .catch(error => {
            console.log(error)
        })

    }, [])

    return (
        <div>
            <Navigation />
            <Details meals={random} />
            <Footer />
        </div>
    )
}