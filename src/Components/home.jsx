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
    })

    return (
        <div className="container">
            <div className="col-md-8 mx-auto">
                <div className="row mb-3">
                    <h1 className="pink-text">Or go through our categories</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mb-5">
                    {data.map((item, i) => {
                        return (
                            <div className="col" key={i}>
                                <Link to={`/categories/${item.strCategory}`} className="text-decoration-none">
                                    <div className={`card h-100 ${ i % 2 === 0 ? "orange" : " pink"}`}> 
                                        <div className="card-body d-flex flex-column box-pading text-center">
                                            <h1 className="fw-bold text-light text-center">{item.strCategory.length >= 10 ? item.strCategory.slice(0 ,4) : item.strCategory }</h1>
                                            <img className="w-100" src={item.strCategoryThumb} alt="" />     
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                    <div className="col">
                        <Link to="/random" className="text-decoration-none">
                        <div className="card orange h-100"> 
                            <div className="card-body d-flex align-items-center justify-content-center box-pading">
                                <h1 className="fw-bold text-light">Random</h1>   
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}