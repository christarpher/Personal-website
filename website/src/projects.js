import { Component } from "react";


class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <hr></hr> 
                <h2 class={this.props.isDark ? "h2-dark" : "h2-light"}>Projects</h2>
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
        );
    }
}

export default Projects;