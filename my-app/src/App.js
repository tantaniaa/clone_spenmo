import React from "react";
import styled from "styled-components";
import SpenmoSection1 from "./fotospenmo.webp";
import "./index.css";

export default function App() {
  return (
    <Container>
      <Wrapper>
        <LogoSpenmo>
          <img
            src={"SpenmoLogo.webp"}
            alt="SpenmoLogo"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </LogoSpenmo>
        <Menu>
          <SubMenu>PRODUCT</SubMenu>
          <SubMenu>CASE STUDIES</SubMenu>
          <SubMenu>PRICING</SubMenu>
          <SubMenu>BLOG</SubMenu>
          <SubMenu>COUNTRY</SubMenu>
        </Menu>
        <Login>
          <LoginButton>LOGIN</LoginButton>
          <SignUp>
            <SignUpBox>SIGN UP</SignUpBox>
          </SignUp>
        </Login>
      </Wrapper>
      <Wrapper2>
        <Combine>
          <SectionLeft>
            <Content>
              <Title>All your payables in one dashboard</Title>
              <Subtitle>
                Spenmo is an all-in-one software that consolidates corporate
                cards, multi-currency dashboards, automated bill pay, and
                employee expense claims into one sleek interface.
              </Subtitle>
              <Achievement>
                <AchievementLogo>
                  <img
                    src={"medal1.svg"}
                    alt="G2"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </AchievementLogo>
                <AchievementLogo>
                  <img
                    src={"medal2.svg"}
                    alt="G2"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </AchievementLogo>
              </Achievement>
              <DemoButton>BOOK A DEMO</DemoButton>
            </Content>
          </SectionLeft>
          <SectionRight>
            <img
              src={"fotospenmo.webp"}
              alt="Spenmo"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </SectionRight>
        </Combine>
      </Wrapper2>
    </Container>
  );
}

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 0px 20px 8px 20px;
  height: 60px;
  padding-bottom: 15px;
  padding-top: 20px;
  font-family: "Arial", "Helvetica", sans-serif;
  font-weight: bold;
  font-size: 12px;
  box-shadow: 0 4px 2px -2px #ececec;
  position: fixed;
  background-color: white;
`;

const LogoSpenmo = styled.div`
  padding-left: 80px;
  padding-right: 40px;
  width: 200px;
  flex-grow: 1;
`;

const Menu = styled.div`
  display: flex;
  padding-left: 50px 0px;
  flex-grow: 4;
  justify-content: center;
`;

const Login = styled.div`
  display: flex;
  text-align: center;
  cursor: pointer;
  flex-grow: 1;
`;

const SubMenu = styled.div`
  text-align: center;
  padding: 20px 20px;
  margin-right: 40px;
  cursor: pointer;
  &:hover {
    color: #e66c2c;
  }
`;

const LoginButton = styled.div`
  padding: 20px 20px;
  &:hover {
    color: #e66c2c;
  }
`;

const SignUp = styled.div`
  background-color: #e66c2c;
  height: 15px;
  width: 50px;
  color: white;
  padding: 20px 20px;
  border-radius: 5px;
  &:hover {
    background-color: grey;
    box-shadow: 0 0 0 2px grey;
    transition: box-shadow 0.25s;
`;

const SignUpBox = styled.div`
}
`;

const Wrapper2 = styled.div`
  width: 100%;
  height: 800px;
  background-image: url("Wrapper2.svg");
  background-size: "contain";
  padding-top: 70px;
`;

const Combine = styled.div`
  width: 80%;
  height: 700px;
  margin: 0px auto;
  display: flex;
`;

const SectionLeft = styled.div`
  width: 40%;
  flex-grow: 1;
`;

const SectionRight = styled.div`
  width: 60%;
  height: 100%;
`;

const Content = styled.div`
  width: 90%;
  height: 70%;
  margin-top: 25%;
`;
const Title = styled.div`
  font-family: "Karla", sans-serif;
  font-weight: bold;
  font-size: 40px;
`;

const Subtitle = styled.div`
  padding-top: 20px;
  font-family: "Karla", sans-serif;
  fontsize: 30px;
`;

const Achievement = styled.div`
  display: flex;
  width: 250px;
  height: 120px;
  margin-top: 20px;
`;

const AchievementLogo = styled.div`
  margin: 10px;
`;

const DemoButton = styled.div`
  background-color: #e66c2c;
  height: 20px;
  width: 100px;
  color: white;
  padding: 12px 5px;
  border-radius: 5px;
  margin-top: 50px ;
  font-family: "Arial", "Helvetica", sans-serif;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  &:hover {
    background-color: grey;
    box-shadow: 0 0 0 2px grey;
    transition: box-shadow 0.25s;
`;
