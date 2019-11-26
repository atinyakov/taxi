import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";

import { Provider } from "react-redux";
import { taxiApp } from "../../reducer";
import createSagaMiddleware from "redux-saga";

import { createStore, compose, applyMiddleware } from "redux";

let prevState = localStorage.getItem("user");
let userData = { ...JSON.parse(prevState) };

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  taxiApp,
  userData,
  compose(applyMiddleware(sagaMiddleware))
);

describe("Header", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      // <appContext.Provider value={{ toggleLogginPopup: ()=>{}, toggleMap: ()=>{}, toggleProfile: ()=>{} }}>
      //     <userContext.Provider value={{ isLoggedin: true }}>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>

      // </appContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
