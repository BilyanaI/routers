import { Link } from "react-router-dom";

export default function  Breadcrumps () {

    return (
        <>
        <Link to={"home"}>Клонова мрежа</Link>/
        <Link to={"branches"}>Клонове</Link>/
        <Link to={"оffices"}>Офиси</Link>/
        <Link to={"employee"}>Служители</Link>
        </>
    )
}