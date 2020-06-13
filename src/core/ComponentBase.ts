export interface ComponentProps {
    onClick?: { (): any }
}

export default class ComponentBase<T extends ComponentProps> {
    protected props: T

    protected constructor(props: T) {
        this.props = props
    }
}