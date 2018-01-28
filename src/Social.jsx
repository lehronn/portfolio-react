import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
  render() {
    return (
        <div id="social" className="container-fluid social">
            <div className="container">
              <div className="row">
                <div className="social-link col-4 text-light">
                  <a className="text-light social-icon" href="http://www.blog.stomski.pl"><i className="fa fa-book social-icon" aria-hidden="true"></i></a><br/>
                  DevBlog<br/>
                </div>
                <div className="social-link col-4 text-light">
                  <a className="text-light social-icon" href="https://www.facebook.com/mateusz.stomski"><i className="fa fa-facebook social-icon" aria-hidden="true"></i></a><br/>
                  Facebook<br/>
                </div>
                <div className="social-link col-4 text-light">
                  <a className="text-light social-icon" href="https://twitter.com/mateuszstomski"><i className="fa fa-twitter social-icon" aria-hidden="true"></i></a><br/>
                  Twitter
                </div>
                <div className="social-link col-4 text-light">
                  <a className="text-light social-icon" href="http://www.linkedin.com/in/mateusz-stomski-b3337b48"><i className="fa fa-linkedin social-icon" aria-hidden="true"></i></a><br/>
                  LinkedIn
                </div>
                <div className="social-link col-4 text-light">
                  <a className="text-light social-icon" href="https://github.com/lehronn"><i className="fa fa-github social-icon" aria-hidden="true"></i></a><br/>
                  GitHub<br/>
                </div>
                <div className="social-link col-4 text-light">
                  <a className="text-light social-icon" href="https://hashnode.com/@lehronn"><i className="fa fa-hashtag social-icon" aria-hidden="true"></i></a><br/>
                  Hashnode
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Social;
