
import Sidebar from './sidebar';
import { Component } from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';




class App extends Component{

  componentDidMount() {
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Etiam mattis non odio et tempus. Etiam congue lectus nibh, 
                      sit amet viverra quam tempus eu. Pellentesque sed pretium metus. 
                      Suspendisse potenti. Morbi porta mattis ex. Pellentesque egestas arcu vitae turpis commodo, 
                      in sodales velit feugiat. Orci varius natoque penatibus et magnis dis parturient montes, 
                      nascetur ridiculus mus. Vivamus fringilla nunc vitae velit placerat, sit amet laoreet tellus scelerisque. 
                      Integer et mauris ut velit finibus ornare rutrum non libero. Proin accumsan vel felis euismod pulvinar. 
                      Nulla lacinia bibendum finibus. Donec aliquet aliquam mi, in faucibus odio laoreet vel. Integer dapibus interdum mi sed consequat. 
                      Aliquam tincidunt convallis dolor. Praesent pretium rutrum enim, at semper mi malesuada sit amet.
                    </p>
                  </div>
                </section>
                      
                  
                
      
                <section id="experience">
                  <div class="blank-space"></div>
                  <hr></hr> 
                  <h2 class={this.state.isDark ? "h2-dark" : "h2-light"}>Experience</h2>
                  <p>
                      Aenean venenatis justo purus, nec cursus est mattis elementum. Nulla rutrum interdum blandit. Nunc tortor nulla, mattis at libero non, consequat mollis orci. 
                      Curabitur ullamcorper sem eu odio sollicitudin luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                      Nullam sit amet erat mollis magna accumsan varius. Praesent odio leo, mollis quis feugiat eu, suscipit sit amet purus. Nullam laoreet, tellus et sagittis laoreet, 
                      lacus lacus tincidunt lacus, at porta nunc nisi quis arcu.
                    </p>
                </section>

                <section id="education">
                  <div class="blank-space"></div>
                  <hr></hr> 
                  <h2 class={this.state.isDark ? "h2-dark" : "h2-light"}>Education</h2>
                  <p>
                      Aliquam venenatis odio vitae pretium suscipit. Cras id massa eu mi malesuada ullamcorper at non tortor. Quisque elit tellus, maximus eget posuere viverra, 
                      dignissim a enim. Maecenas tempor accumsan libero, nec convallis sem tempor vel. Aenean non dui dapibus, pretium elit ultricies, scelerisque quam. Nullam 
                      fringilla ac mi ac viverra. Sed auctor felis ante, vitae eleifend diam placerat eu. Donec eu tincidunt nunc. Maecenas viverra finibus felis non malesuada. 
                      Suspendisse rhoncus nibh massa, in pharetra eros volutpat nec. Duis volutpat nulla elit, vel imperdiet sem faucibus a. Aenean a commodo mi. Sed interdum, 
                      purus eget interdum consequat, leo ipsum commodo enim, non cursus erat erat ac mauris. Quisque facilisis enim at leo faucibus, sed feugiat nisl varius. 
                      Vivamus mollis porta dolor mattis iaculis. Etiam vitae lorem rutrum, eleifend enim vel, pulvinar augue.
                    </p>
                </section>

                <section id="skills">
                  <div class="blank-space"></div>
                  <hr></hr> 
                  <h2 class={this.state.isDark ? "h2-dark" : "h2-light"}>Skills</h2>
                  <p>
                    Cras ante neque, pharetra eu sem commodo, rutrum scelerisque tortor. Duis mauris urna, luctus quis mi accumsan, interdum consequat nulla. 
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Praesent augue nulla, vulputate eu interdum facilisis, 
                    ultricies ac nulla. Duis pulvinar faucibus tellus sed feugiat. Donec vel tristique odio. Mauris lobortis iaculis ullamcorper. Sed id massa dui. Praesent turpis quam, 
                    blandit vitae lectus vitae, placerat rutrum enim. Nam egestas leo neque, et congue purus rhoncus vel. Ut magna magna, scelerisque vel felis eget, 
                    ultrices pharetra nisi. Maecenas hendrerit pharetra hendrerit.
                  </p>
                </section>

                <section id="projects">
                  <div class="blank-space"></div>
                  <hr></hr> 
                  <h2 class={this.state.isDark ? "h2-dark" : "h2-light"}>Projects</h2>
                  <p>
                    Quisque maximus, nulla vitae tincidunt finibus, lorem lorem interdum ex, ut lobortis enim ex id nibh. Fusce posuere facilisis justo et consectetur. 
                    Sed aliquam justo ullamcorper tellus viverra, id facilisis metus congue. Vestibulum vulputate elit diam, et dapibus libero porttitor vitae. 
                    Aliquam quis lorem malesuada nulla tempor vehicula et sit amet quam. Nullam quis venenatis justo. Vestibulum sagittis bibendum luctus. 
                    Sed at erat blandit, sagittis mi sit amet, feugiat eros. Duis neque urna, congue nec nisi quis, pretium tempor ligula. Vestibulum a mollis ligula. 
                    Curabitur scelerisque magna lectus, vel tristique velit congue nec. In volutpat vitae massa eget placerat. Suspendisse euismod ullamcorper lorem at pellentesque. 
                    Ut iaculis elementum elementum. Nullam gravida vulputate tellus eget ornare. Fusce dignissim ipsum quis sem viverra facilisis.
                  </p>
                </section>

                <section id="contact">
                  <div class="blank-space"></div>
                  <hr></hr> 
                  <h2 class={this.state.isDark ? "h2-dark" : "h2-light"}>Contact</h2>
                  <p>
                    Cras ante neque, pharetra eu sem commodo, rutrum scelerisque tortor. Duis mauris urna, luctus quis mi accumsan, interdum consequat nulla. 
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Praesent augue nulla, vulputate eu interdum facilisis, 
                    ultricies ac nulla. Duis pulvinar faucibus tellus sed feugiat. Donec vel tristique odio. Mauris lobortis iaculis ullamcorper. Sed id massa dui. Praesent turpis quam, 
                    blandit vitae lectus vitae, placerat rutrum enim. Nam egestas leo neque, et congue purus rhoncus vel. Ut magna magna, scelerisque vel felis eget, 
                    ultrices pharetra nisi. Maecenas hendrerit pharetra hendrerit.
                  </p>
                </section>

              
            </body>
          </div>
        </div>
      );
    }
  }
export default App;