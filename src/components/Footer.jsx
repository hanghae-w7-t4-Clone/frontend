import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterCon>
      <FooterUi>
        <FooterLi>
          <FooterA href="">ABOUT</FooterA>
        </FooterLi>
        <FooterLi>
          <FooterA href="">HELP</FooterA>
        </FooterLi>
        <FooterLi>
          <FooterA href="">PRESS</FooterA>
        </FooterLi>
        <FooterLi>
          <FooterA href="">API</FooterA>
        </FooterLi>
        <FooterLi>
          <FooterA href="">JOBS</FooterA>
        </FooterLi>
        <FooterLi>
          <FooterA href="">PRIVACY</FooterA>
        </FooterLi>
        <FooterLi>
          <FooterA href="">TEMS</FooterA>
        </FooterLi>
        <FooterLi>
          <FooterA href="">LOCATIONS</FooterA>
        </FooterLi>
        <FooterLi>
          <FooterA href="">TOP ACCOUNTS</FooterA>
        </FooterLi>
        <FooterLi>
          <FooterA href="">HASHTAGS</FooterA>
        </FooterLi>
        <FooterLi>
          <FooterA href="">LANGUAGE</FooterA>
        </FooterLi>
      </FooterUi>
      <FooterP>© 2020 PICTUREGRAM</FooterP>
    </FooterCon>
  );
};

export default Footer;

const FooterCon = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
`;
const FooterUi = styled.ul`
  text-align: center;
`;
const FooterLi = styled.li`
  display: inline;
  margin-right: 5px;
`;
const FooterA = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #00376b;
`;
const FooterP = styled.p`
  margin: 10px 0;
  text-align: center;
  color: #8e9096;
  font-size: 14px;
`;
