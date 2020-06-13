import IComponent from '../IComponent'
import { Size } from '../../../../device/device'
import ComponentBase, { ComponentProps } from '../../core/ComponentBase'

export interface ComponentOneProps extends ComponentProps {
    size: Size
}

export default class ComponentOne extends ComponentBase<ComponentOneProps> implements IComponent {
    protected constructor(props: ComponentOneProps) {
        super(props)
    }

    public render() {
        console.log(`ComponentOne: ${this.props.size}`)
    }
}

