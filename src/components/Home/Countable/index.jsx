import React,{Component} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GDSEButton from "../../common/Button";

class Countable  extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    incrementCount(){
        console.log("increment function calling")
        this.setState({
            count:this.state.count+1
        })
    }

    decrement(){
        this.setState({
            count:this.state.count-1
        })
    }
    reset(){
        this.setState({
            count:this.state.count=0
        })
    }
    render() {
        return(
        <div>
            <Typography variant="h4" gutterBottom component="div">
                Count:{this.state.count}
            </Typography>
            {/*<Button variant="outlined" color="success"*/}
            {/*onClick={()=>{*/}
            {/*    console.log("clicked")*/}
            {/*    this.incrementCount()*/}
            {/*}}>*/}
            {/*  Increase!*/}
            {/*</Button>*/}
            {/*<Button variant="outlined" color="primary"*/}
            {/*    onClick={()=>{*/}
            {/*        console.log("decrement")*/}
            {/*        this.decrement()*/}
            {/*}}*/}
            {/*style={{marginLeft:'15px'}}*/}
            {/*>*/}
            {/*Decrease*/}
            {/*</Button>*/}
            {/*<Button variant="outlined" color="secondary"*/}
            {/*    onClick={()=>{*/}
            {/*        console.log("Reset")*/}
            {/*        this.reset()*/}
            {/*}}*/}
            {/*        style={{marginLeft:'15px'}}*/}
            {/*>*/}
            {/*Reset*/}
            {/*</Button>*/}

            <GDSEButton
                label="Increase!"
                variant="contained"
                onClick={() => {
                    console.log('Increase button clicked!')
                    this.incrementCount()

                }}
            />
            <GDSEButton
                label="Decrease!"
                variant="outlined"
                onClick={() => {
                    console.log('Decrease button clicked!')
                    this.decrement()

                }}
                style={{marginLeft: '15px'}}
            />
            <GDSEButton
                label="Reset!"
                variant="outlined"
                color="error"
                // disabled={true}
                onClick={() => {
                    console.log('Reset button clicked!')
                    this.reset()

                }}
                style={{marginLeft: '15px'}}
            />
        </div>
        )
    }
    }
    export default Countable