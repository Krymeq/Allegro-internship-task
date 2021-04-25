import axios from "axios";
import { Repository } from "../entities/repository";

const getRepositoryRootURL = `https://api.github.com/users`

export const getRepositories = (username: string) => {
    return axios.get<Repository[]>(`${getRepositoryRootURL}/${username}/repos`,
        {
            params: {
                per_page: 100
            }
        });
}