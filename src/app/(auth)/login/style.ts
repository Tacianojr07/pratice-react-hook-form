import { ColorsTheme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 576px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Form = styled.form`
  width: 537px;
  height: 470px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  padding: 60px;
  border: solid 1px black;

  justify-content: center;
  gap: 30px;
  background-color: #fff;
  position: relative;

  button {
    background: ${({ theme }) => ColorsTheme.colors.primary};
    padding: 13px 10px;
    color: #fff;
    border-radius: 5px;
    transition: all 0.4s;
    font-weight: 700;
    font-size: 19px;

    &:hover {
      background-color: #b3bdc9;
      color: ${({ theme }) => ColorsTheme.colors.primary};
    }
  }
  a {
    text-decoration: solid;
    color: blue;
    margin-left: 150px;
  }

  @media (max-width: 655px) {
    max-width: 330px;
    height: 370px;

    a {
      margin-left: 25px;
    }
    p {
      position: absolute;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  border-radius: 10px;
  outline: none;
  border: 1px solid black;
  font-size: 16px;
`;
