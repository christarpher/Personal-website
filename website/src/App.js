
import Sidebar from './sidebar';
import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faReact, faHtml5, faSass, faCss3Alt, faNode, faJs } from '@fortawesome/free-brands-svg-icons';
import { faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import { faWindows, faApple, faLinux, faGit, faDocker, faJenkins } from '@fortawesome/free-brands-svg-icons';

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
    }else{
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
    }else{
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
                <section id="about">
                  

                  <div id="about-container">
                    <div id="first-last-name">
                      <div class={this.state.isDark ? "first-name-dark" : "first-name-light"}>Chris</div> 
                      <div class={this.state.isDark ? "last-name-dark" : "last-name-light"}>&nbsp;Jansen</div>
                    </div>
                    <div id="about-contact" class={this.state.isDark ? "about-contact-dark" : "about-contact-light"}>
                      Spokane Valley, WA -&nbsp;
                      <a class={this.state.isDark ? "dark-mail" : "light-mail"} href="mailto: chrisjansen92@icloud.com">Chrisjansen92@icloud.com</a>
                    </div>
                    <p>
                      A recent computer science graduate exerienced in web development, AWS, CI/CD processes, and currently looking for work.
                    </p>
                    <div id="social-icons">
                      <a class={this.state.isDark ? "icons-dark" : "icons-light"} href="https://github.com/christarpher">
                        <FontAwesomeIcon icon={faGithub} />
                      </a> 
                      <a class={this.state.isDark ? "icons-dark" : "icons-light"} href="https://www.linkedin.com/in/christopher-jansen/">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                      <a class={this.state.isDark ? "icons-dark" : "icons-light"} href="https://discordapp.com/users/201174269458251776">
                        <FontAwesomeIcon icon={faDiscord} />
                      </a>
                    </div>
                  </div>
                </section>
                      



                <section id="skills">
                  <hr></hr> 
                  <h2 class={this.state.isDark ? "h2-dark" : "h2-light"}>Skills</h2>
                  <div class="skills-container">
                    <p>
                    <div class="skills-header">Web Development</div>
                      <div id="skills-icons">
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faReact} />
                        </div> 
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faHtml5} />
                        </div> 
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faCss3Alt} />
                        </div> 
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faSass} />
                        </div> 
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faNode} />
                        </div> 
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faJs} />
                        </div> 
                      </div>
                    <div class="skills-header">Programming and Scripting</div>
                      <div id="skills-icons">
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faPython} />
                        </div> 
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faJava} />
                        </div> 
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faTerminal} />
                        </div> 
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"} style={{fontWeight: 600}}>
                          C
                        </div> 
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"} style={{fontWeight: 600}}>
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
                      <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faGit} />
                        </div> 
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faDocker} />
                        </div> 
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faJenkins} />
                        </div> 
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faApple} />
                        </div> 
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faLinux} />
                        </div> 
                        <div class={this.state.isDark ? "icons-dark" : "icons-light"}>
                          <FontAwesomeIcon icon={faWindows} />
                        </div> 
                      </div>
                      
                    </p>
                  </div>
                </section>

                <section id="projects">
                  <hr></hr> 
                  <h2 class={this.state.isDark ? "h2-dark" : "h2-light"}>Projects</h2>
                  <div class="projects-container">
                    <p>
                      Quisque maximus, nulla vitae tincidunt finibus, lorem lorem interdum ex, ut lobortis enim ex id nibh. Fusce posuere facilisis justo et consectetur. 
                      Sed aliquam justo ullamcorper tellus viverra, id facilisis metus congue. Vestibulum vulputate elit diam, et dapibus libero porttitor vitae. 
                      Aliquam quis lorem malesuada nulla tempor vehicula et sit amet quam. Nullam quis venenatis justo. Vestibulum sagittis bibendum luctus. 
                      Sed at erat blandit, sagittis mi sit amet, feugiat eros. Duis neque urna, congue nec nisi quis, pretium tempor ligula. Vestibulum a mollis ligula. 
                      Curabitur scelerisque magna lectus, vel tristique velit congue nec. In volutpat vitae massa eget placerat. Suspendisse euismod ullamcorper lorem at pellentesque. 
                      Ut iaculis elementum elementum. Nullam gravida vulputate tellus eget ornare. Fusce dignissim ipsum quis sem viverra facilisis.
                    </p>
                  </div>
                </section>
                
      
                <section id="experience">
                  <hr></hr> 
                  <h2 class={this.state.isDark ? "h2-dark" : "h2-light"}>Experience</h2>
                  <div class="experience-container">
                    <p>
                      <div class="position-name">DevOps engineering Internship</div>
                      <div class="company-name">Cambia health solutions</div>
                      <div class={`position-time ${this.state.isDark ? "position-time-dark" : "position-time-light"}`}>June - September 2019</div>
                      <div class="experience-text">
                        <ul>
                          <li>Worked with CI/CD pipelines to deploy Docker containers and Lambda services.</li>
                          <li>Designed, created, and managed an automated expense report application that updated internal Atlassian Confluence pages that provided costs breakdowns by AWS service used by different internal teams in a 30/90/365 day layout.</li>
                          <li>Created automated systems to track down improperly tagged or untagged resources to help abide by best tagging practices and minimize untracked and unreported costs.</li>
                          <li>Improve internal tools designed to migrate databases between AWS accounts to reduce downtime and costs.</li>
                          <li>Protect sensitive PII (Personally Identifiable Information) and PHI (Protected Health Information) to comply with HIPAA standards.</li>
                        </ul>
                      </div>
                    </p>
                  </div>
                </section>

                <section id="education">
                  <hr></hr> 
                  <h2 class={this.state.isDark ? "h2-dark" : "h2-light"}>Education</h2>
                  <div class="education-container">
                    <p>
                      <div class="position-name">Bachelors of Science</div>
                      <div class="company-name">Oregon State University</div>
                      <div class={`position-time ${this.state.isDark ? "position-time-dark" : "position-time-light"}`}>Graduated: April 2020</div>
                      <div class="experience-text">
                        Major: Computer Science (Systems Option)<br/>
                        GPA: 3.4 
                      </div>
                    </p>
                  </div>
                </section>

                

              

              
            </body>
          </div>
        </div>
      );
    }
  }
export default App;