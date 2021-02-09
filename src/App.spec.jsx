import React from "react"
import { render } from "@testing-library/react"
import { App } from './App'
import { createMemoryHistory } from "history"
import { Router } from "react-router-dom"
import { Provider } from "react-redux"


jest.mock('./components/Login', () => ({ LoginWithConnect: () => <div>Login content</div> }))
jest.mock('./components/Main', () => ({ MainWithConnect: () => <div>Main content</div> }))

describe("App", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };
    const history = createMemoryHistory()
    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router>
    )
    expect(container.innerHTML).toMatch("Login content")
  })
})