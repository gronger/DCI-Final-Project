import { useHistory } from 'react-router-dom';

export default function Logout() {


    const history = useHistory();

    function logout() {
        localStorage.clear();
        history.push("/")
        window.location.reload();  
    }

    return (
        <button onClick={logout}>Logout</button>
    )
}

//instead of reload can also useContext

