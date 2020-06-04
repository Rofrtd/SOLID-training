import IComponent from '../IComponent'
import { Size } from '../../../device/device'

export default class ComponentOne implements IComponent {
    private size: Size

    protected constructor(size: Size) {
        this.size = size
    }

    public render() {
        console.log(`ComponentOne: ${this.size}`)
    }
}

