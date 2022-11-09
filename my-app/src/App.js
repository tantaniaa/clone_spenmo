import React from "react";
import styled from "styled-components";

export default function App() {
  return (
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
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 20px;
  height: 60px;
  padding-bottom: 15px;
  background-color: white;
  font-family: "Arial", "Helvetica", sans-serif;
  font-weight: bold;
  font-size: 12px;
  box-shadow: 0 4px 2px -2px #ececec;
`;

const LogoSpenmo = styled.div`
  padding-left: 80px;
  padding-right: 40px;
  background-color: white;
  width: 200px;
  flex-grow: 1;
`;

const Menu = styled.div`
  display: flex;
  padding-left: 50px 0px;
  background-color: white;
  flex-grow:4;
  justify-content: center;
`;

const Login = styled.div`
  display: flex;
  text-align: center;
  background-color: white;
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
  padding: 10px 20px;
  margin: 8px;
  border-radius: 5px;
  margin-bottom: 15px;
  &:hover {
    background-color: grey;
    box-shadow: 0 0 0 2px grey;
    transition: box-shadow 0.25s;
`;

const SignUpBox = styled.div`
}
`;
