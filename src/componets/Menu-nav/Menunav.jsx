import "./Menu-nav.css"
import {Link} from "react-router-dom";
const Menunav = () =>{
  return(
    <div className="Menu">
      <nav className="Menu-test__nav">
        <ul className="Menu-test__ul" >
          <li className="Menu-test__li"><Link className="Menu-test__a" to="/">Menu</Link></li>
          <li className="Menu-test__li"><Link className="Menu-test__a" to="/login">Login</Link> </li>
          <li className="Menu-test__li"><Link className="Menu-test__a" to="/test">Test</Link></li>
          <li className="Menu-test__li"><Link className="Menu-test__a" to="/addcont">add content</Link></li>
        </ul>
      </nav>
    </div>
  )
}
export default Menunav;