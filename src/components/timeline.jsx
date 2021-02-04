import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Holberton School<span>  <i>2021-present</i> </span></h2>
                        <p>I am currently finishing my studies at the Holberton School software academy and <b>looking for a job as a full-stack developer</b> and of course keep learning!</p>
                        <h5><b>Topics are seen in the academy : <a href="https://www.holbertonschool.com/co/en/pathway_foundations" target="_blank" rel="noopener noreferrer">here</a></b></h5>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>freeCodeCamp <span>  <i>February 2021</i></span></h2>
                        <p>In this great learning platform, I managed to complete the entire <b>JavaScript path</b>, this course had a complete duration of 300 hours of work</p>
                        <ul>
                          <li>You can see my certificate<a href="https://www.freecodecamp.org/certification/daniela2001/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer"> here</a></li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>DataCamp Projects <span>  <i>2020</i></span></h2>
                        <p>In this platform of continuous learning, I managed to do several courses on <b>data science</b> and <b>python</b> such as:</p>
                        <ul>
                          <li><a href="https://www.datacamp.com/statement-of-accomplishment/course/0d2c22c3c47d0017eeffbbe9f0d7eec3af4077a4" target="_blank" rel="noopener noreferrer">Introduction to Data Visualization with Seaborn</a></li>
                          <li><a href="https://www.datacamp.com/statement-of-accomplishment/course/8c67e66b649adc364fdee5abc932bf0bcdc883ab" target="_blank" rel="noopener noreferrer">Introduction to Data Visualization with Matplotlib</a></li>
                          <li><a href="https://www.datacamp.com/statement-of-accomplishment/course/4bbc490d81a3c935936731c75e7cba152c0ce9d9" target="_blank" rel="noopener noreferrer">Statistical Thinking in Python</a></li>
                          <li><a href="https://www.datacamp.com/statement-of-accomplishment/course/3a8ba5d941594cbadefde2d76d48caa44e9d5740" target="_blank" rel="noopener noreferrer">Introduction to SQL</a></li>
                          <li><a href="https://www.datacamp.com/statement-of-accomplishment/course/54e6dca4d238fd55d29539d2ae48762ec50ea291" target="_blank" rel="noopener noreferrer">Data Manipulation with pandas</a></li>
                          <li><a href="https://www.datacamp.com/statement-of-accomplishment/course/968040165f4ba01ca73f6af28a7eb22d66251855" target="_blank" rel="noopener noreferrer">Merging DataFrames with pandas</a></li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
