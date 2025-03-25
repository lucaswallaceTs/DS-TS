import React from "react";
import { describe, expect, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Input } from ".";

describe("Input Component", () => {
  it("should be empty when a placeholder is not provided", () => {
    render(<Input register={undefined} label={"Documento"} />);
    const input = screen.getByDisplayValue("");
    expect(input).toBeTruthy();
  });
  it("should init with a default value when a placeholder is provided", () => {
    render(
      <Input
        register={undefined}
        label={"Documento"}
        placeholder="Texto default"
      />
    );
    const input = screen.getByPlaceholderText("Texto default");
    expect(input).toBeTruthy();
  });
  it("should render a mandatory label", () => {
    const register = jest.fn();
    render(<Input register={register("documento")} label={"Documento"} />);
    const inputElement = screen.getByLabelText("Documento");
    expect(inputElement).toBeInTheDocument();
  });
});
