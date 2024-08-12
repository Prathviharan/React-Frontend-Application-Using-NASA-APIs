import { Link } from "react-router-dom";
import Profileinfo from "../components/Profileinfo";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate;

    const onLogout = () => {
      navigate("/login");
    };

  return (
    <header>
      <h1>NASA API APPLICATION</h1>
      <nav>
        <ul>
          <li>
            <Link to="/rover">Rover Gallery</Link>
          </li>
          <li>
            <Link to="/astro_img">Astronomy Picture of the Day</Link>
          </li>
          <li>
            <Link to="/Register">SignUp</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <input type="text" placeholder="Type to search.."></input>
          
          <Profileinfo onLogout={onLogout}/>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
