import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div>
            <div className="">
                Ini Dashboard
            </div>
            <Link to="/">
            <button>
                logout
            </button>
            </Link>
        </div>
    )
}