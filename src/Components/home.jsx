import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(response => response.json())
            .then(json => {
                setData(json.categories)
            })
    }, [])

    return (
        <div className="container">
            <div className="row mb-3">
                <h1>Or go through our categories</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mb-5">
                {data.map((item, i) => {
                    return (
                        <div className="col" key={i}>
                            <Link to={`/categories/${item.strCategory}`}>
                                <div className={`col rounded-3 ${ i % 2 === 0 ? "even" : " odd"}`}> 
                                    <div className="p-5 text-center">
                                        <h1 className="fw-bold text-light">{item.strCategory}</h1>
                                        <img className="w-100" src={item.strCategoryThumb} alt="" />     
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
                <div className="col">
                    <div className="col rounded-3 even h-100 d-flex align-items-center justify-content-center"> 
                        <div className="p-5 text-center">
                            <h1 className="fw-bold text-light">Random</h1>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}