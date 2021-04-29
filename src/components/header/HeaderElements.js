import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #eee;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`;

export const HeaderLinks = styled.div`
  grid-column-start: 2;
  align-self: center;
  a {
    cursor: pointer;
    padding: 0 10px;
    text-decoration: none;
    color: black;
    padding-right: 15px;
    &:hover {
      border-bottom: 2px solid #474747e3;
    }
  }
  @media (max-width: 480px) {
    a {
      padding: 0 40px;
    }
  }
`;
