import * as React from "react"
import '../../styles/microsoftPartner.css'
import brackets from '../../../static/download.svg'
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../../components/layout";
import {hamburger} from '../../../static/hamburger.png'

export default function Home() {
    const [isAtTop, setIsAtTop] = useState(true);
    const [openHam, setHam] = useState(false)
    
    const handleHamburger = () => {
      
    }

    useEffect(() => {
        const checkScrollPosition = () => {
            if (window.scrollY === 0) {
              setIsAtTop(true);
            } else {
              setIsAtTop(false);
            }
          };
        window.addEventListener('scroll', checkScrollPosition);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', checkScrollPosition);
        };
      }, []);
    
  return (
    <Layout>
    <main>
        <section id="section-1" >
        <div>
          <div className="header">
            <h2>ACHIEVE YOUR TARGET @ HYPER VELOCITY</h2> 
          </div>
          <div className="para">
            {isAtTop&&<img src={brackets} alt="" />}
            <p>As a premier system integrator, we <br />
               specialize in delivering the customer’s <br />
               vision on Microsoft Cloud at a guaranteed price
            </p>
          </div>
          <div className="buttons">
            <button className='button'>Microsoft Specialization</button>
            <div className="wrap"><button className='button button2'>success stories</button></div>
          </div>
        </div>
        </section>
        <section id="section-2">
            <div>
                <div className="header">
                    <h2>what we do best</h2>
                    <h4>on microsoft partner</h4>
                </div>
                <div className="cards-container">
                    <div onClick={handleHamburger} className="card" style={{position:'relative'}}>
                      <div style={{position:'absolute', top:"5%",left:"5%"}}>
                        <svg viewBox="0 0 100 80" width="15" height="20">
                          <rect width="100" height="10"></rect>
                          <rect y="30" width="100" height="10"></rect>
                          <rect y="60" width="100" height="10"></rect>
                        </svg>
                      </div>
                    <img class="card-image" src="https://cdn.sanity.io/images/nlg69nbd/production/d777cbbdc546a1c5349243b2386b56d3a295ecde-61x50.svg" alt="image_cocreate" />
                    <p class="card-text">Enterprise Cloud Foundation</p>
                    </div>
                    <div onClick={handleHamburger} className="card" style={{position:'relative'}}>
                    <div style={{position:'absolute', top:"5%",left:"5%"}}>
                        <svg viewBox="0 0 100 80" width="15" height="20">
                          <rect width="100" height="10"></rect>
                          <rect y="30" width="100" height="10"></rect>
                          <rect y="60" width="100" height="10"></rect>
                        </svg>
                      </div>
                    <img class="card-image" src="https://cdn.sanity.io/images/nlg69nbd/production/17216cdc38b17cbc1d479ba9005f850a682434b2-61x53.svg" alt="image_cocreate" />
                    <p class="card-text">Cloud Migration</p>
                    </div>
                    <div onClick={handleHamburger} className="card" style={{position:'relative'}}>
                    <div style={{position:'absolute', top:"5%",left:"5%"}}>
                        <svg viewBox="0 0 100 80" width="15" height="20">
                          <rect width="100" height="10"></rect>
                          <rect y="30" width="100" height="10"></rect>
                          <rect y="60" width="100" height="10"></rect>
                        </svg>
                      </div>
                    <img class="card-image" src="https://cdn.sanity.io/images/nlg69nbd/production/c804c42b54533fb2529e53e840aa4397106209fb-61x50.svg" alt="image_cocreate" />
                    <p class="card-text">Cloud Security</p>
                    </div>
                    <div onClick={handleHamburger} className="card" style={{position:'relative'}}>
                    <div style={{position:'absolute', top:"5%",left:"5%"}}>
                        <svg viewBox="0 0 100 80" width="15" height="20">
                          <rect width="100" height="10"></rect>
                          <rect y="30" width="100" height="10"></rect>
                          <rect y="60" width="100" height="10"></rect>
                        </svg>
                      </div>
                    <img class="card-image" src="https://cdn.sanity.io/images/nlg69nbd/production/aa790fc3f9e04f490b2b6941c2e913a6ee52107d-61x51.svg" alt="image_cocreate" />
                    <p class="card-text">360° Governance</p>
                    </div>
                    <div onClick={handleHamburger} className="card" style={{position:'relative'}}>
                    <div style={{position:'absolute', top:"5%",left:"5%"}}>
                        <svg viewBox="0 0 100 80" width="15" height="20">
                          <rect width="100" height="10"></rect>
                          <rect y="30" width="100" height="10"></rect>
                          <rect y="60" width="100" height="10"></rect>
                        </svg>
                      </div>
                    <img class="card-image" src="https://cdn.sanity.io/images/nlg69nbd/production/68c2a2142c4015a982cb418f02d11e5ad627caa7-61x50.svg" alt="image_cocreate" />
                    <p class="card-text">Enterprise Data Management</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="section-3">
            <div>
            <div className="header">
                    <h2>FUTURE-PROOF SERVICES</h2>
                    <h4>for microsoft</h4>
                </div>
                <div className="cards-container" style={{width:'75%'}}>
                    <div className="card">
                    <img class="card-image" src="https://cdn.sanity.io/images/nlg69nbd/production/1d9bdcc28242987d664b3fd74eaafabec2b1b80c-69x52.svg" alt="image_cocreate" />
                    <p class="card-text">Cloud Automation</p>
                    </div>
                    <div className="card">
                    <img class="card-image" src="https://cdn.sanity.io/images/nlg69nbd/production/5f4d481a9799a622899d927aea4b7fdc5f56770b-55x58.svg" alt="image_cocreate" />
                    <p class="card-text">Application Modernization</p>
                    </div>
                    <div className="card">
                    <img class="card-image" src="https://cdn.sanity.io/images/nlg69nbd/production/c429097842eb4b7634c32a72d9c4ad694999a64a-61x52.svg" alt="image_cocreate" />
                    <p class="card-text">Managed Services</p>
                    </div>
                    <div className="card">
                    <img class="card-image" src="https://cdn.sanity.io/images/nlg69nbd/production/b511bda079bc3070be1f48f2fb79b57fbd780ea8-57x56.svg" alt="image_cocreate" />
                    <p class="card-text">Hybrid Cloud</p>
                    </div>
                </div>
                <div className="buttons">
                  <button className="button-s3">READY TO FUTURE PROOF?</button>
                </div>
            </div>
        </section>
        <section id="section-4">
            <div>
            <div className="header">
                    <h2>OUR PARTNER VALUE PROPOSITION</h2>
                    <h4>As a Premier Partner</h4>
                </div>
                <div className="cards-container" >
                    <div className="card">
                    <img class="staticCard-module--card_image--ce793" src="https://cdn.sanity.io/images/nlg69nbd/production/1346ab0b5e960ca6819ec1f01f81bc96c0f3d246-68x60.svg" alt="image_cocreate" />
                    <p class="card-text">Cloud Automation</p>
                    </div>
                    <div className="card">
                    <img class="staticCard-module--card_image--ce793" src="https://cdn.sanity.io/images/nlg69nbd/production/f722600be5820217e29e699f372c673f8657d6d3-76x61.svg" alt="image_cocreate" />
                    <p class="card-text">Application Modernization</p>
                    </div>
                    <div className="card">
                    <img class="staticCard-module--card_image--ce793" src="https://cdn.sanity.io/images/nlg69nbd/production/1e4f3df94f50a8ea2b80fc79f6d18e479c0e6a89-45x64.svg" alt="image_cocreate" />
                    <p class="card-text">Managed Services</p>
                    </div>
                    <div className="card">
                    <img class="staticCard-module--card_image--ce793" src="https://cdn.sanity.io/images/nlg69nbd/production/1929b95d6410a225f9c80397c8d40d9ee9e99cf6-46x59.svg" alt="image_cocreate" />
                    <p class="card-text">Hybrid Cloud</p>
                    </div>
                    <div className="card">
                    <img class="staticCard-module--card_image--ce793" src="https://cdn.sanity.io/images/nlg69nbd/production/9d3dce78e5c54ec347c7d7261d24c3bd861c931e-69x52.svg" alt="image_cocreate" />
                    <p class="card-text">Hybrid Cloud</p>
                    </div>
                </div>
                <div className="buttons">
                  <button className="button-s3 button-s4">LET'S TALK</button>
                </div>
            </div>
        </section>
        <section id="section-5">
            <div>
                <div className="contents-footer">
                <div className="blocks locations">
                    <h3>Locations</h3>
                    <div className="places">
                        <h4>United States</h4>
                        <h4>India</h4>
                        <h4>Singapore</h4>
                        <h4>Indonesia</h4>
                        <h4>Mauritius</h4>
                        <h4>Ireland</h4>
                    </div>
                </div>
                <div className="blocks Services">
                    <h3>Services</h3>
                    <div className="places">
                        <h4>Enterprise Cloud</h4>
                        <h4>Product Innovation</h4>
                        <h4>Real World AI</h4>
                        <h4>Google Cloud Partner</h4>
                        <h4>User Experience Design</h4>
                        <h4>Co-Create / App Development</h4>
                    </div>
                </div>
                <img src="https://cdn.sanity.io/images/nlg69nbd/production/aa8f4074dc4520a3c9016ec9dd9c034a2c791bf0-367x65.svg" alt="techolution-logo"></img>
                <div className="blocks Resources">
                    <h3>Resources</h3>
                    <div className="places">
                        <h4>Blog</h4>
                        <h4>Careers</h4>
                        <h4>Privacy Policy</h4>
                        <h4>Terms of Use</h4>
                        <h4>Contact Us</h4>
                    </div>
                </div>
                <div className="blocks Contact-Us">
                    <h3>Contact Us</h3>
                    <div className="places">
                        <h4>HQ 222 Broadway, 19th Floor, New York NY 10038</h4>
                        <h4>innovate@techolution.com</h4>
                        <div className="socials">
                        <a class="footer-module--linkedIN--92281" href="https://in.linkedin.com/company/techolution-mobi" target="_blank"></a>
                        <a class="footer-module--youtube--7d0ae" href="https://www.youtube.com/channel/UCuyDBVLpHKcH0RcYcnjOKHA" target="_blank"></a>
                        <a class="footer-module--twitter--6fb7d" href="https://twitter.com/techolution_com?lang=en" target="_blank"></a>
                        <a class="footer-module--twitter--6fb7d" href="https://twitter.com/techolution_com?lang=en" target="_blank"></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </main>
    </Layout>
  )
}

