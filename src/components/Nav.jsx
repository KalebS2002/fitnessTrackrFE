import { Link } from "react-router-dom";
import { useState } from "react";


const Nav = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);

if (isLoggedIn === false){

    return(
        <>
        <nav id="nav">
            <h1 id="title">FitnessTrackr</h1>
            <div id="navSelections">
            <Link to="/" className="navSelection">Home</Link>
            <Link to="/dashboard" className="navSelection">Dashboard</Link>
            <Link to="profile" className="navSelection">My Profile</Link>
            </div>
        </nav>
        </>
    )
}
}
export default Nav;