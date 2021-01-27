import { Component } from "react";


class Experience extends Component {
    render() {
        return (
            <section id="experience">
                <hr></hr> 
                <h2 class={this.props.isDark ? "h2-dark" : "h2-light"}>Experience</h2>
                <div class="experience-container">
                    <p>
                        <div class="position-name">DevOps engineering Internship</div>
                        <div class="company-name">Cambia health solutions</div>
                        <div class={`position-time ${this.props.isDark ? "position-time-dark" : "position-time-light"}`}>
                            June - September 2019
                        </div>
                        <div class="experience-text">
                            <ul>
                                <li>Worked with CI/CD pipelines to deploy Docker containers and Lambda services.</li>
                                <li>Designed, created, and managed an automated expense report application that updated 
                                    internal Atlassian Confluence pages that provided costs breakdowns by AWS service used by different 
                                    internal teams in a 30/90/365 day layout.</li>
                                <li>Created automated systems to track down improperly tagged or untagged resources to help abide by best 
                                    tagging practices and minimize untracked and unreported costs.</li>
                                <li>Improve internal tools designed to migrate databases between AWS accounts to reduce downtime and costs.</li>
                                <li>Protect sensitive PII (Personally Identifiable Information) and PHI (Protected Health Information) 
                                    to comply with HIPAA standards.</li>
                            </ul>
                        </div>
                    </p>
                </div>
            </section>
        );
    }
}

export default Experience;