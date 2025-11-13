import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Hero from "@/components/hero/Hero"
import { DarkContext } from "@/context/DarkContext"
import userEvent from "@testing-library/user-event"
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
  it("renders waves", () => {
    render(
      <MockDarkProvider isDark={true}>
        <Hero />
      </MockDarkProvider>
    )

    const heroWaves = screen.getByTestId("hero-waves")

    expect(heroWaves).toBeInTheDocument()
  })
  it("renders tumbleweed when cactus clicked", async () => {
    const user = userEvent.setup()
    render(
      <MockDarkProvider isDark={false}>
        <Hero />
      </MockDarkProvider>
    )

    const tumbleweedAnimation = screen.queryByTestId("hero-tumbleweed")
    expect(tumbleweedAnimation).not.toBeInTheDocument()

    const cactusImage = screen.getByTestId("cactus")

    await user.click(cactusImage)

    const activatedTumbleweed = await screen.findByTestId("hero-tumbleweed")
    expect(activatedTumbleweed).toBeInTheDocument()
  })
})
