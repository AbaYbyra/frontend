import React from "react";
import {Row, Col } from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-lp">
      <Row className='footer-body'>
        <Col xs={12}  md={5} className="footer-pages-list">
          <ul>
            <li><a href="#home">Página Inicial</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </Col>
        <Col xs={12}  md={5} className="footer-social-media container">
          <p className="font-weight-bold pr-2">Redes sociais: </p>
          <a href="#">
            <img src={require('../../assets/icon_facebook.svg').default} />
          </a>
          <a href="#">
            <img src={require('../../assets/icon_instagram.svg').default} />
          </a>
          <a href="#">
            <img src={require('../../assets/icon_twitter.svg').default} />
          </a>
          <a href="#">
            <img src={require('../../assets/icon_whatsapp.svg').default} />
          </a>
          <a href="#">
            <img src={require('../../assets/icon_youtube.svg').default} />
          </a>
        </Col>
      </Row>
      <div className="footer-copyright text-center py-2">
        &copy; {new Date().getFullYear()} COPYRIGHT: ABÁ YBYRÁ
      </div>
    </div>
  );
}

export default Footer;