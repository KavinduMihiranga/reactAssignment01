import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import GDSEButton from "../../components/common/Button";
import DataTable from "../../components/common/Table";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state={
            top100Films:[
                { label: 'Male' },
                { label: 'Female' },

            ]
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Typography variant='h4'>Item</Typography>
                <Grid container spacing={0.5}>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Typography variant='body2'>Code</Typography>
                        <TextField id='outline-basic' placeholder='code' label='Code' variant='outlined'
                                   size='small'
                                   style={{width: '100%'}}
                        />

                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Typography variant='body2'>description</Typography>
                        <TextField id='outline-basic' placeholder='description' label='description' variant='outlined'
                                   size='small'
                                   style={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <Typography variant='h7'>Qty</Typography>
                        <TextField id="outlined-basic" placeHolder="qty" label="qty" variant="outlined" size="small"
                                   style={{width: '100%'}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Typography variant='h7'>Price</Typography>
                        <TextField id="outlined-basic" placeHolder="price" label="price" variant="outlined" size="small"
                                   style={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end" >
                        <GDSEButton size="small" variant="contained" label="save"/>
                    </Grid>

                </Grid>

                <DataTable/>
            </Fragment>


        )
    }
}

export default withStyles(styleSheet)(Item)