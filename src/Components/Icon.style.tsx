import styled, { css } from "styled-components";

export const DeleteIcon = styled.img`
  height: 33.33px;
  margin-right: 43.33px;
`;

export const Checkbox = styled.input`
  height: 33.33px;
  width: 33.33px;
  border-radius: 16px;
  margin-right: 24px;
`;

export const NewVoiceIcon = styled.img`
  ${({ theme }) => css`
    font-family: ${theme.font};
    fill: ${theme.colors.onprimary};
  `};
  height: 33.33px;
  margin-right: 24px;
`;
