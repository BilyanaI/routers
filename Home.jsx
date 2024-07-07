import { Outlet } from "react-router-dom";
import Breadcrumps from "./Breadcrupms";

export default function Home() {

    return (
        <>
            <div>
                Главна страница
            </div>
            --<Breadcrumps /> --
            <Outlet />
        </>
    )
}
