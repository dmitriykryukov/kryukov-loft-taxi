import React from "react"
import { render, fireEvent } from "@testing-library/react"
import App from './App'

jest.mock('./layouts/Main.js', () => ({ Main: () => <div>Main content</div> }))

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />)
    expect(container.innerHTML).toMatch("Main content")
  })
})