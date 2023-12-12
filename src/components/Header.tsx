const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        Portfolio
      </a>
      <i className="bx bx-menu" id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Services</a>
        <a href="#featured">Latest</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
