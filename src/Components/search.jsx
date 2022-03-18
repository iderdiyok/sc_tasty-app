import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryList from "./categoryList";
import Footer from "./footer";
import Navigation from "./navigation";

export default function Search() {
    let input = useParams('input')

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.input}`)
            .then(response => response.json())
            .then(json => {
                setData(json.meals)
            })
            .catch(error => {
                console.log(error)
            })
    }, [input])

    return (
        <div>
            <Navigation />
            <div className="container">
                <div className="col-md-10 col-lg-8 mx-auto">
                    <div className="row mb-3">
                        <h1 className="orange-text">{data ? `${data.length} results found for ${input.input}` : 'Not Found'}</h1>
                    </div>
                    {data ? <CategoryList list={data} /> : "NotFound"}
                </div>
            </div>
            <Footer />
        </div>
    )
}

