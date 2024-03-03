import Navbar from "./Navbar";

export default function NavLayout(props: any) {
    const Component = props.component
    return (
        <>
        <Navbar/>
        <Component/>
        </>
    )
}