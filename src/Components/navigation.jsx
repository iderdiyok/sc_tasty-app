import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import logo from "../tasty-logo.png"
export default function Navigation() {


    const [data, setData] = useState([]);
    const [input, setInput] = useState();


    function handleSubmit(event) {
        event.preventDefault()
    }


    return (
        <header>
            <nav>
                <div className="px-4 py-5 my-5 text-center">
                    <div className="col-5 col-md-2 mx-auto">
                        <Link to="/">
                            <img className="mb-4 w-100" src={logo} alt="Tasty-Logo" />
                        </Link>
                    </div>

                    <h1 className="pink-text display-5 fw-bold">Find a recipe, an idea, an inspiration...</h1>
                    <div className="col-6 mx-auto">
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <form className="d-md-flex" onSubmit={handleSubmit}>
                                <input className="form-control me-2 col-md-8" type="search" placeholder="Type something to search" aria-label="Search" onChange={(e) => setInput(e.target.value)} />
                                <Link to={`/search/${input}`}>
                                    <button className="btn col-md-4 btn-dark" type="submit" >Search</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}
