import { useState } from "react";
import { Link } from "react-router-dom"
import logo from "../tasty-logo.png"
import { motion } from "framer-motion";

export default function Navigation() {
    const [input, setInput] = useState();

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <header>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="py-5 my-5 text-center">
                            <div className="col-4 col-md-2 mx-auto">
                                <Link to="/">
                                    <img className="mb-4 w-100" src={logo} alt="Tasty-Logo"/>
                                </Link>
                            </div>

                            <motion.h1 className="pink-text display-4 fw-bold mb-4" 
                                drag
                                dragElastic={1.2}
                            >
                                Find a recipe, an idea, an inspiration...
                            </motion.h1>
                            <div className="col-md-7 mx-auto">
                                <div className="d-sm-flex justify-content-sm-center">
                                    <motion.form className="d-md-flex col-md-6" onSubmit={handleSubmit}
                                        drag
                                        dragElastic={1.2}
                                    >
                                        <input className="form-control col-md-8 border-0" type="search" placeholder="Type something to search" aria-label="Search" onChange={(e) => setInput(e.target.value)} />
                                        <Link to={`/search/${input}`} className="col-md-4">
                                            <button className="btn fw-bold rounded-3 px-4 pink text-light" type="submit" >Search</button>
                                        </Link>
                                    </motion.form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}
