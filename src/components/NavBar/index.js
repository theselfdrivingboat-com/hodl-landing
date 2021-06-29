import React, { useState } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'

const NavBar = () => {
  const [active, setActive] = useState(false)

  const toggleNavBar = () => {
    setActive(!active)
  }

  return (
    <StaticQuery
      query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
      render={data => (
        <nav className='navbar is-fixed-top' aria-label='main navigation'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              <strong>HODL IN THE OCEAN</strong>
            </Link>
            <button
              className={`button navbar-burger ${active ? 'is-active' : ''}`}
              data-target='navMenu'
              onClick={toggleNavBar}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={`navbar-menu ${active ? 'is-active' : ''}`} id='navMenu'>

            <div className='navbar-end'>
              {/* <SearchBox searchIndex={data.siteSearchIndex.index} />
              <Link className='navbar-item' to='/about'>
                About
              </Link> */}
              <Link className='navbar-item' to='/carbon-free-ai-training'>
                CARBON FREE AI TRAINING
              </Link>
              <div className='navbar-item'>
                <div className='field is-grouped'>
                  <p className='control'>
                    <Link
                      className='button is-link is-outlined'
                      to='https://docs.google.com/forms/d/e/1FAIpQLSf5a5-tKhH25EkxLizDFlX9m_bprySjY0uEE7lG4lnOfx_DtA/viewform?usp=sf_link'>
                      Join the Waiting list
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    />
  )
}

export default NavBar
