export default function Details(props){
    
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
        <div className="container">
                <div className="row">
                    <div className="col-sm-11 col-md-8 mx-auto p-5 h-100 p-3 pink">
                            <div className="col mb-5">
                                <img src={props.meals.strMealThumb} alt="Meal" className="w-100"/>
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
                                    <div className="mt-4 p-3 bg-light rounded-3 text-center">
                                        <a href={props.meals.strYoutube} target="_blank" rel="noopener noreferrer" className="pink-text text-decoration-none fw-bold">Watch on YouTube</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    )
}