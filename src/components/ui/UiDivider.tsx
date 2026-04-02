type Props = {
  isFull?: boolean
  opacity?: number
}

export const UiDivider = ({ isFull = false, opacity }: Props) => {
  return (
    <div className="flex w-full justify-center">
      <hr
        className="text-[var(--neutral-color)]"
        style={{
          width: isFull ? "100%" : "90%",
          opacity: (opacity && opacity + "%") || "50%",
        }}
      />
    </div>
  )
}
