import React from 'react';

const NavBar = () => {
  return (
    <nav className="navigationWrapper">
      <div className="logoWrapper">
        <span className="stylish">Sorting</span>
        <span className="logo">Visualizer</span>
      </div>
      <ul className="navigation">
        <li className="parent" id="clients">
          <a className="link" href="#">
            <i className="fas fa-minus"></i> Algorithm{' '}
            <i className="fas fa-plus"></i>
          </a>
          <ul className="subnavigation">
            <li>
              <a className="link" href="#">
                Burger King
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Southwest Airlines
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Levi Strauss
              </a>
            </li>
          </ul>
        </li>
        <li className="parent" id="services">
          <a className="link" href="#">
            <i className="fas fa-minus"></i> Services{' '}
            <i className="fas fa-plus"></i>
          </a>
          <ul className="subnavigation">
            <li>
              <a className="link" href="#">
                Print Design
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Web Design
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Mobile App Development
              </a>
            </li>
          </ul>
        </li>
        <li className="parent">
          <a className="link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
