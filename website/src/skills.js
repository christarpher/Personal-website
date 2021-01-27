import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faReact, faHtml5, faSass, faCss3Alt, faNode, faJs } from '@fortawesome/free-brands-svg-icons';
import { faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import { faWindows, faApple, faLinux, faGit, faDocker, faJenkins } from '@fortawesome/free-brands-svg-icons';


class Skills extends Component {
    render() {
        return (
            <section id="skills">
                <hr></hr> 
                <h2 class={this.props.isDark ? "h2-dark" : "h2-light"}>Skills</h2>
                <div class="skills-container">
                    <p>
                    <div class="skills-header">Web Development</div>
                        <div id="skills-icons">
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faReact} />
                            </div> 
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faHtml5} />
                            </div> 
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faCss3Alt} />
                            </div> 
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faSass} />
                            </div> 
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faNode} />
                            </div> 
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faJs} />
                            </div> 
                        </div>
                    <div class="skills-header">Programming and Scripting</div>
                        <div id="skills-icons">
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faPython} />
                            </div> 
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faJava} />
                            </div> 
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faTerminal} />
                            </div> 
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"} style={{fontWeight: 600}}>
                                C
                            </div> 
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"} style={{fontWeight: 600}}>
                                C++
                            </div> 
                        </div>
                    <div class="skills-header"><FontAwesomeIcon icon={faAws} />&nbsp;&nbsp;Cloud Computing</div>
                        <div class="skills-text">
                            <ul id="skills-list">
                                <li>EC2</li>
                                <li>Lambda</li>
                                <li>Route53</li>
                                <li>DynamoDB</li>
                                <li>IAM</li>
                                <li>Secrets Manager</li>
                                <li>Cost Explorer</li>
                                <li>Costs and Usage Reports</li>
                                <li>S3</li>
                                <li>Database Migration Service</li>
                            </ul>
                        </div>
                    <div class="skills-header">Tools and Operating Systems</div>
                        <div id="skills-icons">
                        <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faGit} />
                            </div> 
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faDocker} />
                            </div> 
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faJenkins} />
                            </div> 
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faApple} />
                            </div> 
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faLinux} />
                            </div> 
                            <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                <FontAwesomeIcon icon={faWindows} />
                            </div> 
                        </div>
                        
                    </p>
                </div>
            </section>
        );
    }
}

export default Skills;