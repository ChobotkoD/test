import styled from "styled-components";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 35% 30% 35%;
  @media (max-width: 992px) {
    grid-template-columns: 25% 50% 25%;
  }
  @media (max-width: 768px) {
    grid-template-columns: 20% 60% 20%;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const MainContainer = styled.div`
  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
  grid-column-start: 2;
  @media (max-width: 480px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export const MainButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  .btnMain {
    text-align: middle;
    padding: 5px 0;
    margin-bottom: 30px;
    cursor: pointer;
  }
  #next-button {
    background-color: #a6a6a6ed;
    &:hover {
      background-color: #808080ed;
    }
  }
  #save-button {
    background-color: yellowgreen;
    &:hover {
      background-color: #84ab36;
    }
  }
`;
