import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <main>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section class="hero is-fullheight is-default is-bold">
      <div class="hero-body">
          <div class="container">
              <div class="columns is-vcentered">
                  <div class="column is-5 is-offset-1 landing-caption">
                      <h1 class="title is-1 is-bold is-spaced">
                         {mainpitch.title}
                      </h1>
                      <h2 class="subtitle is-5 is-muted">{mainpitch.description}</h2>
                      <div class="button-wrap">
                          <a class="button cta is-rounded primary-btn raised">
                              Get Started
                          </a>
                          <a class="button cta is-rounded">
                              Discover
                          </a>
                      </div>
                  </div>
                  <div class="column is-5">
                      <figure class="image is-4by3">
                          <GatsbyImage src="/img/illustrations/worker.svg" alt="Description"></GatsbyImage>
                      </figure>
                  </div>
              </div>

              <Features gridItems={intro.blurbs} />
          </div>
      </div>

      <div class="hero-foot mb-20">
          <div class="container">
              <div class="tabs is-centered">
                  <ul>
                      <li><a><GatsbyImage class="partner-logo" src="/img/logo/clients/systek.svg"></GatsbyImage></a></li>
                      <li><a><GatsbyImage class="partner-logo" src="/img/logo/clients/tribe.svg"></GatsbyImage></a></li>
                      <li><a><GatsbyImage class="partner-logo" src="/img/logo/clients/kromo.svg"></GatsbyImage></a></li>
                      <li><a><GatsbyImage class="partner-logo" src="/img/logo/clients/infinite.svg"></GatsbyImage></a></li>
                      <li><a><GatsbyImage class="partner-logo" src="/img/logo/clients/gutwork.svg"></GatsbyImage></a></li>
                  </ul>
              </div>
          </div>
      </div>
  </section>

  <section class="section section-feature-grey is-medium">
      <div class="container">
          <div class="title-wrapper has-text-centered">
              <h2 class="title is-2">Great Power Comes </h2>
              <h3 class="subtitle is-5 is-muted">With great Responsability</h3>
              <div class="divider is-centered"></div>
          </div>

          <div class="content-wrapper">
              <div class="columns">
                  <div class="column is-one-third">
                      <div class="feature-card is-bordered has-text-centered is-feature-reveal">
                          <div class="card-title">
                              <h4>App builder</h4>
                          </div>
                          <div class="card-icon">
                              <GatsbyImage src="/img/icons/web.svg"></GatsbyImage>
                          </div>
                          <div class="card-text">
                              <p>This is some cool explanatory text that is on two rows</p>
                          </div>
                          <div class="card-action">
                              <a href="#" class="button btn-align-md primary-btn raised">Free Trial</a>
                          </div>
                      </div>
                  </div>
                  <div class="column">
                      <div class="feature-card is-bordered has-text-centered is-feature-reveal">
                          <div class="card-title">
                              <h4>Cloud integration</h4>
                          </div>
                          <div class="card-icon">
                              <GatsbyImage src="/img/icons/rocket.svg"></GatsbyImage>
                          </div>
                          <div class="card-text">
                              <p>This is some explanatory text that is on two rows</p>
                          </div>
                          <div class="card-action">
                              <a href="#" class="button btn-align-md primary-btn raised">Get Started</a>
                          </div>
                      </div>
                  </div>
                  <div class="column">
                      <div class="feature-card is-bordered has-text-centered is-feature-reveal">
                          <div class="card-title">
                              <h4>Addons & Plugins</h4>
                          </div>
                          <div class="card-icon">
                              <GatsbyImage src="/img/icons/light-bulb.svg"></GatsbyImage>
                          </div>
                          <div class="card-text">
                              <p>This is some explanatory text that is on two rows</p>
                          </div>
                          <div class="card-action">
                              <a href="#" class="button btn-align-md primary-btn raised">Get Started</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section class="section is-medium">
      <div class="container">
          <div class="title-wrapper has-text-centered">
              <h2 class="title is-2">Awesome Features</h2>
              <h3 class="subtitle is-5 is-muted">To make you super happy</h3>
              <div class="divider is-centered"></div>
          </div>

          <div class="columns is-vcentered side-feature mt-60">
              <div class="column is-4 is-offset-2">
                  <h3 class="title is-3 mb-10 is-title-reveal">Connect with people</h3>
                  <p class="subtitle is-5 is-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum audissem Antiochum, Brute, ut solebam, cum M. Quae diligentissime contra Aristonem dicuntur a Chryippo.</p>
              </div>
              <div class="column is-5">
                  <GatsbyImage src="/img/illustrations/features/feature-1.png" alt=""></GatsbyImage>
              </div>
          </div>

          <div class="columns is-vcentered side-feature mt-60">
              <div class="column is-5 is-offset-1">
                  <GatsbyImage src="/img/illustrations/features/feature-2.png" alt=""></GatsbyImage>
              </div>
              <div class="column is-4 is-offset-1">
                  <h3 class="title is-3 mb-10 is-title-reveal">Collaborate easily</h3>
                  <p class="subtitle is-5 is-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum audissem Antiochum, Brute, ut solebam, cum M. Quae diligentissime contra Aristonem dicuntur a Chryippo.</p>
              </div>
          </div>
      </div>
  </section>

  <section class="section section-feature-grey is-medium">
      <div class="container">

          <div class="columns is-vcentered app-side">
              <div class="column is-5 is-offset-1">
                  <h3 class="title is-3 is-spaced is-title-reveal">An intuitive app</h3>
                  <p class="subtitle is-5 is-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum audissem Antiochum, Brute, ut solebam, cum M. Quae diligentissime contra Aristonem dicuntur a Chryippo.</p>
              </div>
              <div class="column is-10">
                  <div class="has-text-centered">
                      <GatsbyImage class="pushed-image" src="/img/illustrations/mockups/app-mockup.png"></GatsbyImage>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section class="section is-medium">
      <div class="container">
          <div class="title-wrapper has-text-centered">
              <h2 class="title is-2">Wait, there's more</h2>
              <h3 class="subtitle is-5 is-muted">To make you super happy</h3>
              <div class="divider is-centered"></div>
          </div>

          <div class="content-wrapper">
              <div class="columns is-multiline icon-list">
                  <div class="column is-3">
                      <div class="feature-icon has-text-centered">
                          <div class="icon-wrap is-icon-reveal">
                              <ion-icon name="logo-github" size="large"></ion-icon>
                          </div>
                          <h4>Github</h4>
                          <p>Some feature text</p>
                      </div>
                  </div>
                  <div class="column is-3">
                      <div class="feature-icon has-text-centered">
                          <div class="icon-wrap is-icon-reveal">
                              <ion-icon name="logo-bitbucket" size="large"></ion-icon>
                          </div>
                          <h4>Bitbucket</h4>
                          <p>Some feature text</p>
                      </div>
                  </div>
                  <div class="column is-3">
                      <div class="feature-icon has-text-centered">
                          <div class="icon-wrap is-icon-reveal">
                              <ion-icon name="logo-slack" size="large"></ion-icon>
                          </div>
                          <h4>Slack</h4>
                          <p>Some feature text</p>
                      </div>
                  </div>
                  <div class="column is-3">
                      <div class="feature-icon has-text-centered">
                          <div class="icon-wrap is-icon-reveal">
                              <ion-icon name="logo-npm" size="large"></ion-icon>
                          </div>
                          <h4>Npm</h4>
                          <p>Some feature text</p>
                      </div>
                  </div>
                  <div class="column is-3">
                      <div class="feature-icon has-text-centered">
                          <div class="icon-wrap is-icon-reveal">
                              <ion-icon name="logo-javascript" size="large"></ion-icon>
                          </div>
                          <h4>Javascript</h4>
                          <p>Some feature text</p>
                      </div>
                  </div>
                  <div class="column is-3">
                      <div class="feature-icon has-text-centered">
                          <div class="icon-wrap is-icon-reveal">
                              <ion-icon name="logo-nodejs" size="large"></ion-icon>
                          </div>
                          <h4>Nodejs</h4>
                          <p>Some feature text</p>
                      </div>
                  </div>
                  <div class="column is-3">
                      <div class="feature-icon has-text-centered">
                          <div class="icon-wrap is-icon-reveal">
                              <ion-icon name="logo-angular" size="large"></ion-icon>
                          </div>
                          <h4>Angular</h4>
                          <p>Some feature text</p>
                      </div>
                  </div>
                  <div class="column is-3">
                      <div class="feature-icon has-text-centered">
                          <div class="icon-wrap is-icon-reveal">
                              <ion-icon name="logo-google" size="large"></ion-icon>
                          </div>
                          <h4>Google</h4>
                          <p>Some feature text</p>
                      </div>
                  </div>
                  <div class="column is-3">
                      <div class="feature-icon has-text-centered">
                          <div class="icon-wrap is-icon-reveal">
                              <ion-icon name="logo-python" size="large"></ion-icon>
                          </div>
                          <h4>Python</h4>
                          <p>Some feature text</p>
                      </div>
                  </div>
                  <div class="column is-3">
                      <div class="feature-icon has-text-centered">
                          <div class="icon-wrap is-icon-reveal">
                              <ion-icon name="logo-wordpress" size="large"></ion-icon>
                          </div>
                          <h4>WordPress</h4>
                          <p>Some feature text</p>
                      </div>
                  </div>
                  <div class="column is-3">
                      <div class="feature-icon has-text-centered">
                          <div class="icon-wrap is-icon-reveal">
                              <ion-icon name="logo-android" size="large"></ion-icon>
                          </div>
                          <h4>Android</h4>
                          <p>Some feature text</p>
                      </div>
                  </div>
                  <div class="column is-3">
                      <div class="feature-icon has-text-centered">
                          <div class="icon-wrap is-icon-reveal">
                              <ion-icon name="logo-apple" size="large"></ion-icon>
                          </div>
                          <h4>Apple</h4>
                          <p>Some feature text</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section class="section is-medium  has-background-image" data-background="https://source.unsplash.com/g30P1zcOzXo/1600x900" data-color="#4FC1EA" data-color-opacity=".6">
      <div class="overlay"></div>
      <div class="container">

          <div class="title-wrapper has-text-centered">
              <h2 class="title is-2 light-text is-spaced">Our clients love us</h2>
              <h3 class="subtitle is-5 light-text">Look at what they say about us</h3>
          </div>

          <div class="content-wrapper">
              <div class="columns is-vcentered">
                  <div class="column is-4">
                      <figure class="testimonial">
                          <blockquote>
                              Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando suavitate at.
                          </blockquote>
                          <div class="author">
                              <GatsbyImage src="/img/illustrations/faces/1.png" alt=""/>
                              <h5>Irma Walters</h5><span>Accountant</span>
                          </div>
                      </figure>
                  </div>
                  <div class="column is-4">
                      <figure class="testimonial">
                          <blockquote>
                              Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando suavitate at.
                          </blockquote>
                          <div class="author">
                              <GatsbyImage src="/img/illustrations/faces/2.png" alt=""/>
                              <h5>John Bradley</h5><span>Financial Analyst</span>
                          </div>
                      </figure>
                  </div>
                  <div class="column is-4">
                      <figure class="testimonial">
                          <blockquote>
                              Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim appetere te usu, ea case duis scribentur has. Duo te consequat elaboraret, has quando suavitate at.
                          </blockquote>
                          <div class="author">
                              <GatsbyImage src="/img/illustrations/faces/3.png" alt=""/>
                              <h5>Gary Blackman</h5><span>HR Manager</span>
                          </div>
                      </figure>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section class="section is-medium">
      <div class="container">
          <div class="title-wrapper has-text-centered">
              <h2 class="title is-2">Get Started</h2>
              <h3 class="subtitle is-5 is-muted">Choose one of our plans</h3>
              <div class="divider is-centered"></div>
          </div>

          <div class="pricing-wrap">
              <div class="feature-card is-pricing has-text-centered">
                  <h3 class="plan-name">Starter</h3>
                  <GatsbyImage src="/img/illustrations/pricing/1.svg" alt=""/>
                  <div class="price">
                      0
                  </div>
                  <p>Sign up, get some awesome features and get started now</p>
                  <a class="button is-fullwidth is-bold">Get Started</a>
              </div>
              <div class="feature-card is-pricing has-text-centered">
                  <h3 class="plan-name">Pro</h3>
                  <GatsbyImage src="/img/illustrations/pricing/2.svg" alt=""/>
                  <div class="price">
                      15
                  </div>
                  <p>Sign up, get some awesome features and get started now</p>
                  <a class="button is-fullwidth primary-btn raised is-bold">Get Started</a>
              </div>
              <div class="feature-card is-pricing has-text-centered">
                  <h3 class="plan-name">Business</h3>
                  <GatsbyImage src="/img/illustrations/pricing/3.svg" alt=""/>
                  <div class="price">
                      30
                  </div>
                  <p>Sign up, get some awesome features and get started now</p>
                  <a class="button is-fullwidth is-bold">Get Started</a>
              </div>
          </div>
      </div>
  </section>

  <section class="section section-light-grey is-medium">
      <div class="container">
          <div class="title-wrapper has-text-centered">
              <h2 class="title is-2 is-spaced">Drop us a line or two </h2>
              <h3 class="subtitle is-5 is-muted">We'd love to hear from You</h3>
              <div class="divider is-centered"></div>
          </div>

          <div class="content-wrapper">
              <div class="columns">
                  <div class="column is-6 is-offset-3">
                      <form>
                          <div class="columns is-multiline">
                              <div class="column is-6">
                                  <input class="input is-medium" type="text" placeholder="First Name *"></input>
                              </div>
                              <div class="column is-6">
                                  <input class="input is-medium" type="text" placeholder="Last Name *"></input>
                              </div>
                              <div class="column is-6">
                                  <input class="input is-medium" type="text" placeholder="Email *"></input>
                              </div>
                              <div class="column is-6">
                                  <input class="input is-medium" type="email" placeholder="Company"></input>
                              </div>
                              <div class="column is-12">
                                  <textarea class="textarea" rows="6" placeholder=""></textarea>
                              </div>
                              <div class="column is-12">
                                  <div class="form-footer has-text-right mt-10">
                                      <button class="button cta is-large primary-btn form-button raised is-clear">Send Message</button>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </section>




  <div id="auth-modal" class="modal">
      <div class="modal-background modal-dismiss"></div>
      <div class="modal-content">
          <div class="flex-card auth-card">
              <div class="tabs-wrapper">
                  <div class="tabs">
                      <ul>
                          <li class="is-active" data-tab="login-tab"><a>Login</a></li>
                          <li data-tab="register-tab"><a>Register</a></li>
                      </ul>
                  </div>
                  <div id="login-tab" class="tab-content is-active">
                      <div class="field">
                          <label>Username</label>
                          <div class="control">
                              <input type="text" class="input is-medium" placeholder="Enter username"></input>
                          </div>
                      </div>
                      <div class="field">
                          <label>Password</label>
                          <div class="control">
                              <input type="password" class="input is-medium" placeholder="Enter password"></input>
                          </div>
                      </div>

                      <a class="button is-fullwidth secondary-btn is-rounded raised">Log in</a>
                  </div>
              </div>
          </div>
      </div>
      <button class="modal-close is-large modal-dismiss" aria-label="close"></button>
  </div>
</main>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
