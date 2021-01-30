import { Component } from "react";
import AwesomeSlider from 'react-awesome-slider';
import teslar1 from './assets/teslar1.png';
import teslar2 from './assets/teslar2.png';
import teslar3 from './assets/teslar3.png';
import teslar4 from './assets/teslar4.png';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <hr></hr> 
                <h2 class={this.props.isDark ? "h2-dark" : "h2-light"}>Projects</h2>
                <div class="projects-container">

                    <div class="project-header">Tesla Remote</div>

                    <div class="row">
                        <div class="column">
                            <div class={`column-image ${this.props.isDark ? "image-border-dark" : "image-border-light"}`}>
                                <AutoplaySlider
                                style={{ "--slider-height-percentage": "178%", "--slider-transition-duration": "200ms", 
                                        "--loader-bar-color": "var(--image-border-dark)" }} 
                                play={true} cancelOnInteraction={false} interval={4000} organicArrows={false} bullets={false}>
                                    <div data-src={teslar1} />
                                    <div data-src={teslar2} />
                                    <div data-src={teslar3} />
                                    <div data-src={teslar4} />
                                </AutoplaySlider>
                            </div>
                        </div>
                        <div class="double-column">
                            <p class="padding-left">
                                The Tesla remote is a responsive web application designed to allow you to log in to your Tesla vehicle
                                and control it from any browser. The remote includes features such as starting and driving your vehicle, 
                                locking / unlocking the doors, opening trunks / sunroofs, control of the stereo, 
                                setting the temperature and heated seats, charging management, and various safety 
                                features such as activating / deactivating the speed limit, valet mode, and sentry mode. The Tesla remote 
                                also provides the current status of the vehicle, such as if it is currently charging or unlocked, 
                                and also provides the raw and more in depth diagnostic data of the vehicle.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <div class="feature-header padding-left-mobile">
                                Technologies Used
                            </div>
                            <p class="padding-left-mobile">
                                React, Redux, Sass, Node.js
                            </p>
                        </div>
                    </div>

                    <div class="project-header">2D Space Shooter</div>
                    <p>
                        A top-down 2D video game where you control a spaceship and progress various levels with different 
                        enemies and bosses. 
                    </p>

                    <div class="row">
                        <div class="column">
                            <h3 class="padding-left-mobile">Game Features: </h3>
                            <ul>
                                <li>Saving / Loading system</li>
                                <li>Unlockable abilities</li>
                                <li>Ship equipment upgrades</li>
                                <li>Talent trees</li>
                                <li>Achievement system</li>
                                <li>Hardcore mode</li>
                                <li>Multiple weapon loadouts</li>
                            </ul>
                        </div>
                        
                        <div class="double-column">
                            <div class={`column-image-double ${this.props.isDark ? "image-border-dark" : "image-border-light"}`}>
                                <AutoplaySlider
                                style={{ "--slider-height-percentage": "100%", "--slider-transition-duration": "200ms", 
                                        "--loader-bar-color": "var(--image-border-dark)" }} 
                                play={true} cancelOnInteraction={false} interval={4000} organicArrows={false} bullets={false}>
                                    <div data-src={teslar1} />
                                    <div data-src={teslar2} />
                                    <div data-src={teslar3} />
                                    <div data-src={teslar4} />
                                </AutoplaySlider>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;