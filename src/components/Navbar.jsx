import logo from "../assets/JBLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-beteen py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo"/>
    </div>
    
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a 
        href="https://www.linkedin.com/in/james-bautista-611b462ab" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a 
        href="https://github.com/5hE1D0nK" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="GitHub"
      >
        <FaGithub/>
      </a>
    </div>
  </nav>;
}

export default Navbar