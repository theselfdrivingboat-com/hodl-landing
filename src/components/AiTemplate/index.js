import React from "react";
import Helmet from "react-helmet";
import Testimonials from "../Testimonials";
import ProgressiveImageContainer from "../ProgressiveImageContainer";
import PropTypes from "prop-types";

const AiTemplate = (props) => {
  const {
    title,
    heading,
    description,
    offerings,
    meta_title,
    meta_description,
    testimonials,
  } = props;

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>
      <section className="hero is-primary is-bold is-large has-background">
        <img className="hero-background" src="img/hodlhero.png" />
        <div className="hero-body pt-6" style={{ paddingBottom: "15rem" }}>
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div
                  className="section pt-6 has-text-centered"
                  style={{ paddingBottom: "15rem" }}
                >
                  <h1 className="title is-1">{title}</h1>
                  <h2 className="subtitle is-3">{description}</h2>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf5a5-tKhH25EkxLizDFlX9m_bprySjY0uEE7lG4lnOfx_DtA/viewform?usp=sf_link">
                    <button className="button is-medium is-primary">
                      Join the Waiting List
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gradient">
        <div className="container">
          <div className="section pt-0">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content has-text-centered">
                  <div className="columns is-multiline">
                    <div
                      className="column is-12"
                      style={{ borderRadius: "5px" }}
                    >
                      <p className="has-text-centered">
                        <ProgressiveImageContainer image="img/hodl4.png" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
AiTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
};

export default AiTemplate;
