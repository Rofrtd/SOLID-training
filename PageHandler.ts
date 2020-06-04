import IComponent from "./components/IComponent"

export default class PageHandler {
    render(component: IComponent[]): void {
        component.forEach(el => el.render())
    }
}