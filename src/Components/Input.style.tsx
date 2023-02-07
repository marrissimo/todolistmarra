import styled, { css } from "styled-components";

export const InputVoice = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.font};
    background-color: ${theme.colors.surface};
  `};
  width: 100%;
  color: white;
  border: 0;
  font-size: 24px;
  line-height: 38px;
  font-weight: 300;
`;
