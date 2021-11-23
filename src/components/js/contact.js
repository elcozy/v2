import * as React from "react";
import styled from "styled-components";
import { device } from "../data";
import { useForm, ValidationError } from "@formspree/react";

// sizes
const { mobile, mobileL, tablet } = device;

// styles

const HeaderStyles = styled.h5`
  display: flex;
  align-items: center;
  position: relative;
  /* margin: 10px 0px 40px; */
  margin: 10px 0;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--text-heading));
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 1.3rem;
  letter-spacing: 3px;
  &::after {
    content: "";
    display: block;
    position: relative;
    top: -48%;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--lightest-bg);

    @media ${tablet} {
      max-width: 100px;
      width: 100%;
    }
    @media ${mobileL} {
      width: 100%;
    }
    @media ${mobile} {
      margin-left: 10px;
    }
  }
`;
const SubHeaderStyles = styled.h2`
  display: flex;
  margin: 10px 0;
  width: 100%;
  white-space: nowrap;
  font-size: 3.1rem;
  text-transform: capitalize;
  color: var(--lightest-slate);
  /* letter-spacing: 3px; */
`;

const ContactTag = styled.section`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  p {
    margin: 0px 0px 15px;
  }
  .skill-tags {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 200px));
    /* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-code);
      font-size: var(--text-xs);
      &::before {
        content: "▷";
        position: absolute;
        left: 0px;
        color: var(--white);
        font-size: var(--text-sm);
        line-height: inherit;
      }
    }
  }
`;
const ContactBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: space-between;
  width: 100%;
  .form-c {
    flex: 1 0 auto;
    max-width: 600px;
    width: 100%;
    display: flex;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .input-c {
    width: 100%;
    position: relative;
    margin: 0.2rem 0;
    display: flex;
    flex-direction: column;
    input,
    textarea {
      width: 100%;
      box-sizing: border-box;
      background: transparent;
      caret-color: var(--slate);
      border: 1px solid var(--slate);
      color: var(--white);
      transition: border 500ms;
      padding: 1rem 1.5rem;
      font-size: var(--text-sm);
      &:focus-visible,
      &:focus {
        border: 1px solid var(--slate);
        border-radius: 0 !important;
      }
    }
    textarea {
      height: 220px;
      resize: none;
      font: inherit;
      font-size: var(--text-sm);
    }
  }
  .bottom {
    display: flex;
    width: 100%;
  }
`;

const ButtonAnchor = styled.button`
  color: var(--white);
  background-color: transparent;
  border: 1px solid var(--slate);
  padding: 1.25rem 1.75rem;
  /* width: -webkit-fill-available; */
  font-size: var(--text-sm);
  font-family: var(--font-code);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  margin-top: 0.2rem;
  &:hover {
    color: var(--main-bg);
    background-color: var(--white);
  }
  &:disabled {
    opacity: 0.6;
  }
`;

// markup
const Contact = () => {
  const [state, handleSubmit] = useForm("xoqkpjqe");

  if (state.succeeded) {
    return <p>Submitted Successfully</p>;
  }
  return (
    <ContactTag id="contact">
      <HeaderStyles>Contact</HeaderStyles>
      <SubHeaderStyles>Get In Touch 📧</SubHeaderStyles>
      <ContactBody>
        <div className="form-c" id="contact-me">
          <Form onSubmit={handleSubmit}>
            <div className="input-c">
              <input id="name" type="text" name="name" placeholder="Name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="input-c">
              <input id="email" type="email" name="email" placeholder="Email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="input-c">
              <textarea id="message" name="message" placeholder="Message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="bottom">
              <ButtonAnchor type="submit" disabled={state.submitting}>
                Submit
              </ButtonAnchor>
            </div>
          </Form>
          {state.submitting && <h5>Submitting... </h5>}
        </div>
      </ContactBody>
    </ContactTag>
  );
};

export default Contact;
