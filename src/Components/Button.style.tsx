import styled from "styled-components";
import Theme from "./Theme";
import { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.font};
    background-color: ${theme.colors.primary};
    box-shadow: ${theme.boxShadow};
  `};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  border: 0;
  border-radius: 32px;
  padding: 16px 32px;
  margin-bottom: 24px;
`;
