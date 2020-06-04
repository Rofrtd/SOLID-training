import Component1Large from "../components/ComponentOne/ComponentOne"
import IComponent from "../components/IComponent"
import { Size } from "../../device/Device"
import ComponentOneSmall from "../components/ComponentOne/ComponentOneSmall"
import ComponentOneMedium from "../components/ComponentOne/ComponentOneMedium"
import ComponentOneLarge from "../components/ComponentOne/ComponentOneLarge"
import ComponentTwoSmall from "../components/ComponentTwo/ComponentTwoSmall"
import ComponentTwoMedium from "../components/ComponentTwo/ComponentTwoMedium"
import ComponentTwoLarge from "../components/ComponentTwo/ComponentTwoLarge "
import ComponentThreeSmall from "../components/ComponentThree/ComponentThreeSmall"
import ComponentThreeMedium from "../components/ComponentThree/ComponentThreeMedium"
import ComponentThreeLarge from "../components/ComponentThree/ComponentThreeLarge"

export type Components = 'ComponentOne' | 'ComponentTwo' | 'ComponentThree'

const ComponentSizes: { [Y in Components]: { [K in Size]: IComponent } } = {
    ComponentOne: {
        small: new ComponentOneSmall(),
        medium: new ComponentOneMedium(),
        large: new ComponentOneLarge(),
    },
    ComponentTwo: {
        small: new ComponentTwoSmall(),
        medium: new ComponentTwoMedium(),
        large: new ComponentTwoLarge(),
    },
    ComponentThree: {
        small: new ComponentThreeSmall(),
        medium: new ComponentThreeMedium(),
        large: new ComponentThreeLarge(),
    },
}

export default class ComponentFactory {
    public getComponentOne(size: Size): IComponent {
        return ComponentSizes.ComponentOne[size]
    }
    public getComponentTwo(size: string): IComponent {
        return ComponentSizes.ComponentTwo[size]
    }
    public getComponentThree(size: string): IComponent {
        return ComponentSizes.ComponentThree[size]
    }

    // Return any component
    public getComponent(component: Components, size: Size): IComponent {
        return ComponentSizes[component][size]
    }
}