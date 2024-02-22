import { Navigate, useSearchParams } from "react-router-dom";
import Config from "../config";

const POST_AUTH_URL = "/questions/"

export default function Auth() {
    const [searchParams] = useSearchParams();

    let jwt = localStorage.getItem("jwt");

    // jwt found in local storage
    if (jwt) {
        window.location.href = POST_AUTH_URL;
        return <Navigate to={POST_AUTH_URL} />;
    }

    jwt = searchParams.get("token");

    // jwt found in new outcome
    if (jwt) {
        localStorage.setItem("jwt", jwt);
        return <Navigate to={POST_AUTH_URL} />;
    } else {
        console.log("Redirecting to adonix login...");
        window.location.href = Config.API_BASE_URL + "/auth/login/github/?device=puzzle";
        return null;
    }
}