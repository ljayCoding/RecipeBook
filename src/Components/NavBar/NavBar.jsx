import LinkButton from '../LinkButton/LinkButton';
import './navbar.css';

const NavBar = () => {
  return (
    <div className="nav-container">
      <div>
        <h1 className="nav-logo">Logo</h1>
      </div>
      <div>
        <LinkButton url="/" name="home" />
        <LinkButton url="/about" name="about" />
        <LinkButton url="/recipes" name="recipes" />
      </div>
    </div>
  );
};
export default NavBar;
