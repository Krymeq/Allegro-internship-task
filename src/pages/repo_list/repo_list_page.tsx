import React from "react";
import { useParams } from "react-router-dom";
import { MainContent } from "./main/main-content";
import { Navbar } from "./navbar/navbar";

interface RouteParams {
    username: string;
}

export const RepoListPage = () => {
    const { username } = useParams<RouteParams>();

    return (
    <div className="repo-list-root">
        <Navbar/>
        <h1>HELLO {username}</h1>
        <MainContent/>
    </div>);
}