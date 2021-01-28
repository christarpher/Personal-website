import { Component } from "react";


class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <hr></hr> 
                <h2 class={this.props.isDark ? "h2-dark" : "h2-light"}>Projects</h2>
                <div class="projects-container">
                    <p>
                        This section is under construction.
                    </p>
                </div>
            </section>
        );
    }
}

export default Projects;