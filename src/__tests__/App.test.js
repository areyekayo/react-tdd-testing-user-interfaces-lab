import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the test `Hi, I'm ____`", () => {
    // Arrange
    render(<App />);

    //Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });

    //Assert 
    expect(topLevelHeading).toBeInTheDocument();   
});

test("displays an image with alt text identifying the content of the image", () => {
    render(<App />);
    const image = screen.getByRole("img");
    const imageAltText = screen.getByAltText(/photo of riko/i);

    expect(imageAltText).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
});

test("displays a second level heading with the text `About Me`", () => {
    render(<App />);

    const secondLevelHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact: false,
        level: 2,
    });

    expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for a biography", () => {
    render(<App />);

    const paragraph = screen.getByText(/biography/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe('P');
});

test("displays links to github page and linkedin page", () => {
    render(<App />);

    const githubLink = screen.getByRole("link", {name: /github/i});
    const linkedinLink = screen.getByRole("link", {name: /linkedin/i});

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/areyekayo");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/rikofluchel/");
})
