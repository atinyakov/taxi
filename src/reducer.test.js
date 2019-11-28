import loginHandler from "./reducer";

describe("reducers", () => {
  let initState = {
    user: {
      name: "",
      surname: "",
      email: "",
      password: ""
    },
    isLoggedIn: false,
    card: {
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvc: ""
    },
    token: "",
    addresses: "",
    route: ""
  };

  it("LOGIN_DATA", () => {
    const action = {
      type: "LOGIN_DATA",
      payload: {
        email: "testemail",
        password: "testpassword",
        token: "123"
      }
    };

    expect(
      loginHandler(
        { isLoggedIn: false, user: { email: "", password: "" } },
        action
      )
    ).toEqual({
      isLoggedIn: true,
      user: {
        email: "testemail",
        password: "testpassword"
      },
      token: "123"
    });
  });

  it("LOGOUT", () => {
    const action = {
      type: "LOGOUT"
    };

    expect(loginHandler({ isLoggedIn: true }, action)).toEqual({
      isLoggedIn: false
    });
  });

  it("SIGNIN_DATA", () => {
    const action = {
      type: "SIGNIN_DATA",
      payload: {
        email: "test@test.com",
        password: "1234",
        name: "Иван",
        surname: "Petrov",
        responce: {
          token: 1234
        }
      }
    };

    const initalState = {
      user: { email: "", password: "", name: "", surname: "" }
    };

    expect(loginHandler(initalState, action)).toEqual({
      user: {
        email: "test@test.com",
        password: "1234",
        name: "Иван",
        surname: "Petrov"
      }
    });
  });

  it("LOGIN_DATA", () => {
    const action = {
      type: "LOGIN_DATA",
      payload: {
        email: "test@test.com",
        password: 1234,
        token: "12345"
      }
    };

    const initalState = {
      user: { email: "", password: "" },
      token: "",
      isLoggedIn: false
    };

    expect(loginHandler(initalState, action)).toEqual({
      user: {
        email: "test@test.com",
        password: 1234
      },
      token: "12345",
      isLoggedIn: true
    });
  });

  it("SAVE_CARD", () => {
    const action = {
      type: "SAVE_CARD",
      payload: {
        cardName: "Ivan Petrov",
        cardNumber: "124 567 6543",
        expiryDate: "202020",
        cvc: "123"
      }
    };

    const initalState = {
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvc: ""
    };

    expect(loginHandler(initalState, action)).toEqual({
      ...initalState,
      card: {
        cardName: "Ivan Petrov",
        cardNumber: "124 567 6543",
        expiryDate: "202020",
        cvc: "123"
      }
    });
  });
});
