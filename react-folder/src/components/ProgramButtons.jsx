import '../css/ProgramButton.css'
import { Link } from 'react-router-dom'

function ProgramButton({ name }) {
    return (
        <Link to={`/${name}`}>
         <button className="button-30">{name}</button> 
        </Link>
    )
}

export default ProgramButton