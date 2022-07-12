import React, {Component,Fragment} from "react"
import Greeting from "../../components/Home/Greeting";
import Countable from "../../components/Home/Countable";
import Divider from "@mui/material/Divider";
import Main from "../../components/common/Card";
import BasicCard from "../../components/common/Card";
import ResponsiveAppBar from "../../components/common/AppBar";

class HomePage extends Component{
constructor(props) {
    super(props);
}
render() {
    return(
        <Fragment>
            <ResponsiveAppBar/>
            <BasicCard/>
        </Fragment>

    )
}
}

export default HomePage