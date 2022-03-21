import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CategoryList(props){
    return(
        <div className="row row-cols-1 row-cols-md-2 g-5 mb-5">
            {props.list.map((item, i) => {
                return (
                    <div className="col" key={i}>
                        <Link to={`/meals/${item.idMeal}`} className="text-decoration-none">
                            <motion.div className={`card h-100 py-4 ${ i % 2 === 0 ? "pink" : " orange"}`}
                                whileHover={{ scale: 1.1 }}
                                transition={{type: 'spring', stiffness: 200, delay:0.1}}
                                exit={{scale:3}}
                            > 
                                <div className="card-body d-flex flex-column p-5">
                                    <h1 className="fw-bold text-light">{item.strMeal}</h1>
                                    <img className="w-100 mt-auto" src={item.strMealThumb} alt="" />     
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}