import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import {
  FavouriteRecipe,
  FavouriteWrapper,
  NewRecipeAddButton,
  ModalFormBackground,
  ModalFormContainer,
  ModalFormClose,
} from "./FavouritesPageElements";

import thumbnotfound from "../../images/no-image.svg";

const FavouritesPage = () => {
  const data = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  const [newRecipe, setNewRecipe] = useState(data);
  const [callBtn, setCallBtn] = useState(false);

  //save form input to localhost
  const onSubmit = (e) => {
    data.push(e);
    localStorage.setItem("items", JSON.stringify(data));
    setNewRecipe(JSON.parse(localStorage.getItem("items")));
    setCallBtn((prev) => !prev);
  };

  const required = (value) => (value ? undefined : "Required");
  //final-form
  const customRecipeForm = () => (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="strMeal" validate={required}>
            {({ input, meta }) => (
              <div>
                <input
                  {...input}
                  type="text"
                  placeholder="Name your dish"
                  autoComplete="off"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <div>
            <Field
              name="strInstructions"
              validate={required}
              render={({ input, meta }) => (
                <>
                  <textarea {...input} />
                  {meta.error && meta.touched && (
                    <span id="span-textarea">{meta.error}</span>
                  )}
                </>
              )}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );

  return (
    <>
      <NewRecipeAddButton onClick={() => setCallBtn((prev) => !prev)}>
        <p>ADD NEW</p>
      </NewRecipeAddButton>
      {!callBtn ? (
        ""
      ) : (
        <ModalFormBackground>
          <ModalFormContainer>
            <ModalFormClose onClick={() => setCallBtn((prev) => !prev)} />
            {customRecipeForm()}
          </ModalFormContainer>
        </ModalFormBackground>
      )}

      <FavouriteWrapper>
        {Object.keys(newRecipe).length > 0 ? (
          newRecipe.map((item, index) => (
            <FavouriteRecipe key={index}>
              {item.strMealThumb ? (
                <img src={item.strMealThumb} alt="mealImage" />
              ) : (
                <img src={thumbnotfound} alt="recipe-thumb" />
              )}

              <h2>{item.strMeal}</h2>
              <p>{item.strInstructions}</p>
            </FavouriteRecipe>
          ))
        ) : (
          <div id="empty-list">Add your first recipe or create new one!</div>
        )}
      </FavouriteWrapper>
    </>
  );
};

export default FavouritesPage;
