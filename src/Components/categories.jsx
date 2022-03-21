import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./navigation";
import Footer from "./footer";
import CategoryList from "./categoryList";

export default function Category(){
    let strCategory = useParams("strCategory")
    
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory.strCategory}`)
        .then( response => response.json() )
        .then(
            json => {
                setCategory(json.meals)
            }
        )
    },[strCategory])

    return (
        <div>
            <Navigation />
            <div className="container">
                <div className="col-md-10 col-lg-9 mx-auto">
                    <div className="row mb-3">
                        <h1 className="orange-text fw-bold">Everything {strCategory.strCategory}</h1>
                    </div>
                    <CategoryList list={category} />
                </div>
            </div>
            <Footer/>
        </div>    
    )
}