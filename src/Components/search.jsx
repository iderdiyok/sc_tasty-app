import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import Footer from "./footer";
import Navigation from "./navigation";


export default function Search() {
    let input = useParams('input')
    const [data, setData] = useState([]);
    // const [input, setInput] = useState();
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        console.log('clicked')
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.input}`)
            .then(response => response.json())
            .then(json => {
                setData(json.meals)
                console.log(json.meals)
                setIsPending(false)

            })
        // i need cleanup fumction here
        return () => console.log('clean up')

    }, [])



    return (
        <div>
            <Navigation />
            <div className="container">
                <div className="row mb-3">
                    {/* <h1 className="orange-text">Everything {strCategory.strCategory}</h1> */}
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-5 mb-5">

                    {data ? data.map((item, i) => {
                        return (
                            <div className="col" key={i}>
                                <Link to={`/meals/${item.idMeal}`} className="text-decoration-none">
                                    <div className={`col rounded-3 h-100 ${i % 2 === 0 ? "pink" : " orange"}`}>
                                        <div className="p-5">
                                            <h1 className="fw-bold text-light">{item.strMeal}</h1>
                                            <img className="w-100" src={item.strMealThumb} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                        : 'Not Found'
                    }

                </div>
            </div>
            <Footer />
        </div>
    )
}

