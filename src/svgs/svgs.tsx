import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DrawerSvg = (props: SvgProps) => (
  <Svg
 
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillOpacity={0.87}
      d="M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM14 17.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    />
  </Svg>
)
export default DrawerSvg
