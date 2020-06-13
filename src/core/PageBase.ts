import NavigationManager from "./NavigationManager"

export interface PageProps {
    route: string
}

export default abstract class PageBase {
    private props: PageProps

    public constructor(props: PageProps) {
        this.props = props
    }

    public redirect() {
        NavigationManager.redirect(this.props.route)
    }
}
