import React from 'react'
import Helmet from 'react-helmet'
import Testimonials from '../Testimonials'
import ProgressiveImageContainer from '../ProgressiveImageContainer'
import PropTypes from 'prop-types'

const HomePageTemplate = (props) => {
  const { title, heading, description, offerings, meta_title, meta_description, testimonials } = props

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold is-large has-background'>
        <img className='hero-background' src='img/hodlhero.png' />
        <div className='hero-body pt-6' style={{ paddingBottom: '15rem' }}>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section pt-6 has-text-centered' style={{ paddingBottom: '15rem' }}>
                  <h1 className='title is-1'>
                    {title}
                  </h1>
                  <h2 className='subtitle is-3'>
                    {description}
                  </h2>
                  <div className='columns is-centered'>
                    <div className='column is-one-fifth'>
                      <a href='https://docs.google.com/forms/d/e/1FAIpQLSf5a5-tKhH25EkxLizDFlX9m_bprySjY0uEE7lG4lnOfx_DtA/viewform?usp=sf_link'>
                        <button className='button is-medium is-primary'>Waiting List</button>
                      </a>
                    </div>
                    <div className='column is-one-fifth'>
                      <a href='https://docs.google.com/forms/d/e/1FAIpQLSf5a5-tKhH25EkxLizDFlX9m_bprySjY0uEE7lG4lnOfx_DtA/viewform?usp=sf_link'>
                        <button className='button is-medium is-primary' disabled>Developers API Docs</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>

          <div className='section pt-0'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content has-text-centered'>
                  <div className='columns is-multiline'>
                    <div className='column is-12' style={{ borderRadius: '5px' }}>
                      <p className='has-text-centered'>
                        <ProgressiveImageContainer
                          image='img/hodl1.png'
                        />
                        <ProgressiveImageContainer
                          image='img/hodl2.png'
                        />
                        <ProgressiveImageContainer
                          image='img/hodl-drawing1.png'
                        />
                        <ProgressiveImageContainer
                          image='img/hodl3.png'
                        />
                        <a href='/carbon-free-ai-training'>
                          <ProgressiveImageContainer
                            image='img/hodl-link-ai1.png'
                          />
                        </a>
                        <ProgressiveImageContainer
                          image='img/hodl4.png'
                        />
                        <iframe style={{ width: '100%', height: '70vh' }} src='https://www.youtube.com/embed/gl36tKSPEgM' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
                        <ProgressiveImageContainer
                          image='img/hodl-7.png'
                        />
                        <div className='columns'>
                          <a href='https://www.lessand.ro'>
                            <div className='column'>
                              <ProgressiveImageContainer
                                image='img/hodl-alex.png'
                              />
                            </div>
                          </a>
                          <a href='https://twitter.com/0xflores'>
                            <div className='column'>
                              <ProgressiveImageContainer
                                image='img/hodl-oana.png'
                              />
                            </div>
                          </a>
                          <a href='https://twitter.com/sid_hypeman'>
                            <div className='column'>
                              <ProgressiveImageContainer
                                image='img/hodl-siddarth.png'
                              />
                            </div>
                          </a>
                          <a href='https://www.linkedin.com/in/arwa-arif/'>
                            <div className='column'>
                              <ProgressiveImageContainer
                                image='img/hodl-arwa.png'
                              />
                            </div>
                          </a>
                        </div>
                        <ProgressiveImageContainer
                          image='img/hodl-6.png' />
	  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf5a5-tKhH25EkxLizDFlX9m_bprySjY0uEE7lG4lnOfx_DtA/viewform?usp=sf_link">
                        <ProgressiveImageContainer
                          image='img/hodl-link-beta.png' />
	  </a>
                        <ProgressiveImageContainer
                          image='img/hodl-8.png' />
	  <a href="https://discord.com/invite/dUFVR9dFRZ">
                        <ProgressiveImageContainer
                          image='img/hodl-link-discord.png' />
	  </a>
                        <ProgressiveImageContainer
                          image='img/hodl-9.png' />
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
  )
}
HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
