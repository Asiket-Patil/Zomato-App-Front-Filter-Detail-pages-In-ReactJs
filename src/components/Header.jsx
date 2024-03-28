import React from 'react';

const Header = () => {
  return (
    <header className="d-flex justify-content-end py-3 px-3">
      <button className="btn text-white login">Login</button>
      <button className="btn btn-outline-light create">Create An Account</button>
    </header>
  );
};

export default Header;
