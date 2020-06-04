import PageHandler from "./PageHandler"
import ComponentFactory from "./factory/ComponentFactory"
import { getSize } from "../device/device"

const size = getSize()

new PageHandler().render([
    new ComponentFactory().getComponentOne(size),
    new ComponentFactory().getComponentTwo(size),
    new ComponentFactory().getComponentThree(size),
    // Returns any component
    new ComponentFactory().getComponent('ComponentThree', size),
])
