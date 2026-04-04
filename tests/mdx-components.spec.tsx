import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import mdxComponents, { resolveMdxImageSrc } from "../src/lib/mdx-components";

const Pre = mdxComponents.pre as React.ComponentType<
  React.ComponentProps<"pre">
>;
const Img = mdxComponents.img as React.ComponentType<
  React.ComponentProps<"img">
>;

describe("resolveMdxImageSrc", () => {
  it("returns src unchanged when base is /", () => {
    expect(resolveMdxImageSrc("/", "/images/photo.png")).toBe(
      "/images/photo.png",
    );
  });

  it("prepends base to absolute src paths", () => {
    expect(resolveMdxImageSrc("/mysite", "/images/photo.png")).toBe(
      "/mysite/images/photo.png",
    );
  });

  it("returns relative src unchanged", () => {
    expect(resolveMdxImageSrc("/mysite", "images/photo.png")).toBe(
      "images/photo.png",
    );
  });

  it("returns undefined when src is undefined", () => {
    expect(resolveMdxImageSrc("/mysite", undefined)).toBeUndefined();
  });
});

describe("pre MDX component", () => {
  it("renders with overflow and rounded classes", () => {
    // eslint-disable-next-line tailwindcss/no-custom-classname
    render(<Pre className="language-ts">code here</Pre>);
    const pre = screen.getByText("code here");
    expect(pre.tagName).toBe("PRE");
    expect(pre.className).toContain("overflow-x-auto");
    expect(pre.className).toContain("rounded-md");
  });

  it("handles missing className gracefully", () => {
    render(<Pre>plain code</Pre>);
    const pre = screen.getByText("plain code");
    expect(pre.tagName).toBe("PRE");
    expect(pre.className).toContain("overflow-x-auto");
  });
});

describe("img MDX component", () => {
  it("renders with resolved src when base is / (default test env)", () => {
    render(<Img src="/images/test.png" alt="test image" />);
    const img = screen.getByAltText("test image");
    expect(img).toHaveAttribute("src", "/images/test.png");
  });

  it("does not modify relative src paths", () => {
    render(<Img src="images/test.png" alt="relative image" />);
    const img = screen.getByAltText("relative image");
    expect(img).toHaveAttribute("src", "images/test.png");
  });

  it("passes through non-src attributes", () => {
    render(<Img src="/images/test.png" alt="accessible image" />);
    const img = screen.getByAltText("accessible image");
    expect(img).toHaveAttribute("alt", "accessible image");
  });
});
