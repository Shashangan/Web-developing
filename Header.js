import React from 'react';
function Header(props) {
    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
            {!props.login&&<span className="h3">Login</span>}
            {props.login&&<span className="h3">Welcome Roshni</span>}
            </div>
        </nav>
    )
}
export default Header;