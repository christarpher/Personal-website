import { Component } from "react";


class Education extends Component {
    render() {
        return (
            <section id="education">
                <hr></hr> 
                <h2 class={this.props.isDark ? "h2-dark" : "h2-light"}>Education</h2>
                <div class="education-container">
                    <p>
                        <div class="position-name">Bachelors of Science</div>
                        <div class="company-name">Oregon State University</div>
                        <div class={`position-time ${this.props.isDark ? "position-time-dark" : "position-time-light"}`}>
                            Graduated: April 2020
                        </div>
                        <div class="experience-text">
                            Major: Computer Science (Systems Option)<br/>
                            GPA: 3.4 
                        </div>
                    </p>
                </div>
            </section>
        );
    }
}

export default Education;