import { createGlobalStyle } from "styled-components";

const FooterCss = createGlobalStyle`
  /** FOOTER */
  .footer {
    position: absolute;
    height: 200px;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 1.5em;
    margin-bottom: 40px;
    z-index: 1; // Mainbody has no z-index (means 0)
    background: ${props => props.theme === "light" ? "var(--runningLight)" : "var(--runningDark)"};
    box-shadow: 0px -8px 5px #d6d6d62e;
    
    transition: 300ms ease;
  }
  /** FOOTER */
  
  /** FOOTER CONTAINER */
  .footer__container {
    position: relative;
    max-width: 70rem;
    height: 100%;
    margin: 0 auto;
  }
  /** FOOTER CONTAINER */
  
  /** FOOTER LEFT */
  .footer__left {
    position: absolute;
    left: 0;
    top: 0;
  }
  /** FOOTER LEFT */
  
  /** NAME */
  .footer__name {
    width: 270px;
    height: 55px;

    position: absolute;
    top: -4px;
    left: 0;
    
    font-size: 48px;
    line-height: 76px;
    text-align: center;
    letter-spacing: -0.06em;
    
    color: ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
    z-index: 1; // to be on top of hidden input field (anti robot)
    
    transition: 300ms ease;
    
    .footer__summary {
      width: 470px;
      margin: -30px 0 0 5px;
      font-size: 14px;
      text-align: left;
      line-height: 1;
      letter-spacing: 0;
    }
  }
  /** NAME */
  
  /** SOCIALS */
  .footer__socials {
    margin: -25px 0 0;
    
    display: flex;
    align-items: center;
    text-align: center;
  
    transition: 300ms ease; // For changing size when scrolled
    
    & > * { // Pointing to the Animated <div>
      margin: 0 5px 0;
      
      & a > img {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        
        transition: 300ms ease; // For changing size when animating
        
        &.true {
          width: 30px;
        }
        
        &.false {
          width: 115px;
        }
        
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  
    .footer__reddit {
      /*&.true {
        width: 36px;
      }
      
      &.false {
        width: 138px;
      }*/
    }
    
    .footer__facebook {
      
    }
    
    .footer__instagram {
      
    }
    
    .footer__twitter {
      
    }
    
    .footer__github {
      
    }
    
    .footer__youtube {
      
    }
    
    .footer__linkedin {
      
    }
    
    .footer__aboutme {
      
    }
    
    .footer__portfolio {
      
    }
  }
  /** SOCIALS */
  
  
  
  /** FOOTER RIGHT */
  .footer__right {
    position: absolute;
    right: 0;
    top: 0;
  }
  /** FOOTER RIGHT */
  
  /** FOOTER MIDDLE */
  .footer__middle {
    position: absolute;
    right: 0;
    top: 0;
    
    > * { // usefulLinks and poweredBy
      position: absolute;
      top: 5px;
    }
    
    p {
      margin: 0
      color: ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
      
      > * {
        font-size: 14px;
        box-shadow: none;
        color: ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
      }
    }
  }
  
  .footer__usefulLinks {
    margin-left: 15px;
  }
  
  .footer__poweredBy {
    margin-left: 150px;
  }
  /** FOOTER MIDDLE */
  
  /** FOOTER SAYHELLO */
  .footer__sayHello {
    position: absolute;
    top: -29px;
    right: 0;
    
    form > * {
      margin: 8px 0 0;
    }
    
    .footer__botfield {
      input {
        border-radius: 10px;
        padding: 0 10px;
        z-index: 0;
      }
    }
    
    .footer__email {
      input {
        border-radius: 10px;
        padding: 1px 10px;
        width: 61%;
        outline: none;
        font-size: 90%;
        color: ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        background: ${props => props.theme === "light" ? "var(--secondaryLight)" : "var(--secondaryDark)"};
        border-left: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        border-right: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        //border-top: none;
        border-top: 2px solid ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
        //border-bottom: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        border-bottom: 2px solid ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
      }
    }
    
    .footer__message {
      textarea {
        border-radius: 10px;
        padding: 5px 10px;
        width: 350px;
        height: 105px;
        outline: none;
        resize: none;
        font-size: 90%;
        color: ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        background: ${props => props.theme === "light" ? "var(--secondaryLight)" : "var(--secondaryDark)"};
        border-left: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        border-right: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        //border-top: none;
        border-top: 2px solid ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
        //border-bottom: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
        border-bottom: 2px solid ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
      }
    }
    
    .footer__sayHello--button {
      button {
        width: 30%;
        height: 28px;
        position: absolute;
        top: 42px;
        left: 70%;
        font-size: 90%;
        border-radius: 10px;
        color: ${props => props.theme === "light" ? "var(--secondaryLight)" : "var(--secondaryDark)"};
        background: ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
        border: 2px solid ${props => props.theme === "light" ? "var(--primaryLight)" : "var(--primaryDark)"};
      }
    }
    
    .footer__responsive {
      text-align: right
      margin: -14px 10px 0 0;
      font-size: 14px;
      color: ${props => props.theme === "light" ? "var(--primaryLight2)" : "var(--primaryDark2)"};
    }
  }
  /** FOOTER SAYHELLO */
  
  .footer__container {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-flow: row wrap;
    margin: 0 auto;
  }
  
  .footer__left {
    flex: 0 0 41%;
    position: relative;
    width: 100%;
    height: 200px;
  }
  
  .footer__middle {
    flex: 0 0 28%;
    position: relative;
    width: 100%;
    height: 200px;
  }
  
  .footer__right {
    flex: 0 0 28%;
    position: relative;
    width: 100%;
    height: 200px;
  }
  
  /** CREDIT */
  .footer__credit {
    height: 40px;
    width: 100%;
    
    position: fixed;
    left: 0;
    bottom: 0;
    
    background: ${props => props.theme === "light" ? "var(--runningLight)" : "var(--runningDark)"};
    z-index: 2; // so on top of footer__name, which is on top of anti robot
    
    transition: 300ms ease;
    
    .footer__creditname {
      position: absolute;
      top: 53%;
      left: 50%;
      transform: translate(-50%, -50%);
      
      font-size: 16px;
      line-height: 38px;
      
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.06em;
      
      color: ${props => props.theme === "light" ? "var(--primaryLight3)" : "var(--primaryDark3)"};
    }
  }
  
  .footer__credit--minimize {
    background: ${props => props.theme === "light" ? "var(--runningLight2)" : "var(--runningDark2)"};
    box-shadow: 0px -8px 5px #aaaaaa2e;
  }
  /** CREDIT */
  
  /** EMPHASIS */
  .--emphasis {
    color: ${props => props.theme === "light" ? "var(--tertiaryLight)" : "var(--tertiaryDark)"};
  }
  /** EMPHASIS */
  
  /* ----------------------- ----------------------- ----------------------- */
  
  /** RESPONSIVE */
  /*@media only screen and (max-width: 925px) {
    .footer__left {
      flex: 0 0 100%;
      order: 1;
    }
    
    .footer__middle {
      flex: 0 0 100%;
      order: 3;
    }
    
    .footer__right {
      flex: 0 0 100%;
      order: 2;
    }
  }*/
  
  @media only screen and (max-width: 700px) { // 774
    .footer {
      height: 390px;
    }
  
    .footer__left {
      flex: 0 0 100%;
      order: 1;
      height: 180px;
      
      .footer__name {
        left: 50%;
        transform: translateX(-50%);
      }
      
      .footer__summary {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        
        text-align: center;
      }
      
      .footer__socials {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 55px;
      }
    }
    
    .footer__middle {
      display: none;
    }
    
    .footer__right {
      flex: 0 0 100%;
      order: 2;
      
      .footer__sayHello {
        right: 50%;
        transform: translateX(50%);
      }
    }
  }
  
  @media only screen and (min-width: 701px) and (max-width: 882px) {
    .footer {
      height: 370px;
    }
  
    .footer__left {
      flex: 0 0 100%;
      order: 1;
      height: 150px;
      
      .footer__name {
        left: 50%;
        transform: translateX(-50%);
      }
      
      .footer__summary {
        width: 620px;
            
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        
        text-align: center;
      }
      
      .footer__socials {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 30px;
      }
    }
    
    .footer__middle {
      flex: 0 0 39%;
      order: 3;
    }
    
    .footer__right {
      flex: 0 0 59%;
      order: 2;
    }
  }
  
  @media only screen and (min-width: 883px) and (max-width: 1140px) {
    .footer {
      height: 370px;
    }
  
    .footer__left {
      flex: 0 0 100%;
      order: 1;
      height: 150px;
      
      .footer__name {
        left: 50%;
        transform: translateX(-50%);
      }
      
      .footer__summary {
        width: 620px;
            
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        
        text-align: center;
      }
      
      .footer__socials {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 30px;
      }
    }
    
    .footer__middle {
      flex: 0 0 42%;
      order: 3;
    }
    
    .footer__right {
      flex: 0 0 56%;
      order: 2;
    }
  }
`;

export default FooterCss;
