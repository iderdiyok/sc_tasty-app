import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="mt-5">
            <ul className="d-flex justify-content-center fs-3 gap-2 list-unstyled">
                <li className="mt-5" ><a className="pink-text" href="https://www.instagram.com/"><FaInstagram/></a></li>
                <li className="mt-5"><a className="orange-text" href="https://www.youtube.com/"><FaYoutube/></a></li>
                <li className="mt-5"><a className="pink-text" href="https://www.facebook.com/"><FaFacebookSquare/></a></li>
            </ul>
        </footer>
    )

}