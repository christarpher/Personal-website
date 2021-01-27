import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './scroll';
import avatar from './assets/me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


export class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Skills', href: 'skills' },
        { content: 'Projects', href: 'projects' },  
        { content: 'Experience', href: 'experience' },
        { content: 'Education', href: 'education' },
      ],
      isCollapsed: true
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.sendBackData = this.sendBackData.bind(this);
  }

  sendBackData() {
    this.props.parentCallback(this.props.isDark);
  }

  toggleNavbar() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  }

  render() {
    const { tabs, isCollapsed } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-md fixed-top ${this.props.isDark 
          ? "navbar-dark color-nav-dark"
          : "navbar-light color-nav-light"}`}
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-md-none">
            Chris Jansen
          </span>
          <span className="d-none d-md-block">
            <img
              className={`img-profile ${this.props.isDark ? "image-dark-border" : "image-light-border"}`}
              src={avatar}
              alt="Chris Jansen"
            />
          </span>
        </a>
        <button
          className={`navbar-toggler navbar-toggler-right ${isCollapsed ? 'collapsed' : ''}`}
          type="button"
          data-toggle="collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleNavbar}
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}
          id="navbarSupportedContent">
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}

            <li className="nav-item">
              <a className="nav-link" href="https://teslar.chrisjjansen.com">
                Tesla Remote&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </li>
            
            <li className={this.props.isMobile ? "nav-item" : "nav-item-fixed"}>
              <button className="nav-link" onClick={this.sendBackData}>
                {this.props.isDark ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
              </button>
            </li>
          </Scrollspy>
                
        </div>
      </nav>
    );
  }
}

export default Sidebar;
