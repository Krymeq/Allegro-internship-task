import axios from "axios";
import { User } from "../entities/user";

const searchForUsersURL = `https://api.github.com/search/users`;

export const searchForUsers = async (loginPart: string) => {
    const result = await axios.get<{items: User[]}>(searchForUsersURL, {params: {q: loginPart}});
    return result.data.items;
}