import React from "react"
import RegisterForm from './RegisterForm'
import { render, fireEvent } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { Error } from "@material-ui/icons"


describe("Register Form", () => {
  describe("when you registe", () => {
    it("renders form", () => {
      const { getByLabelText } = render(<RegisterForm />)
      expect(getByLabelText(/Адрес электронной почты/)).toHaveAttribute("name", "email")
      expect(getByLabelText(/Имя/)).toHaveAttribute("name", "firstName")
      expect(getByLabelText(/Фамилия/)).toHaveAttribute("name", "lastName")
      expect(getByLabelText(/Пароль/)).toHaveAttribute("name", "password")
    })

    // HAVE Error

    // describe("when clicked on register buttons", () => {
    //   it("opens the corresponding page", () => {
    //     const toggleForm = jest.fn()
    //     const { getByTestId } = render(<RegisterForm />)
    //     fireEvent.click(getByTestId('onLoginPage'))
    //     expect(toggleForm).toReturn('login')
    //   })
    // })
  })
})