import React, { useEffect, useState } from "react";
import { getRepositories } from "../../api/repository.service";
import { RepositoryTable } from "./repository-table/repository-table";
import { Repository } from "../../entities/repository";
import { useParams } from "react-router-dom";
import { Navbar } from "./navbar/navbar";
import "./repo_list_page.scss";
import { ErrorDetails, getMessageByStatus } from "../../entities/error";
import { ErrorDisplay } from "./error/error-display";
import { LoadingDisplay } from "./loading/loading-display";

interface RouteParams {
    username: string;
}

export const RepoListPage = () => {
    const { username } = useParams<RouteParams>();
    const [isLoading, setLoading] = useState<boolean>(true);
    const [repos, setRepos] = useState<Repository[]>([]);
    const [error, setError] = useState<ErrorDetails | undefined>();

    useEffect(() => {
        setError(undefined);
        setLoading(true);
        getRepositories(username)
            .then(res => {
                setRepos(res.data.sort(
                    (e1, e2) => 
                    e2.stargazers_count - e1.stargazers_count)
                );
                setLoading(false);
            })
            .catch(err => {
                setError({
                    status: err.response.status, 
                    message: getMessageByStatus(err.response.status)
                });
                setLoading(false);
            });

    }, [username]);

    return (
    <div className="repo-list-root">
        <Navbar/>
        <div className="content">
            { isLoading
            ? <LoadingDisplay/>
            : (error !== undefined) 
                ? <ErrorDisplay error={error}/>
                : (repos.length > 0) 
                    ? <RepositoryTable repositories={repos}/>
                    : <ErrorDisplay error={{status: 404, message: `Użytkownik ${username} nie posiada repozytoriów.`}}/>
            }
        </div>
    </div>);
}