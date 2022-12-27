import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import Toolbar from "./toolbar";

function Layout(props) {
    return (
        <>
            <Toolbar />
            <main>{props.children}</main>
        </>
    );
};

export default Layout;