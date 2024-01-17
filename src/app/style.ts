import { ColorsTheme } from "@/styles/theme";
import styled from "styled-components";
import css from "styled-jsx/css";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => ColorsTheme.colors.primary};
  color: #fff;
  padding: 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  padding: 26px;

  h1 {
    font-weight: 900;
  }
`;

type ButtonProps = {
  IsButtonLogin?: boolean;
};

export const List = styled.ul`
  display: flex;
  gap: 15px;
`;

export const ListItem = styled.a<ButtonProps>`
  gap: 15px;
  text-decoration: none;
  color: blue;
  background-color: ${(props) => (props.IsButtonLogin ? "#3574C0" : "#fff")};
  padding: 10px 14px;
  border-radius: 8px;
  font-size: larger;
  font-weight: 500;
  transition: all 0.4s;

  &:hover {
    background: #3574;
    color: white;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 26px;
`;

export const Aside = styled.aside`
  img {
    height: 250px;
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Section = styled.section`
  h2 {
    font-size: 70px;
    font-weight: 900;
  }
  p {
    font-size: 35px;
  }
  button {
    background: #fff;
    color: #3574c0;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    width: 120px;
    height: 40px;
  }
`;
