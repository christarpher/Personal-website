
import Sidebar from './sidebar';
import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

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
        style: "dark",
        bodyStyle: "App-body App-body-dark",
        isDark: true
      });
    }else{
      this.setState({
        style: "light",
        bodyStyle: "App-body App-body-light",
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
      style: "dark",
      isDark: true,
      bodyStyle: "App-body App-body-dark",
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
        style: "light",
        isDark: false,
        bodyStyle: "App-body App-body-light"
      }));
    }else{
      this.setState(state => ({
        style: "dark",
        isDark: true,
        bodyStyle: "App-body App-body-dark"
      }));
    }
  }

  render() {
      return (
        <div>
          <div classname="background">
            <Sidebar parentCallback = {this.changeStyle} isMobile={this.state.isMobile} isDark={this.state.isDark}/>
            
            <body className={this.state.isMobile ? this.state.bodyStyle : (this.state.bodyStyle + " App-body-margin-on")}>
                <section id="about">
                  

                  <div class="about-container">
                    <div class="first-last-name">
                      <div class={this.state.isDark ? "first-name-dark" : "first-name-light"}>Chris</div> 
                      <div class={this.state.isDark ? "last-name-dark" : "last-name-light"}>&nbsp;Jansen</div>
                    </div>
                    <div class={`about-contact ${this.state.isDark ? "about-contact-dark" : "about-contact-light"}`}>
                      Spokane Valley, WA -&nbsp;
                      <a class={this.state.isDark ? "dark-mail" : "light-mail"} href="mailto: chrisjansen92@icloud.com">Chrisjansen92@icloud.com</a>
                    </div>
                    <p class="about-paragraph">
                      A recent computer science graduate exerienced in web development, AWS, and CI/CD processes.
                    </p>
                    <a class={`social-icons ${this.state.isDark ? "social-icons-dark" : "social-icons-light"}`} href="https://github.com/christarpher">
                      <FontAwesomeIcon icon={faGithub} />
                    </a> 
                    <a class={`social-icons ${this.state.isDark ? "social-icons-dark" : "social-icons-light"}`} href="https://www.linkedin.com/in/christopher-jansen/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a class={`social-icons ${this.state.isDark ? "social-icons-dark" : "social-icons-light"}`} href="https://discordapp.com/users/201174269458251776">
                      <FontAwesomeIcon icon={faDiscord} />
                    </a>
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
                      Aliquam venenatis odio vitae pretium suscipit. Cras id massa eu mi malesuada ullamcorper at non tortor. Quisque elit tellus, maximus eget posuere viverra, 
                      dignissim a enim. Maecenas tempor accumsan libero, nec convallis sem tempor vel. Aenean non dui dapibus, pretium elit ultricies, scelerisque quam. Nullam 
                      fringilla ac mi ac viverra. Sed auctor felis ante, vitae eleifend diam placerat eu. Donec eu tincidunt nunc. Maecenas viverra finibus felis non malesuada. 
                      Suspendisse rhoncus nibh massa, in pharetra eros volutpat nec. Duis volutpat nulla elit, vel imperdiet sem faucibus a. Aenean a commodo mi. Sed interdum, 
                      purus eget interdum consequat, leo ipsum commodo enim, non cursus erat erat ac mauris. Quisque facilisis enim at leo faucibus, sed feugiat nisl varius. 
                      Vivamus mollis porta dolor mattis iaculis. Etiam vitae lorem rutrum, eleifend enim vel, pulvinar augue.
                    </p>
                  </div>
                </section>

                <section id="skills">
                  <hr></hr> 
                  <h2 class={this.state.isDark ? "h2-dark" : "h2-light"}>Skills</h2>
                  <div class="skills-container">
                    <p>
                      Cras ante neque, pharetra eu sem commodo, rutrum scelerisque tortor. Duis mauris urna, luctus quis mi accumsan, interdum consequat nulla. 
                      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Praesent augue nulla, vulputate eu interdum facilisis, 
                      ultricies ac nulla. Duis pulvinar faucibus tellus sed feugiat. Donec vel tristique odio. Mauris lobortis iaculis ullamcorper. Sed id massa dui. Praesent turpis quam, 
                      blandit vitae lectus vitae, placerat rutrum enim. Nam egestas leo neque, et congue purus rhoncus vel. Ut magna magna, scelerisque vel felis eget, 
                      ultrices pharetra nisi. Maecenas hendrerit pharetra hendrerit.
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

              

              
            </body>
          </div>
        </div>
      );
    }
  }
export default App;