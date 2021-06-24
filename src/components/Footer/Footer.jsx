import React from "react";

import { footerLinksData, getInTouchData } from "../../MockData/FooterData";
import { socialDetails } from "../../MockData/NavbarData";

import Card from "../Card/Card";
import ContactForm from "../ContactForm/ContactForm";
import { ArrowIcon } from "../../svg";

import { FooterStyle, FooterLinksStyle, FooterBeltStyle } from "./Footer.style";

const FooterBelt = () => {
  return (
    <FooterBeltStyle>
      <p className="copy-right-text">
        Copyright &copy; Reserved |{" "}
        <a
          href="https://www.linkedin.com/in/jahangir-khan-894380191/"
          target="_blank"
          className="link"
        >
          Jahangir Khan
        </a>
      </p>
    </FooterBeltStyle>
  );
};

const FooterLinks = (props) => {
  const { heading, footerLinks } = props;

  return (
    <FooterLinksStyle>
      <h3 className="title">{heading}</h3>

      <ul className="footer-links-wrapper">
        {footerLinks.map((footerLink, index) => {
          const { text, url } = footerLink;
          return (
            <li key={index} className="footer-link">
              <a href={url} className="link">
                <span className="icon">
                  <ArrowIcon />
                </span>
                <p className="text">{text}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </FooterLinksStyle>
  );
};

function Footer() {
  return (
    <FooterStyle>
      <section className="footer-content">
        <article className="get-in-touch">
          <h3 className="title">Get in Touch</h3>
          {getInTouchData.map((data, index) => {
            return (
              <Card
                key={index}
                cardType="horizontalCard"
                {...data}
                cardClass="footer-contact-details"
              />
            );
          })}

          <ul className="social-linls">
            {socialDetails.map((socialLink, index) => {
              const { url, icon } = socialLink;
              return (
                <li key={index} className="social-link-wrapper">
                  <a href={url} target="_blank" className="social-link">
                    <span className="icon">{icon}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </article>

        {footerLinksData.map((footerLink, index) => {
          return <FooterLinks {...footerLink} key={index} />;
        })}

        <section className="contact-form-wrapper">
          <h2 className="title">Enquiry Form</h2>
          <ContactForm />
        </section>
      </section>

      <FooterBelt />
    </FooterStyle>
  );
}

export default Footer;
