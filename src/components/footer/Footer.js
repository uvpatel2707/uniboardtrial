import React from 'react';
import './footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return(
      <>
        <Container fluid className='footerFluidContainer'>
            <Row>
                <Col sm={12} lg={8} className="footerLogoCol">
                    <img src='./uniFooterLogo2.png' alt='footerLogo' className='footerLogo' />
                </Col>
                <Col sm={12} lg={2}>
                    <p className='footerCompanyText'>Company</p>
                    <p className='footerAboutusText'>AboutUs</p>
                </Col>
                <Col sm={12} lg={2}>
                    <p className='footerSupportText'>Support</p>
                    <p className='footerHelpText'>Help</p>
                    <p className='footerContactusText'>ContactUs</p>
                    <p className='footerSocialLogo'>
                        <img src='http://localhost:3000/facebookLogo1.png' alt='facebbokLogo'></img>
                        <img src='http://localhost:3000/twitterLogo1.png' alt='twitterLogo' style={{paddingLeft : "10px"}}></img>
                    </p>
                </Col>
            </Row>
            <div className='footerLine'></div>
            <p className='footerCopyrightText'>@2022 - UniOnBoard. All rights reserved</p>
        </Container>
      </>
  );
};

export default Footer;
