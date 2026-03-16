import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  test("Should load Contact Us component", () => { // we can write it instead of test also
    render(<Contact />); // first we should render component into js dom

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument(); // should import '@testing-library/jest-dom';
  });

  test("Should load button inside Contact Us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //console.log(inputBoxes.length);
    // Assertion

    expect(inputBoxes.length).toBe(2);
  });
});
