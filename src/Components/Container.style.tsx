import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font};
    background-color: ${theme.colors.background};
  `};
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 144px;
`;

export const TodoContainer = styled.div`
  ${({ theme }) => css`
    box-shadow: ${theme.boxShadow};
    background-color: ${theme.colors.surface};
  `};
  width: 100%;
  max-height: 100vh;
  overflow: auto;
  margin-top: 168px;
  margin-bottom: 24px;
  padding: 80px 160px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: left;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 32px;
  }
`;

interface Props {
  openInput?: boolean;
}
export const BlackContainer = styled.div<Props>`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  position: absolute;
  display: ${(props) => (props.openInput ? "flex" : "none")};
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font};
    background-color: ${theme.colors.surface};
  `};
  width: 509px;
  height: 313px;
  margin: 0;
  padding: 40px;
  padding-bottom: 16px;
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  border-radius: 24px;
`;
