import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faReact, faHtml5, faSass, faCss3Alt, faNode, faJs } from '@fortawesome/free-brands-svg-icons';
import { faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import { faWindows, faApple, faLinux, faGit, faDocker, faJenkins } from '@fortawesome/free-brands-svg-icons';
import CustomTooltip from './tooltip';

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
                            <CustomTooltip title="React" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faReact} />
                                </div>
                            </CustomTooltip>
                            <CustomTooltip title="HTML" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faHtml5} />
                                </div>
                            </CustomTooltip> 
                            <CustomTooltip title="CSS" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faCss3Alt} />
                                </div>
                            </CustomTooltip>
                            <CustomTooltip title="Sass" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faSass} />
                                </div>
                            </CustomTooltip>
                            <CustomTooltip title="Node.js" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faNode} />
                                </div>
                            </CustomTooltip>
                            <CustomTooltip title="JavaScript" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faJs} />
                                </div>
                            </CustomTooltip>
                        </div>
                    <div class="skills-header">Programming and Scripting</div>
                        <div id="skills-icons">
                            <CustomTooltip title="Python" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faPython} />
                                </div> 
                            </CustomTooltip>
                            <CustomTooltip title="Java" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faJava} />
                                </div> 
                            </CustomTooltip>
                            <CustomTooltip title="Shell Scripting" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faTerminal} />
                                </div> 
                            </CustomTooltip>
                            <CustomTooltip title="C (Language)" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"} style={{fontWeight: 600}}>
                                    C
                                </div>
                            </CustomTooltip>
                            <CustomTooltip title="C++ (Language)" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"} style={{fontWeight: 600}}>
                                    C++
                                </div>
                            </CustomTooltip>
                        </div>
                        <div class="skills-header">
                            <FontAwesomeIcon icon={faAws} />&nbsp;&nbsp;Cloud Computing
                        </div>
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
                            <CustomTooltip title="Git (Version Control)" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faGit} />
                                </div> 
                            </CustomTooltip>
                            <CustomTooltip title="Docker" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faDocker} />
                                </div> 
                            </CustomTooltip>
                            <CustomTooltip title="Jenkins (CI/CD)" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faJenkins} />
                                </div> 
                            </CustomTooltip>
                            <CustomTooltip title="macOS" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faApple} />
                                </div> 
                            </CustomTooltip>
                            <CustomTooltip title="Linux" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faLinux} />
                                </div> 
                            </CustomTooltip>
                            <CustomTooltip title="Windows" isDark={this.props.isDark}>
                                <div class={this.props.isDark ? "icons-dark" : "icons-light"}>
                                    <FontAwesomeIcon icon={faWindows} />
                                </div> 
                            </CustomTooltip>
                            
                        </div>
                        
                    </p>
                </div>
            </section>
        );
    }
}

export default Skills;