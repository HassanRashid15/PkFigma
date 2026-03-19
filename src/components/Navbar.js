import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">BrandName</div>
//       <ul className="navbar-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//       <div className="navbar-toggle">
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>
//     </nav>
//   );
// };

const Navbar = () => {
  return (
    <nav className="sticky-navbar">
      <div className="sn-pricing-info">
        <div className="sn-price-row">
          <span className="sn-old-price">Rs5,000</span>
          <span className="sn-new-price">Rs4,000</span>
        </div>
        <div className="sn-subtext">20% Off - Limited Time</div>
      </div>
      <button className="sn-cart-btn">Add to Cart</button>
    </nav>
  );
};

export default Navbar;
