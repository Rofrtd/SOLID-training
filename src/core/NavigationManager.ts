import { baseURL } from "../../config"

export default class NavigationManager {
    public static redirect(route: string) {
        console.log("new route: ", `${baseURL}${route}`);
    }
}