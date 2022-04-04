import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages";

describe("Renders the signup page without crashing", () => {
  it("Should check if signup button exist", () => {
    render(<Home />);
    expect(screen.getByText("Get started now")).toBeInTheDocument();
  });

  test("Check if heading Elements is 2", async () => {
    render(<Home />);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
  });
});
