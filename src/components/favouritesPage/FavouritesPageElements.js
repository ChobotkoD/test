import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const FavouriteWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  #empty-list {
    grid-column-start: 2;
    font-size: 2rem;
  }

  @media (max-width: 992px) {
    grid-gap: 10px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FavouriteRecipe = styled.div`
  padding: 40px;
  img {
    object-fit: cover;
    width: 80%;
  }
  @media (max-width: 992px) {
    padding: 15px;
    p {
      font-size: 0.75rem;
    }
    img {
      width: 90%;
    }
  }
  @media (max-width: 768px) {
    padding: 5px;
    h2 {
      font-size: 1.2rem;
    }
    img {
      width: 100%;
    }
  }
`;

export const NewRecipeAddButton = styled.div`
  background-color: #e29c9c;
  max-width: 120px;
  margin: 10px auto 0;
  padding: 2px;
  border-radius: 3px;
  cursor: pointer;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  &:hover {
    background-color: #d17b7b;
  }
  &:active {
    transform: translate(3px, 3px);
  }
`;

export const FormWrapper = styled.div`
  max-width: 300px;
  padding: 20px;
  margin: 20px auto 0;
  background-color: green;
`;

export const ModalFormBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalFormContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  width: 400px;
  height: 500px;
  background: #fff;
  margin: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  z-index: 2;

  input {
    margin-top: 50px;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid black;
    border-left: none;

    &:focus {
      outline: none;
    }
  }

  textarea {
    margin: 30px 0 0 0;
    width: 90%;
    height: 250px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
    outline: none;
    resize: none;
  }
  #span-textarea {
    width: 66px;
    position: absolute;
    top: 50%;
    left: calc(50% - 33px);
  }

  button {
    margin-top: 40px;
    cursor: pointer;
    color: white;
    background: #000;
    padding: 3% 8%;
  }

  /* @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
  } */
`;

export const ModalFormClose = styled(MdClose)`
  font-size: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;
