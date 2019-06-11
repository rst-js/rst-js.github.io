import * as React from "react"
import { config, IconProp, library } from "@fortawesome/fontawesome-svg-core"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  FontAwesomeIcon,
  Props as FaIconProps
} from "@fortawesome/react-fontawesome"
import { Omit } from "utility-types"

// css is added manually in pages/_document.tsx
config.autoAddCss = false

library.add(faGithub)

type IconProps = Omit<FaIconProps, "icon">

function makeIcon(icon: IconProp): React.ComponentType<IconProps> {
  return (props: IconProps) => <FontAwesomeIcon {...props} icon={icon} />
}

export const GitHub = makeIcon(["fab", "github"])
