// E2E Test for the Todo Application

describe("Todo Application", () => {
  beforeEach(() => {
    cy.visit("/");
    // Clear local storage to start fresh
    cy.window().then((win) => {
      win.localStorage.clear();
    });
  });
});
