import "@testing-library/jest-dom"
import { render, screen, within } from "@testing-library/react"
import { UiSection } from "@/components/ui/UiSection"
import { Icon } from "@/types/Icon"

describe("Section", () => {
  it("renders a section tag", () => {
    render(
      <UiSection title={Icon.SKILLS} localeText={""} children={undefined} />,
    )

    const section = screen.getByTestId("section-ui")

    expect(section).toBeInTheDocument()
  })
  it("renders s h2 tag", () => {
    render(
      <UiSection title={Icon.SKILLS} localeText={""} children={undefined} />,
    )

    const section = screen.getByTestId("section-ui")

    within(section).getByRole("heading", { level: 2 })
  })
})
