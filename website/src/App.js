
import Sidebar from './sidebar';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Experience from './experience';
import Education from './education';
import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';




class App extends Component{

    componentDidMount() {
        document.title="Chris Jansen"
        this.setState({
            isMobile: this.getWidth() < 768
        })
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.setState({
                bodyStyle: "App-body-dark",
                isDark: true
            });
        } else {
            this.setState({
                bodyStyle: "App-body-light",
                isDark: false
            });
        }
        window.addEventListener('resize', () => {
                this.setState({
                    isMobile: this.getWidth() < 768
                });
        }, false);
    }

    constructor(props){
        super(props);
        this.state = {
            isMobile: this.getWidth() < 768,
            isDark: true,
            bodyStyle: "App-body-dark",
        }
        this.changeStyle = this.changeStyle.bind(this);
        this.getWidth = this.getWidth.bind(this);
    }

    getWidth(){
        if(window.innerWidth && document.documentElement.clientWidth){
            return(Math.min(window.innerWidth, document.documentElement.clientWidth))
        }else if(window.innerWidth < document.documentElement.clientWidth){
            return(window.innerWidth || 
                document.documentElement.clientWidth || 
                document.getElementsByTagName('body')[0].clientWidth);
        }
    }

    changeStyle(isDarkChild){
        if(isDarkChild){
            this.setState(state => ({
                isDark: false,
                bodyStyle: "App-body-light"
            }));
        } else {
            this.setState(state => ({
                isDark: true,
                bodyStyle: "App-body-dark"
            }));
        }
    }

    render() {
            return (
                <div>
                    <div classname="background">
                        <Sidebar parentCallback = {this.changeStyle} isMobile={this.state.isMobile} isDark={this.state.isDark}/>
                        
                        <body id="App-body" className={this.state.isMobile ? this.state.bodyStyle : (this.state.bodyStyle + " App-body-margin-on")}>
                            <About isDark={this.state.isDark}/>
                            <Skills isDark={this.state.isDark}/>
                            <Projects isDark={this.state.isDark}/>
                            <Experience isDark={this.state.isDark}/>
                            <Education isDark={this.state.isDark}/>
                        </body>
                    </div>
                </div>
            );
        }
    }
export default App;