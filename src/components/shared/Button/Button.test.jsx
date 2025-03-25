import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from ".";

describe("Button component", () => {
  test("Deve renderizar o componente Button em tela", async () => {
    const btn = render(
      <Button
        title="Button component"
        btnFunction={() => {
          throw new Error("Function not implemented.");
        }}
      />,
    );
    expect(btn).toBeTruthy();
  });

  test("Deve renderizar o componente Button em tela com o título `Button component`", async () => {
    render(
      <Button
        title="Button component"
        btnFunction={() => {
          throw new Error("Function not implemented.");
        }}
      />,
    );
    const btnWithTitle = screen.getByText("Button component", {
      selector: "button",
    });
    expect(btnWithTitle).toHaveTextContent("Button component");
  });

  test("Deve renderizar o componente Button com o texto na cor branca", async () => {
    render(
      <Button
        title="Button component"
        textColor={"#fff"}
        btnFunction={() => {
          throw new Error("Function not implemented.");
        }}
      />,
    );
    const btnWithStyle = screen.getByText("Button component", {
      selector: "button",
    });
    expect(btnWithStyle).toHaveStyle("color: #fff");
  });

  test("Deve renderizar o componente Button com a cor preta de fundo", async () => {
    render(
      <Button
        title="Button component black"
        backgroundColor={"#000"}
        btnFunction={() => {
          throw new Error("Function not implemented.");
        }}
      />,
    );
    const btnWithBgStyle = screen.getByText("Button component black", {
      selector: "button",
    });
    expect(btnWithBgStyle).toHaveStyle("background-color: #000");
  });
});

test("Deve chamar a função passada quando clicado", async () => {
  const bar = jest.fn();
  render(<Button title="Button component function" btnFunction={bar} />);
  const btnWithFunction = screen.getByText("Button component function", {
    selector: "button",
  });
  fireEvent.click(btnWithFunction);
  expect(bar).toHaveBeenCalled();
});

/* 
https://testing-library.com/docs/user-event/convenience/#keyboard

test("Deve renderizar o componente Button com a cor de fundo #0099ff quando nenhuma cor é fornecida", async () => {
  render(
    <Button
      title="Button no background"
      btnFunction={() => {
        throw new Error("Function not implemented.");
      }}
    />,
  );
  const btnWithBlueBgStyle = screen.getByText("Button no background", {
    selector: "button",
  });
  expect(btnWithBlueBgStyle).toHaveStyle("background-color: rgb(0, 15, 255)");
}); */
