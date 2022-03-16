import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer(){
    return(
        <footer>
            <ul className="flex">
                <li><a href="https://www.instagram.com/"><FaInstagram/></a></li>
                <li><a href="https://www.youtube.com/"><FaYoutube/></a></li>
                <li><a href="https://www.facebook.com/"><FaFacebookSquare/></a></li>
            </ul>
        </footer>
    )

}