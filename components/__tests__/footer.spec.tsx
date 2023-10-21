import { render, screen } from "@testing-library/react";
import Footer, { FOOTER_LINKS } from "../footer";

describe("Footer", () => {
  test("renders all footer links", () => {
    render(<Footer />);
    for (let i = 0; i < FOOTER_LINKS.length; i++) {
      const link = FOOTER_LINKS[i];
      const linkElement = screen.getByRole("link", { name: link.label });
      expect(linkElement).toHaveAttribute("href", link.href);
    }
  });

  test("renders current year in the footer", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`© Paul Coroneos ${currentYear}`)
    ).toBeInTheDocument();
  });
});
