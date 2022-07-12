import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import GDSEButton from "../../../components/common/Button";

class GridLayout extends Component {
    constructor(props) {
        super(props);
        this.state={
            top100Films:[
                { label: 'The Shawshank Redemption', year: 1994 },
                { label: 'The Godfather', year: 1972 },
                { label: 'The Godfather: Part II', year: 1974 },
                { label: 'The Dark Knight', year: 2008 },
                { label: '12 Angry Men', year: 1957 },
            ]
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Typography variant='h4'>customer Name</Typography>
                <Grid container spacing={0.5}>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Typography variant='body2'>customer Name</Typography>
                        <TextField id='outline-basic' placeholder='Name' label='Customer Name' variant='outlined'
                                   size='small'
                                   style={{width: '100%'}}
                        />

                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Typography variant='body2'>Gender</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.top100Films}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="fav_Movie"/>}
                            getOptionLabel={
                                (option) => option.label
                            }
                            onChange={(e, value) => {
                                console.log(value.label + " " + value.year);
                            }}
                            size="small"
                            style={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="NIC" label="NIC" variant="outlined" size="small"
                                   style={{width: '100%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="address" label="Outlined" variant="outlined" size="small"
                                   style={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end" >
                        <GDSEButton size="small" variant="contained" label="save"/>
                    </Grid>

                </Grid>
            </Fragment>

        )
    }
}

export default withStyles(styleSheet)(GridLayout)