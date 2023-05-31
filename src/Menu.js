import { Outlet, Link } from "react-router-dom";
function Menu(){
    return(
        <div className="w3-top">
            <div className="w3-bar w3-black w3-card">
                <Link to="/" className="w3-bar-item w3-button w3-padding-large">HOME</Link>
                <Link to="/counter" className="w3-bar-item w3-button w3-padding-large w3-hide-small">Simple Count Project</Link>
                <Link to="/project2" className="w3-bar-item w3-button w3-padding-large w3-hide-small">Project 2</Link>
                <Link to="/project3" className="w3-bar-item w3-button w3-padding-large w3-hide-small">Project 3</Link>
                <div className="w3-dropdown-hover w3-hide-small">
                <button className="w3-padding-large w3-button" title="More">MORE <i className="fa fa-caret-down"></i></button>     
                    <div className="w3-dropdown-content w3-bar-block w3-card-4">
                        <Link to="/project4" className="w3-bar-item w3-button">Project 4</Link>
                        <Link to="/project5" className="w3-bar-item w3-button">Project 5</Link>
                        <Link to="/project6"className="w3-bar-item w3-button">Project 6</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;