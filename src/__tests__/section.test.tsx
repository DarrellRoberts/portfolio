import "@testing-library/jest-dom"
import { render, screen, within } from "@testing-library/react"
import Section from "@/components/ui/Section"

describe("Section", () => {
  it("renders a section tag", () => {
    render(<Section title={""} localeText={""} children={undefined} />)

    const section = screen.getByTestId("section-ui")

    expect(section).toBeInTheDocument()
  })
  it("renders s h2 tag", () => {
    render(<Section title={"test"} localeText={""} children={undefined} />)

    const section = screen.getByTestId("section-ui")

    within(section).getByRole("heading", { level: 2 })
  })
})
