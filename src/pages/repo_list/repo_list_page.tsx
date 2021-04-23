import { useParams } from "react-router-dom";

interface RouteParams {
    username: string;
}

export const RepoListPage = () => {
    const {username} = useParams<RouteParams>();

    return <h1>HELLO {username}</h1>
}