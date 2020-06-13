import ComponentHandler from "./src/core/ComponentHandler"
import ComponentFactory from "./src/factory/ComponentFactory"
import { getSize } from "../device/device"

const size = getSize()

new ComponentHandler().render([
    new ComponentFactory().getComponentOne(size),
    new ComponentFactory().getComponentTwo(size),
    new ComponentFactory().getComponentThree(size),
    // Returns any component
    new ComponentFactory().getComponent('ComponentThree', size),
])
