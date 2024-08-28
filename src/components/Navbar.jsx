const Navbar = () => {
  const total = 25000;
  const token = false; 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between">
        <div className="d-flex align-items-center">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#">🍕 Home</a>
              {token ? (
                <>
                  <a className="nav-link" href="#">🔓 Profile</a>
                  <a className="nav-link" href="#">🔒 Logout</a>
                </>
              ) : (
                <>
                  <a className="nav-link" href="#">🔐 Login</a>
                  <a className="nav-link" href="#">🔐 Register</a>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="navbar-nav">
          <a className="nav-link" href="#">🛒 Total: ${total.toLocaleString()}</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
