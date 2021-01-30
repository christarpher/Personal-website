import { Component } from "react";

import teslar1 from './assets/teslar/teslar1.png';
import teslar2 from './assets/teslar/teslar2.png';
import teslar3 from './assets/teslar/teslar3.png';
import teslar4 from './assets/teslar/teslar4.png';

import shootstuff1 from './assets/game/shootstuff1.png';
import shootstuff2 from './assets/game/shootstuff2.png';
import shootstuff3 from './assets/game/shootstuff3.png';
import shootstuff4 from './assets/game/shootstuff4.png';
import shootstuff5 from './assets/game/shootstuff5.png';
import shootstuff6 from './assets/game/shootstuff6.png';
import shootstuff7 from './assets/game/shootstuff7.png';
import shootstuff8 from './assets/game/shootstuff8.png';

import ImageGallery from 'react-image-gallery';


const images_teslar = [
    {
        original: teslar1,
        bulletClass: "gallery-bullet",
    },
    {
        original: teslar2,
        bulletClass: "gallery-bullet",
    },
    {
        original: teslar3,
        bulletClass: "gallery-bullet",
    },
    {
        original: teslar4,
        bulletClass: "gallery-bullet",
    }
]

const images_game = [
    {
        original: shootstuff1,
        bulletClass: "gallery-bullet",
    },
    {
        original: shootstuff2,
        bulletClass: "gallery-bullet",
    },
    {
        original: shootstuff3,
        bulletClass: "gallery-bullet",
    },
    {
        original: shootstuff4,
        bulletClass: "gallery-bullet",
    },
    {
        original: shootstuff5,
        bulletClass: "gallery-bullet",
    },
    {
        original: shootstuff6,
        bulletClass: "gallery-bullet",
    },
    {
        original: shootstuff7,
        bulletClass: "gallery-bullet",
    },
    {
        original: shootstuff8,
        bulletClass: "gallery-bullet",
    }
]


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
                                <ImageGallery items={images_teslar} showNav={false} showThumbnails={false} showFullscreenButton={false} 
                                useBrowserFullscreen={false} showPlayButton={false} showBullets={true} autoPlay={true} 
                                disableKeyDown={true} slideDuration={200} slideInterval={4000}/>
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
                            <div class="feature-header">
                                Technologies Used
                            </div>
                            <p>
                                React, Redux, Sass, Node.js
                            </p>
                        </div>
                    </div>

                    <div class="project-header">2D Space Shooter</div>
                    <p style={{paddingLeft: "1%"}}>
                        A top-down 2D video game where you control a spaceship and progress various levels with different 
                        enemies and bosses. The game provides a plethora of options to kit out and customize your ship to 
                        fit your playstyle. 
                    </p>
                    <div class="spacing"></div>
                    <div class="row">
                        <div class="column">
                            <h3>Game Features: </h3>
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
                                <ImageGallery items={images_game} showNav={false} showThumbnails={false} showFullscreenButton={false} 
                                useBrowserFullscreen={false} showPlayButton={false} showBullets={true} autoPlay={true} 
                                disableKeyDown={true} slideDuration={200} slideInterval={4000}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;