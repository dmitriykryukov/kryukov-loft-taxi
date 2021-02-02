import React from "react"
import LoginForm from './LoginForm'
import { render } from "@testing-library/react"

describe("Login Form", () => {
  describe("when logged in", () => {
    it("renders form", () => {
      const { getByLabelText } = render(<LoginForm />)
      expect(getByLabelText(/Имя пользователя/)).toHaveAttribute("name", "email")
      expect(getByLabelText(/Пароль/)).toHaveAttribute("name", "password")
    })

  })
})