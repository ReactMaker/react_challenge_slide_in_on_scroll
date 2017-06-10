import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <div className="section sec1">
          <div>
            <ScrollAnimation animateIn="slideInUp"><h1>Hello</h1></ScrollAnimation>
            <ScrollAnimation delay={1000} animateIn="fadeIn"><p>這是英文的你好</p></ScrollAnimation>
          </div>
        </div>
        <div className="section sec2">
          <div>
            <ScrollAnimation animateIn="zoomInDown"><h1>Bonjour</h1></ScrollAnimation>
            <ScrollAnimation delay={1000} animateIn="fadeIn"><p>這是法文的你好</p></ScrollAnimation>
          </div>
        </div>
        <div className="section sec3">
          <div>
            <ScrollAnimation animateIn="rotateInUpLeft"><h1>こんにちは</h1></ScrollAnimation>
            <ScrollAnimation delay={1000} animateIn="fadeIn"><p>這是日文的你好</p></ScrollAnimation>
          </div>
        </div>
        <div className="section sec4">
          <div>
            <ScrollAnimation animateIn="flipInY"><h1>안녕</h1></ScrollAnimation>
            <ScrollAnimation delay={1000} animateIn="fadeIn"><p>這是韓文的你好</p></ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}
