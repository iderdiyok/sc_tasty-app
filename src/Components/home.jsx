import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(response => response.json())
            .then(json => {
                setData(json.categories)
                
            })
    },[])

    return (
        <main className="container">
            <div className="col-md-10 col-lg-9 mx-auto">
                <div className="row mb-3">
                    <h1 className="pink-text fw-bold">Or go through our categories</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mb-5">
                    {data.map((item, i) => {
                        return (
                            <motion.div className="col" key={i}
                                initial={{y: '100vh'}}
                                animate={{y: 0}}
                                transition={{type: 'twin',duration:.5, delay: ((parseInt(item.idCategory) + 2) / 10)}}
                            >
                                <Link to={`/categories/${item.strCategory}`} className="text-decoration-none">
                                    <motion.div className={`card h-100 shadow ${ i % 2 === 0 ? "orange" : " pink"}`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{type: 'spring', stiffness: 200, delay:0.1}}
                                    > 
                                        <div className="card-body d-flex flex-column box-pading text-center">
                                            <h1 className="fw-bold text-light text-center">{item.strCategory.length >= 10 ? item.strCategory.slice(0 ,4) : item.strCategory }</h1>
                                            <img className="w-100" src={item.strCategoryThumb} alt="" />     
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        )
                    })}
                    <div className="col">
                        <Link to="/random" className="text-decoration-none">
                        <motion.div className="card orange h-100"
                            whileHover={{ scale: 1.1 }}
                            transition={{type: 'spring', stiffness: 200, delay:0.1}}
                        > 
                            <div className="card-body d-flex align-items-center justify-content-center box-pading">
                                <h1 className="fw-bold text-light">Random</h1>   
                            </div>
                        </motion.div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}