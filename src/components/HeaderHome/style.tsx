import { ColorsTheme } from "@/styles/theme";
import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 26px;
  background: ${({ theme }) => ColorsTheme.colors.primary};
  margin-bottom: 10px;

  h1 {
    font-weight: 900;
    color: #fff;
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
