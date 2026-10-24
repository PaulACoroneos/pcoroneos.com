import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import PortfolioGrid from "../src/components/PortfolioGrid";

const projects = [
  {
    title: "Survey Form",
    githubLink: "https://github.com/a",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Palindrome Checker",
    githubLink: "https://github.com/b",
    deployedLink: "https://example.com/b",
    tags: ["HTML", "JavaScript"],
  },
  { title: "Bookbot", githubLink: "https://github.com/c", tags: ["Python"] },
];

const titles = () =>
  screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent);

const filter = (name: string) => screen.getByRole("button", { name });

describe("PortfolioGrid", () => {
  it("shows every project with no filter selected", () => {
    render(<PortfolioGrid projects={projects} base="/" />);
    expect(titles()).toEqual(["Survey Form", "Palindrome Checker", "Bookbot"]);
    for (const button of screen.getAllByRole("button")) {
      expect(button).toHaveAttribute("aria-pressed", "false");
    }
  });

  it("narrows to projects with the selected tag", () => {
    render(<PortfolioGrid projects={projects} base="/" />);
    fireEvent.click(filter("Python"));
    expect(filter("Python")).toHaveAttribute("aria-pressed", "true");
    expect(titles()).toEqual(["Bookbot"]);
  });

  it("shows projects matching any selected tag", () => {
    render(<PortfolioGrid projects={projects} base="/" />);
    fireEvent.click(filter("Python"));
    fireEvent.click(filter("JavaScript"));
    expect(titles()).toEqual(["Palindrome Checker", "Bookbot"]);
  });

  it("restores the full list when a filter is toggled off", () => {
    render(<PortfolioGrid projects={projects} base="/" />);
    fireEvent.click(filter("CSS"));
    expect(titles()).toEqual(["Survey Form"]);
    fireEvent.click(filter("CSS"));
    expect(filter("CSS")).toHaveAttribute("aria-pressed", "false");
    expect(titles()).toHaveLength(3);
  });

  it("only renders a deploy link when one exists", () => {
    render(<PortfolioGrid projects={projects} base="/sub" />);
    const deployLinks = screen.getAllByTitle(/Deployed link for/);
    expect(deployLinks).toHaveLength(1);
    expect(deployLinks[0]).toHaveAttribute("href", "https://example.com/b");
    expect(
      screen.getAllByTitle(/GitHub link for/)[0].querySelector("img"),
    ).toHaveAttribute("src", "/sub/github.png");
  });
});
