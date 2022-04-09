import {UserType} from "../type/user";
import instance from "./instance";

export const signup = (user: UserType | undefined) => {
    const url = `/signup`;
    return instance.post(url, user);
}
export const signin = (user: UserType | undefined) => {
    const url = `/signin`;
    return instance.post(url, user);
}