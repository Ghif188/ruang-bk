import { Link,Navigate } from "react-router-dom";

export default function Dashboard() {
    const keluar =() =>{
        localStorage.clear();
        // <Navigate to="/log"/>
    }
    return (
        <div>
            <div className="">
                Ini Dashboard
            </div>
            <Link to="/log">
            <button
            onClick={keluar}>
                logout
            </button>
            </Link>
        </div>
    )
}