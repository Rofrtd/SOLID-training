import IComponent from "../components/IComponent"

export default class ComponentHandler {
    render(component: IComponent[]): void {
        component.forEach(el => el.render())
    }
}