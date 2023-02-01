/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Address</h5>
            <p>71 Amsteroum Avenue Cronish Night, NY 35098</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Phone</h5>
            <p>
              Reception : +205 123 4567 <br />
              Office : +207 235 7890
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Email</h5>
            <p>
              Office :
              <Link legacyBehavior href="#">
                <span className="link">info@wrappixel.com</span>
              </Link>
              <br />
              Site :
              <Link legacyBehavior href="https://www.wrappixel.com">
                <span className="link">wrappixel.com</span>
              </Link>
            </p>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20">Social</h5>
            <div className="round-social light">
              <Link legacyBehavior href="#">
                <span className="link">
                  <i className="fa fa-facebook"></i>
                </span>
              </Link>
              <Link legacyBehavior href="#">
                <span className="link">
                  <i className="fa fa-twitter"></i>
                </span>
              </Link>
              <Link legacyBehavior href="#">
                <span className="link">
                  <i className="fa fa-google-plus"></i>
                </span>
              </Link>
              <Link legacyBehavior href="#">
                <span className="link">
                  <i className="fa fa-youtube-play"></i>
                </span>
              </Link>
              <Link legacyBehavior href="#">
                <span className="link">
                  <i className="fa fa-instagram"></i>
                </span>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  All Rights Reserved by{" "}
                  <Link legacyBehavior href="https://www.wrappixel.com">
                    <span className="link">wrappixel.com</span>
                  </Link>
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <Link legacyBehavior href="#">
                    <span className="p-10 p-l-0">Terms of Use</span>
                  </Link>
                  <Link legacyBehavior href="#">
                    <span className="p-10">Legal Disclaimer</span>
                  </Link>
                  <Link legacyBehavior href="#">
                    <span className="p-10">Privacy Policy</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
