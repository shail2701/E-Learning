import {axiosInstance} from "../../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
       <img src="" alt=""/>
        <p>
       E-Learning Platform is the online platform that helps students to start learning new skills so it helps them to improve there skills accordingly latest requirement in industry. 
       <br></br><br></br> Guided By:- Prof.Satyendrasingh Chouhan sir
 <br></br> Mentor(TA):- Mr. Meet Shah    
 <br></br>     Project Made By:- Mihir Popat-(202112073) and Shail Parekh (202112128),
      Group-Id-2, M.Sc(IT)-Batch-2023,<br></br> DA-IICT,Gandhinagar,Gujarat.  
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i>
          <a href="https://www.facebook.com/"
        i className="sidebarIcon fab fa-facebook-square">
      </a>
          </i>
          <i>
          <a href="https://www.twitter.com/"
        i className="sidebarIcon fab fa-twitter-square">
      </a>
          </i>
          <i>
          <a href="https://www.pinterest.com/"
        i className="sidebarIcon fab fa-pinterest-square">
      </a>
          </i>
          <i>
          <a href="https://www.instagram.com/"
        i className="sidebarIcon fab fa-instagram-square">
      </a>
          </i>
        </div>
      </div>
    </div>
  );
}
