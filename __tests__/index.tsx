import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages";

describe("Renders the signup page without crashing", () => {
  it("Should check if signup button exist", () => {
    render(<Home />);
    expect(screen.getByText("Get started now")).toBeInTheDocument();
  });

  it("Should check if heading elements are 2", async () => {
    render(<Home />);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
  });

  it("Should check if 3 form input boxes exist in the form element", async () => {
    render(<Home />);
    const formElement = screen.getByTestId("form-box");
    const inputsInFormElement = within(formElement).getAllByTestId("input");
    expect(inputsInFormElement.length).toBe(3);
  });
});
