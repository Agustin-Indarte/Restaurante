import './Btnmenu.css'
import { Link } from "react-router-dom"
function BtnMenu() {
  return (
    <div>
        <Link to="/menu">
            <button className="CustomBtnMenu btn btn-lg fw-bold">
                Nuestro menú
            </button>
        </Link>
    </div>
  )
}

export default BtnMenu