import styled from "styled-components";
import { css } from "styled-components";

interface Props {
  done?: boolean;
}

export const Label = styled.label<Props>`
  ${({ theme }) => css`
    font-family: ${theme.font};
  `};
  font-size: 17px;
  text-decoration-line: ${(props) => (props.done ? "line-through" : "none")};
  color: white;
  font-weight: 300;
  line-height: 38px;
`;

export const LabelMedium = styled(Label)`
  ${({ theme }) => css`
    color: ${theme.colors.onprimary};
  `};
  font-size: 24px;
  text-decoration-line: none;
  font-weight: 500;
`;
