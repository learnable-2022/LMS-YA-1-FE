import { Link } from "react-router-dom"

const LinkPage = () => {
    return (
        <section>
            <h1>Links</h1>
            <br />
            <br />
            <br />
            <h2>Private</h2>
            <Link to="/studentsDash">Students Page</Link>
            <br />
            <Link to="/dashboard">Admin Page</Link>
        </section>
    )
}

export default LinkPage