import { Outlet } from "react-router-dom";


export default function Employee() {

    return (
        <>
            <div>
            Съдържание на страница 'Служители'
            </div>
            <Outlet/>
        </>
    )
}
