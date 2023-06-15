import { useNavigate, Link } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section>
            <h1>Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            <Link to='/studentsDash'>Students</Link>
            <br/>
            <Link to='/dashboard'>Admin</Link>
            
        </section>
    )
}

export default Unauthorized