import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Hero from "@/components/hero/Hero"
import { DarkContext } from "@/context/DarkContext"
import { ReactNode } from "react"

jest.mock("../../locales/client", () => ({
  useI18n: () => (key: string) => `Mocked Translation for ${key}`,
}))

type Props = {
  children: ReactNode
  isDark: boolean
}

const MockDarkProvider = ({ children, isDark = false }: Props) => (
  <DarkContext.Provider value={{ isDark, toggleDark: jest.fn() }}>
    {children}
  </DarkContext.Provider>
)

describe("Hero", () => {
  it("renders hero image", () => {
    render(
      <MockDarkProvider isDark={false}>
        <Hero />
      </MockDarkProvider>
    )

    const heroImage = screen.getByTestId("hero-image")

    expect(heroImage).toBeInTheDocument()
  })
})
