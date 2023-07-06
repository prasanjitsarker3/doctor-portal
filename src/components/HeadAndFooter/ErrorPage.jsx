import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div>
                <h1 className="text-center text-2xl ">Something Went Wrong</h1>
                <h1 className="text-center text-red-700">{error.statusText || error.message}</h1>
                <img src="https://img.freepik.com/premium-vector/hand-drawing-404-error-page-vector-illustration-doodle-character-style-landing-web-page_73637-718.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=sph" alt="" />
                <Link to="/">
                    <button className="btn btn-primary">Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;