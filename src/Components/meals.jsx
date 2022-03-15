import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./navigation";

export default function Meal(){
    let mealId = useParams("idMeal")

    const [meal, setMeal] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId.idMeal}`)
        .then( response => response.json() )
        .then(
            json => {
                setMeal(json.meals[0])
            }
        )
    })

    return (
        <div>
            <Navigation />
            <div className="container">
                <div className="row">
                    <div className="col rounded-3 h-100 p-3 pink">
                            <div className="col"> 
                                <img src={meal.strMealThumb} alt="Meal" />
                            </div>
                            <div className="col">
                                <div className="col-8">
                                    <h1 className="fw-bold text-light">{meal.strMeal}</h1>
                                </div>
                                <div className="col-4">
                                    <h1 className="fw-bold text-light">Ingredients</h1>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}