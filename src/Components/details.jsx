import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { motion } from "framer-motion";

export default function Details(props){
    const [show, setShow] = useState(false)

    function instructionsToList(){
        const instArray = props.meals.strInstructions.split(".")
        instArray.pop();
        const listItems =  instArray.map((item, i) =>
            <li key={i} className="fs-5 text-light mb-2">
                {item}.
            </li>
        );
        return(
            
            <ul>{listItems}</ul>
        );
    }

    function ingredientAndMeasure(){
        let ingredients = []
        let measures= []
        
        for (let [key, value] of Object.entries(props.meals)) {
            if((key.slice(0, -1) === "strIngredient") || (key.slice(0, -1) === "strIngredient1") ){
                if(value !== ""){
                    ingredients.push(value)
                }
            }
            if((key.slice(0, -1) === "strMeasure") || (key.slice(0, -1) === "strMeasure1")){
                if(value !== ""){
                    measures.push(value)
                }
            }
        }
        const measuresAndInstructions = measures.map((item,i) =>
            <h5 key={i} className="fw-bold text-light">
                {item} {ingredients[i]}
            </h5>    
        );
        return(
            <div>{measuresAndInstructions}</div>
        )
    }
    
    return(
        <main className="container">
            <div className="row">
                <motion.div className="col-md-10 col-lg-9 mx-auto p-5 h-100 p-3 pink"
                    initial={{scale: 0.1, opacity:0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{type: 'spring', stiffness: 200, duration:2.5, delay:0.2}}
                >
                        <div className="col mb-5">
                            <img src={props.meals.strMealThumb} alt="Meal" className="w-100 h-75"/>
                            <h6 className="mt-2 text-light fw-bold">
                                <span className="me-3">{props.meals.strArea} Dish</span>
                                <span>Category: {props.meals.strCategory}</span>
                                <span className="ms-3">{props.meals.strTags ? `Tags: ${props.meals.strTags}` : null}</span>
                            </h6>
                        </div>
                        <div className="col text.light d-lg-flex justify-content-between">
                            <div className="col col-lg-7">
                                <h1 className="fw-bold text-light mb-5">{props.meals.strMeal}</h1>
                                { props.meals.strInstructions ? instructionsToList() : null}
                            </div>
                            <div className="col col-lg-3">
                                <h1 className="fw-bold text-light mb-5">Ingredients</h1>
                                { props.meals.strIngredient1 ? ingredientAndMeasure() : null}
                                <motion.button 
                                    type='button' 
                                    className="border-0 mt-4 px-5 py-3 bg-light pink text-center pink-text text-decoration-none fw-bold fs-5" 
                                    onClick={() => setShow(true)}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{type: 'spring', stiffness: 100}}
                                >
                                    Watch Video
                                </motion.button>
                            </div>
                        </div>
                </motion.div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={show} videoId={props.meals.strYoutube ? props.meals.strYoutube.slice(32): null} onClose={() => setShow(false)} />
        </main>
    )
}