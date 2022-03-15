import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./navigation";

export default function Category(){
    let strCategory = useParams("strCategory")
    
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory.strCategory}`)
        .then( response => response.json() )
        .then(
            json => {
                console.log(json.meals);
                setCategory(json.meals)
            }
        )
    }, [])

    return (
        <div>
            <Navigation />
            <div className="container">
                <div className="row mb-3">
                    <h1>Everything {strCategory.strCategory}</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-5 mb-5">
                    {category.map((item, i) => {
                        return (
                            <div className="col" key={i}>
                                {/* <Link to={`/categories/${item.strCategory}`}> */}
                                    <div className={`col rounded-3 h-100 ${ i % 2 === 0 ? "odd" : " even"}`}> 
                                        <div className="p-5">
                                            <h1 className="fw-bold text-light">{item.strMeal}</h1>
                                            <img className="w-100" src={item.strMealThumb} alt="" />     
                                        </div>
                                    </div>
                                {/* </Link> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>    
    )
}