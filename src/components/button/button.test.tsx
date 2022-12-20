import Button from "./button.component";
import { BUTTON_TYPE_CLASSES } from "./button.component";
import {render, screen} from "@testing-library/react"

test("Button component without props to have base style", () => {
  render(<Button />);
  
  expect(screen.getByRole("button")).toHaveStyle("background-color: black")
})

test("Google sign in Button to have style of google button type", () => {
  render(<Button buttonType={BUTTON_TYPE_CLASSES.google}/>);
  
  expect(screen.getByRole("button")).toHaveStyle("background-color: rgb(66, 133, 244)")
})

test("inverted Button to have style of inverted button type", () => {
  render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}/>);

  expect(screen.getByRole("button")).toHaveStyle("background-color: white")
})
