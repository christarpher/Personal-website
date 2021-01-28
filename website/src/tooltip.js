import { Component } from "react";
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';


const LightTooltip = withStyles((theme) => ({
    tooltip: {
        fontSize: "calc(12px + 0.3vw)",
        fontFamily: "muli",
        fontWeight: "800",
        background: "var(--background-light)",
        border: "2px solid var(--text-color-light)",
        color: "var(--text-color-light)"
    },
    arrow: {
        color: "black",
        "&::before": {
            border: "2px solid var(--text-color-light)",
            backgroundColor: "var(--background-light)",
            boxSizing: "border-box"
          }
    }
}))(Tooltip);


const DarkTooltip = withStyles((theme) => ({
    tooltip: {
        fontSize: "calc(12px + 0.3vw)",
        fontFamily: "muli",
        fontWeight: "800",
        background: "var(--nav-background-dark)",
        border: "2px solid var(--text-color-dark)",
        color: "var(--text-color-dark)"
    },
    arrow: {
        color: "black",
        "&::before": {
            border: "2px solid var(--text-color-dark)",
            backgroundColor: "var(--nav-background-dark)",
            boxSizing: "border-box"
          }
    }
}))(Tooltip);


class CustomTooltip extends Component {

    constructor(props){
        super(props);
        this.tooltipSelector = this.tooltipSelector.bind(this);
    }

    offsetProps = {
        popperOptions: {
            modifiers: {
                offset: {
                enabled: true,
                offset: '0, -30rem',
                },
            },
        },
    }

    placement = "bottom";

    tooltipSelector(){
        if(this.props.isDark) {
            return ( 
                <DarkTooltip title={this.props.title} placement={this.placement} PopperProps={this.offsetProps} arrow TransitionComponent={Zoom} enterTouchDelay={0}>
                    <div >
                        {this.props.children}
                    </div>
                </DarkTooltip>
            );
        } else {
            return ( 
                <LightTooltip title={this.props.title} placement={this.placement} PopperProps={this.offsetProps} arrow TransitionComponent={Zoom} enterTouchDelay={0}>
                    <div >
                        {this.props.children}
                    </div>
                </LightTooltip> 
            );
        }

    }
    
    
    


    render() {
        return ( 
            <this.tooltipSelector/>
        );
    }
}

export default CustomTooltip;