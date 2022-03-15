import { useEffect, useState } from "react";

export default function Home(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(response => response.json())
            .then(json => {
                console.log(json.categories)
                setData(json.categories)
            })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h1>Or go through our categories</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex gap-3 flex-wrap">
            {data.map((item, i) => {
                return (
                    <div className="col p-5 bg-dark rounded-3" key={i}>
                        <div className="p-5 text-center">
                            <h1 className="fw-bold text-light">{item.strCategory}</h1>
                            <img className="w-100" src={item.strCategoryThumb} alt="" />     
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}