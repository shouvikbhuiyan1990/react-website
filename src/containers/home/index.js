import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './index.css';

const Home = props => (
  <div className="sun-cloud">
    <div className="sun">
        <svg width="100" height="100">
            <circle cx="50" cy="50" r="50" id="sun" />
        </svg>
    </div>
    <div className="cloud">
        <svg width="300" height="800">
            <circle cx="80" cy="80" r="20" fill="#fff" />
            <circle cx="100" cy="70" r="30" fill="#fff" />
            <circle cx="130" cy="60" r="40" fill="#fff" />
            <circle cx="160" cy="60" r="40" fill="#fff" />
            <circle cx="200" cy="70" r="30" fill="#fff" />
            <circle cx="230" cy="80" r="20" fill="#fff" />

            <rect width="3" height="3" fill="#adccff" x="100">
                <animate attributeName="y" from="90" to="1000"
          dur="1.3s" fill="freeze" repeatCount="6"/> 
            </rect>

            <rect width="3" height="3" fill="#adccff" x="120">
                <animate attributeName="y" from="90" to="1000"
          dur="1s" fill="freeze" repeatCount="6" /> 
            </rect>

            <rect width="3" height="3" fill="#adccff" x="140">
                <animate attributeName="y" from="90" to="1000"
          dur="1.2s" fill="freeze" repeatCount="6" /> 
            </rect>

            <rect width="3" height="3" fill="#adccff" x="160">
                <animate attributeName="y" from="90" to="1000"
          dur="1.15s" fill="freeze" repeatCount="6" /> 
            </rect>

            <rect width="3" height="3" fill="#adccff" x="180">
                <animate attributeName="y" from="90" to="1000"
          dur="1.05s" fill="freeze" repeatCount="6" /> 
            </rect>

            <rect width="3" height="3" fill="#adccff" x="200">
                <animate attributeName="y" from="90" to="1000"
          dur="1.35s" fill="freeze" repeatCount="6" /> 
            </rect>

            <rect width="3" height="3" fill="#adccff" x="145">
                <animate attributeName="y" from="90" to="1000"
          dur=".9s" fill="freeze" repeatCount="6" /> 
            </rect>

            <rect width="3" height="3" fill="#adccff" x="167">
                <animate attributeName="y" from="90" to="1000"
          dur=".97s" fill="freeze" repeatCount="6" /> 
            </rect>
            
            <rect width="3" height="3" fill="#adccff" x="182">
                <animate attributeName="y" from="90" to="1000"
          dur=".97s" fill="freeze" repeatCount="6" /> 
            </rect>
            
            <rect width="3" height="3" fill="#adccff" x="134">
                <animate attributeName="y" from="90" to="1000"
          dur=".97s" fill="freeze" repeatCount="6" /> 
            </rect>
        </svg>
    </div>
    <div className="profile-icons">
      <div className="text">
        <p>Hi ! I am <b>shouvik Bhuiyan</b></p>
        <p>UI / Front end Developer, based out of Bangalore</p>
      </div>
      <div className="icons">
        <a href="https://github.com/shouvikbhuiyan1990" target="_blank"><i class="fa fa-github"></i></a>
        <a href="https://twitter.com/Shouvik446"><i class="fa fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/shouvik-bhuiyan-28253884"><i class="fa fa-linkedin"></i></a>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)