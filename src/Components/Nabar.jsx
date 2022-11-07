import { Link } from "react-router-dom";
function Nabar()
{
    return(
        <header>
            <nav>
                <ul className="home">
                    <li>
                        <Link to ="/">Home </Link> </li>
                        <li><Link to="/createpost">Create Post</Link></li>
                    <li><Link to ="/about">About</Link> </li>
                    <li><Link to ="/contact">Contact </Link> </li>
                </ul>
            </nav>
        </header>
        



    )

} 
export default Nabar    ; 