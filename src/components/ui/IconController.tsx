import {
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  LightBulbIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/16/solid"
import { Icon, type IconKeys } from "../../types/Icon"

const CONTROLLER_MAP: Record<
  IconKeys,
  React.ComponentType<{ className?: string }>
> = {
  [Icon.ABOUT]: UserIcon,
  [Icon.SKILLS]: LightBulbIcon,
  [Icon.EXPERIENCE]: ClipboardDocumentListIcon,
  [Icon.PROJECTS]: CodeBracketIcon,
  [Icon.OPEN_SOURCE]: UserGroupIcon,
  [Icon.CONTACT]: EnvelopeIcon,
}

type Props = {
  label: IconKeys
}

export const IconController = ({ label }: Props) => {
  const IconComponent = CONTROLLER_MAP[label]
  if (!IconComponent) {
    return null
  }
  return <IconComponent className="size-12 max-sm:size-8" />
}
