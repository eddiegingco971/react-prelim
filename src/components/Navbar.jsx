const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg bg-primary text-white">
        <div className="container">
            <a className="navbar-brand" href="/">Prelim Project React</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-light" type="submit">Search</button>
                </form>

                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/visitor"
                    style={{
                        color:"black",
                        backgroundColor:"white",
                        borderRadius:"8px",
                    }}>
                    Visitor</a>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>
    );
}
 
export default Navbar;