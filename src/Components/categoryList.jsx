import { Link } from "react-router-dom";

export default function CategoryList(props){
    return(
        <div className="row row-cols-1 row-cols-md-2 g-5 mb-5">
            {props.list.map((item, i) => {
                return (
                    <div className="col" key={i}>
                        <Link to={`/meals/${item.idMeal}`} className="text-decoration-none">
                            <div className={`card h-100 ${ i % 2 === 0 ? "pink" : " orange"}`}> 
                                <div className="card-body d-flex flex-column p-5">
                                    <h1 className="fw-bold text-light">{item.strMeal}</h1>
                                    <img className="w-100 mt-auto" src={item.strMealThumb} alt="" />     
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}