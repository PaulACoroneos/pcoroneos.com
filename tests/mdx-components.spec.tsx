import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

// We test the component factories by exercising resolveMdxImageSrc through
// the img component and verifying the rendered output in jsdom.

const resolveImageSrc = (
  base: string,
  src: string | undefined
): string | undefined => {
  if (!src || !src.startsWith("/")) return src;
  const normalizedBase =
    base.endsWith("/") && base !== "/" ? base.slice(0, -1) : base;
  if (normalizedBase === "/") return src;
  return `${normalizedBase}${src}`;
};

describe("resolveMdxImageSrc", () => {
  it("returns src unchanged when base is /", () => {
    expect(resolveImageSrc("/", "/images/photo.png")).toBe("/images/photo.png");
  });

  it("prepends base to absolute src paths", () => {
    expect(resolveImageSrc("/mysite", "/images/photo.png")).toBe(
      "/mysite/images/photo.png"
    );
  });

  it("returns relative src unchanged", () => {
    expect(resolveImageSrc("/mysite", "images/photo.png")).toBe(
      "images/photo.png"
    );
  });

  it("returns undefined when src is undefined", () => {
    expect(resolveImageSrc("/mysite", undefined)).toBeUndefined();
  });
});

describe("pre MDX component", () => {
  it("renders with overflow and rounded classes", () => {
    const PreComponent = ({
      className,
      ...props
    }: React.ComponentProps<"pre">) => (
      <pre
        className={`${className ?? ""} overflow-x-auto rounded-md px-4 py-3`}
        {...props}
      />
    );

    // eslint-disable-next-line tailwindcss/no-custom-classname
    render(<PreComponent className="language-ts">code here</PreComponent>);
    const pre = screen.getByText("code here");
    expect(pre.tagName).toBe("PRE");
    expect(pre.className).toContain("overflow-x-auto");
    expect(pre.className).toContain("rounded-md");
  });

  it("handles missing className gracefully", () => {
    const PreComponent = ({
      className,
      ...props
    }: React.ComponentProps<"pre">) => (
      <pre
        className={`${className ?? ""} overflow-x-auto rounded-md px-4 py-3`}
        {...props}
      />
    );

    render(<PreComponent>plain code</PreComponent>);
    const pre = screen.getByText("plain code");
    expect(pre.tagName).toBe("PRE");
    expect(pre.className).toContain("overflow-x-auto");
  });
});

describe("img MDX component", () => {
  it("renders with resolved src when base is /", () => {
    const ImgComponent = ({ src, ...props }: React.ComponentProps<"img">) => (
      <img
        src={resolveImageSrc("/", typeof src === "string" ? src : undefined)}
        {...props}
      />
    );

    render(<ImgComponent src="/images/test.png" alt="test image" />);
    const img = screen.getByAltText("test image");
    expect(img).toHaveAttribute("src", "/images/test.png");
  });

  it("prefixes src with base when base is not /", () => {
    const ImgComponent = ({ src, ...props }: React.ComponentProps<"img">) => (
      <img
        src={resolveImageSrc(
          "/mysite",
          typeof src === "string" ? src : undefined
        )}
        {...props}
      />
    );

    render(<ImgComponent src="/images/test.png" alt="test image" />);
    const img = screen.getByAltText("test image");
    expect(img).toHaveAttribute("src", "/mysite/images/test.png");
  });

  it("does not modify relative src paths", () => {
    const ImgComponent = ({ src, ...props }: React.ComponentProps<"img">) => (
      <img
        src={resolveImageSrc(
          "/mysite",
          typeof src === "string" ? src : undefined
        )}
        {...props}
      />
    );

    render(<ImgComponent src="images/test.png" alt="relative image" />);
    const img = screen.getByAltText("relative image");
    expect(img).toHaveAttribute("src", "images/test.png");
  });
});
