import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

class About extends Component {
    render() {
        return (
            <section id="about">
                <div id="about-container">
                    <div id="first-last-name">
                        <div class={this.props.isDark ? "first-name-dark" : "first-name-light"}>Chris</div> 
                        <div class={this.props.isDark ? "last-name-dark" : "last-name-light"}>&nbsp;Jansen</div>
                    </div>
                    <div id="about-contact" class={this.props.isDark ? "about-contact-dark" : "about-contact-light"}>
                        Spokane Valley, WA -&nbsp;
                        <a class={this.props.isDark ? "dark-mail" : "light-mail"} href="mailto: chrisjansen92@icloud.com">Chrisjansen92@icloud.com</a>
                    </div>
                    <p>
                        A recent computer science graduate exerienced in web development, AWS, CI/CD processes, and currently looking for work.
                    </p>
                    <div id="social-icons">
                        <a class={this.props.isDark ? "icons-dark" : "icons-light"} href="https://github.com/christarpher">
                            <FontAwesomeIcon icon={faGithub} />
                        </a> 
                        <a class={this.props.isDark ? "icons-dark" : "icons-light"} href="https://www.linkedin.com/in/christopher-jansen/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a class={this.props.isDark ? "icons-dark" : "icons-light"} href="https://discordapp.com/users/201174269458251776">
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;