function Header(props){

    return(
        <>
        <header>
            <div className="background">
                <div className="container">
                    <div className="left-header">
                        <ul>
                            <li id="logo-container"><a href="#"><div className="img-container"><img src={props.logo} alt="logo"/></div>Logo</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                        </ul>
                    </div>
                    <div className="right-header">
                        <ul>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header> 
        </>
    );
}

export default Header;