import IComponent from '../IComponent'
import { Size } from '../../../../device/device'

export default class ComponentTwo implements IComponent {
    private size: Size

    protected constructor(size: Size) {
        this.size = size
    }

    public render() {
        console.log(`ComponentTwo: ${this.size}`)
    }
}

