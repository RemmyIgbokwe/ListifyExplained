import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const ProfileSvg = (props: SvgProps) => (
  <Svg

    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Circle cx={15} cy={15} r={15} fill="#fff" fillOpacity={0.7} />
    <Circle cx={14.5} cy={9.5} r={5.5} fill="#000" fillOpacity={0.7} />
    <Path
      fill="#000"
      fillOpacity={0.7}
      d="M5.789 24.321a8.726 8.726 0 0 1 2.635-6.013 8.89 8.89 0 0 1 6.108-2.52A8.902 8.902 0 0 1 20.7 18.17a8.739 8.739 0 0 1 2.778 5.952l-8.84.435-8.848-.236Z"
    />
  </Svg>
)
export default ProfileSvg
