import * as React from "react"
import Svg, { SvgProps, Path, G, Defs, ClipPath, Rect } from "react-native-svg"
export const Bread = (props: SvgProps) => (
  <Svg

    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M23 6c1.7 2.3-1.8 2.3 0 5m-7 16c13.5 0 13.2-1.8 12.9-5.6C28.6 17.2 24 14 16 14S3.4 17.2 3.1 21.4C2.8 25.2 2.5 27 16 27Zm0-8c0-1.5.1-3.2 1-5l-1 5Zm-6 0c0-1.5.1-2.6 1-4.3L10 19Zm12 0c0-1.3.1-2.4.8-3.9L22 19ZM16 5c1.7 2.3-1.8 2.3 0 5V5ZM9 6c1.7 2.3-1.8 2.3 0 5V6Z"
    />
  </Svg>
)
 


export const Briefcase = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill="white"
      d="M12.003 2.996a3.026 3.026 0 0 0-3.005 3.006v.996H4.002c-1.645 0-2.998 1.358-2.998 3.003v2c0 1.136.642 2.174 1.654 2.68l.338.17v11.146a3.026 3.026 0 0 0 3.006 3.005h19.995a3.026 3.026 0 0 0 3.005-3.005V14.85l.34-.17A2.995 2.995 0 0 0 30.994 12v-2c0-1.645-1.35-3.003-2.995-3.003H23v-.996a3.024 3.024 0 0 0-3.004-3.006h-7.994Zm0 2h7.994a.985.985 0 0 1 1.004 1.006v.996H10.997v-.996a.986.986 0 0 1 1.006-1.006ZM4.002 8.998h23.997a.991.991 0 0 1 1.003 1.004v2c0 .377-.218.723-.56.894-3.998 2-7.997 3.998-11.995 6a.992.992 0 0 1-.895 0c-3.998-2.002-7.995-4-11.994-6A1.006 1.006 0 0 1 2.996 12v-2a.993.993 0 0 1 1.006-1.003Zm11.997 6.001a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-11.001.852c3.218 1.61 6.436 3.22 9.654 4.832a3.02 3.02 0 0 0 2.695 0l9.656-4.832v10.146A.985.985 0 0 1 25.997 27H6.002a.983.983 0 0 1-1.004-1.004V15.85Z"
    />
  </Svg>
)



export const Weight= (props: SvgProps) => (
    <Svg

      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill="white"
          d="M25.333 6.67h-2.666A2.67 2.67 0 0 0 20 9.335v4h-8v-4a2.67 2.67 0 0 0-2.667-2.667H6.667A2.67 2.67 0 0 0 4 9.336v10.667a2.67 2.67 0 0 0 2.667 2.666h2.666A2.67 2.67 0 0 0 12 20.003v-4h8v4a2.67 2.67 0 0 0 2.667 2.666h2.666A2.67 2.67 0 0 0 28 20.003V9.336a2.67 2.67 0 0 0-2.667-2.667ZM6.667 20.002V9.336h2.666l.002 10.667H6.667Zm16 0V9.336h2.666l.002 10.667h-2.668Zm6.666-8H32v5.333h-2.667v-5.333ZM0 12.003h2.667v5.333H0v-5.333Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h32v32.003H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )

export const Design= (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke="white"
      strokeMiterlimit={10}
      strokeWidth={1.7}
      d="M9.28 27.6a4.48 4.48 0 1 0 0-8.96 4.48 4.48 0 0 0 0 8.96ZM25.8 13.6h-7.2c-.48 0-.8-.32-.8-.8V5.6c0-.48.32-.8.8-.8h7.2c.48 0 .8.32.8.8v7.2c0 .48-.32.8-.8.8Z"
    />
    <Path
      fill="white"
      d="M25.8 27.6c-.16 0-.32 0-.48-.16l-7.36-7.36a.773.773 0 0 1 0-1.12c.32-.32.8-.32 1.12 0l7.36 7.36c.32.32.32.8 0 1.12-.16.16-.32.16-.64.16Z"
    />
    <Path
      fill="white"
      d="M18.44 27.6c.16 0 .32 0 .48-.16l7.36-7.36c.32-.32.32-.8 0-1.12a.773.773 0 0 0-1.12 0l-7.36 7.36c-.32.32-.32.8 0 1.12.32.16.48.16.64.16Z"
    />
    <Path
      stroke="white"
      strokeMiterlimit={10}
      strokeWidth={1.7}
      d="M12.96 13.6H5.6c-.64 0-.96-.48-.8-.96l3.68-7.36c.32-.48 1.12-.48 1.28 0l3.68 7.36c.32.48 0 .96-.48.96Z"
    />
  </Svg>
)

export const Uni= (props: SvgProps) => (
    <Svg
    
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <Path
        fill="white"
        d="m28.653 13.587-1.333-.734-12-6.666h-.147a1.41 1.41 0 0 0-.253-.08h-.493a1.56 1.56 0 0 0-.267.08h-.147l-12 6.666a1.333 1.333 0 0 0 0 2.32l3.32 1.84v6.32a4 4 0 0 0 4 4H20a4 4 0 0 0 4-4v-6.32l2.667-1.493v3.813a1.333 1.333 0 1 0 2.666 0v-4.586a1.334 1.334 0 0 0-.68-1.16Zm-7.32 9.746A1.333 1.333 0 0 1 20 24.667H9.333A1.334 1.334 0 0 1 8 23.333v-4.84l6.013 3.334.2.08h.12c.111.014.223.014.334 0 .11.014.222.014.333 0h.12a.626.626 0 0 0 .2-.08l6.013-3.334v4.84Zm-6.666-4.186L5.413 14l9.254-5.147L23.92 14l-9.253 5.147Z"
      />
    </Svg>
  )

  export const MegaPhone= (props: SvgProps) => (
    <Svg

      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <Path
        fill="white"
        d="M25.843 26.722a1.11 1.11 0 0 1-.688-.239l-7.82-6.14a1.113 1.113 0 0 1-.426-.875v-10.2c0-.341.157-.664.425-.874l7.82-6.143a1.115 1.115 0 0 1 1.802.876v22.482a1.113 1.113 0 0 1-1.113 1.113Zm-6.708-7.796 5.595 4.394V5.416L19.135 9.81v9.116Z"
      />
      <Path
        fill="white"
        d="M18.023 20.553H6.186A6.193 6.193 0 0 1 0 14.367a6.193 6.193 0 0 1 6.186-6.185h11.837c.614 0 1.113.498 1.113 1.114V19.44c0 .614-.499 1.113-1.113 1.113ZM6.186 10.409a3.964 3.964 0 0 0-3.96 3.96 3.965 3.965 0 0 0 3.96 3.96H16.91v-7.92H6.186Z"
      />
      <Path
        fill="white"
        d="M8.592 29.987c-.726 0-1.437-.21-2.06-.617a3.76 3.76 0 0 1-1.634-2.389L3.29 19.338a1.113 1.113 0 0 1 2.179-.458l1.608 7.643c.085.407.324.756.673.983a1.54 1.54 0 0 0 1.169.22 1.559 1.559 0 0 0 1.2-1.842l-1.307-6.215a1.114 1.114 0 0 1 2.179-.458l1.307 6.214a3.79 3.79 0 0 1-3.706 4.562Zm18.974-11.185h-1.724a1.113 1.113 0 0 1 0-2.226h1.724c.59 0 1.143-.23 1.559-.646.418-.418.649-.973.649-1.563a2.21 2.21 0 0 0-2.208-2.208h-1.724a1.113 1.113 0 0 1 0-2.227h1.724A4.439 4.439 0 0 1 32 14.366a4.41 4.41 0 0 1-1.301 3.139 4.396 4.396 0 0 1-3.133 1.297Z"
      />
    </Svg>
  )

  export const Music = (props: SvgProps) => (
    <Svg

      width={29}
      height={29}
      fill="none"
      {...props}
    >
      <Path
        fill="white"
        d="M6.971 26.932h-1c-1.093 0-2.059-.434-2.719-1.22-.66-.787-.929-1.864-.736-2.954.378-2.146 2.36-3.826 4.514-3.826h2.518V5.803a3.01 3.01 0 0 1 2.801-2.994l11-.733a3.02 3.02 0 0 1 2.248.803c.604.565.951 1.364.951 2.191l-.01 14.369c-.001.22-.012.438-.053.668-.378 2.145-2.36 3.825-4.514 3.825h-1c-1.093 0-2.059-.434-2.719-1.22-.66-.787-.929-1.864-.736-2.954.378-2.146 2.36-3.826 4.514-3.826h2.518V11.07c0-.28-.112-.54-.317-.731a.985.985 0 0 0-.749-.267l-11 .733a1.003 1.003 0 0 0-.934.998v10.629c0 .089-.012.175-.033.257-.009.305-.02.361-.029.418-.38 2.144-2.362 3.825-4.515 3.825Zm.058-6c-1.172 0-2.337.995-2.545 2.174-.09.514.017.982.3 1.321.273.325.695.505 1.187.505h1c1.172 0 2.337-.995 2.545-2.174-.003-.002.011-.293.02-1.826H7.029Zm15-3c-1.172 0-2.337.995-2.545 2.174-.09.514.017.982.3 1.321.273.325.695.505 1.187.505h1c1.172 0 2.337-.995 2.545-2.174.02-.113.021-.223.021-.33l.007-1.496h-2.515ZM12.48 4.805a1.004 1.004 0 0 0-.934.998v3.172c.253-.09.521-.147.801-.166l11-.733c.408-.023.817.03 1.199.166V5.069c0-.28-.112-.54-.317-.731a.99.99 0 0 0-.749-.267l-11 .734Z"
      />
    </Svg>
  )

  export const Health = (props: SvgProps) => (
    <Svg
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <Path
        fill="white"
        d="M11.154 4.003c-3.935 0-7.152 3.186-7.152 7.101.037.974.2 2.061.398 2.903H2.996c-1.363-.03-1.363 2.03 0 2h2.03c1.752 4.553 5.673 9.106 10.483 11.86a1 1 0 0 0 .988 0c3.18-1.82 6.015-4.552 8.084-7.542.97-1.402 1.766-2.861 2.35-4.319h2.072c1.363.03 1.363-2.03 0-2h-1.418c.264-1.008.4-1.948.414-2.902 0-3.915-3.22-7.1-7.154-7.1a7.183 7.183 0 0 0-4.851 1.884 7.17 7.17 0 0 0-4.84-1.885Zm0 2.002c1.594 0 3.062.72 4.023 1.91a1 1 0 0 0 1.485.08c1.24-1.089 2.785-1.967 4.183-1.99 2.816 0 5.073 2.201 5.146 4.963-.063 1.07-.227 2.173-.482 3.039H21a1 1 0 0 0-.709.287l-1.02 1.02-1.378-2.754a1 1 0 0 0-1.787 0l-1.004 2.007-1.174-2.937a1 1 0 0 0-1.763-.178l-1.7 2.555h-3.95c-.286-1.065-.478-2.11-.504-3.084.096-2.74 2.341-4.918 5.142-4.918Zm1.623 8.134 1.293 3.233c.318.801 1.433.851 1.822.082l1.107-2.215 1.108 2.215a1 1 0 0 0 1.601.258l1.705-1.706h3.336a20.622 20.622 0 0 1-1.814 3.182c-1.778 2.57-4.282 4.836-6.932 6.48-3.824-2.373-7.023-6.095-8.702-9.662h3.697a1 1 0 0 0 .836-.45l.943-1.417Z"
      />
    </Svg>
  )

  export const Movie = (props: SvgProps) => (
    <Svg
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <Path
        fill="white"
        d="M28.707 9.533a1.333 1.333 0 0 0-1.334 0l-4.706 2.32a4 4 0 0 0-4-3.853h-12a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-3.853l4.746 2.373c.182.093.383.143.587.147a1.333 1.333 0 0 0 1.167-.686c.11-.198.167-.421.166-.648V10.667a1.332 1.332 0 0 0-.626-1.134ZM20 20a1.333 1.333 0 0 1-1.333 1.333h-12A1.333 1.333 0 0 1 5.333 20v-8a1.333 1.333 0 0 1 1.334-1.333h12A1.333 1.333 0 0 1 20 12v8Zm6.667-.827-4-2v-2.346l4-2v6.346Z"
      />
    </Svg>
  )

export const  DropDown= (props: SvgProps) => (
    <Svg

      width={16}
      height={17}
      fill="none"
      {...props}
    >
      <Path
        fill="#fff"
        fillOpacity={0.87}
        d="M8 11.7c-.467 0-.933-.18-1.287-.533L2.367 6.82a.503.503 0 0 1 0-.707.503.503 0 0 1 .706 0L7.42 10.46c.32.32.84.32 1.16 0l4.347-4.347a.503.503 0 0 1 .706 0 .503.503 0 0 1 0 .707l-4.346 4.347c-.354.353-.82.533-1.287.533Z"
      />
    </Svg>
  )

  //smalls
  export const SmallFlag = (props: SvgProps) => (
    <Svg
      width={14}
      height={15}
      fill="none"
      {...props}
    >
      <Path
        fill="#fff"
        fillOpacity={0.87}
        d="M3.004 13.77a.44.44 0 0 1-.437-.437V1.667a.44.44 0 0 1 .437-.438.44.44 0 0 1 .438.438v11.666a.44.44 0 0 1-.438.438Z"
      />
      <Path
        fill="#fff"
        fillOpacity={0.87}
        d="M9.537 10.27H3.004a.44.44 0 0 1-.437-.437.44.44 0 0 1 .437-.437h6.533c.636 0 .934-.17.992-.315.059-.146-.029-.473-.484-.922l-.7-.7a1.47 1.47 0 0 1-.478-1.05c-.018-.443.157-.88.478-1.202l.7-.7c.432-.431.566-.781.502-.933-.065-.152-.397-.303-1.01-.303H3.004a.437.437 0 1 1 0-.875h6.533c1.278 0 1.686.53 1.82.846.129.315.216.98-.694 1.89l-.7.7a.761.761 0 0 0-.221.554.617.617 0 0 0 .198.443l.723.718c.893.892.805 1.557.677 1.878-.134.31-.548.846-1.803.846Z"
      />
    </Svg>
  )

  export const SmallBread  = (props: SvgProps) => (
    <Svg
 
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <Path
        stroke="#21A300"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M10.062 2.625c.744 1.006-.787 1.006 0 2.188m-3.062 7c5.906 0 5.775-.788 5.644-2.45C12.512 7.525 10.5 6.125 7 6.125s-5.513 1.4-5.644 3.238c-.131 1.662-.262 2.45 5.644 2.45Zm0-3.5c0-.657.044-1.4.437-2.188L7 8.313Zm-2.625 0c0-.657.044-1.138.437-1.882l-.437 1.881Zm5.25 0c0-.57.044-1.05.35-1.707l-.35 1.707ZM7 2.186c.744 1.007-.788 1.007 0 2.188V2.187Zm-3.063.438c.744 1.006-.787 1.006 0 2.188V2.624Z"
      />
    </Svg>
  )

  export const  SmallBriefcase= (props: SvgProps) => (
    <Svg

      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <Path
        fill="#A31D00"
        d="M5.251 1.31c-.72 0-1.315.596-1.315 1.316v.435H1.751A1.32 1.32 0 0 0 .439 4.376v.875c0 .496.281.95.724 1.172l.147.074v4.877c0 .719.596 1.314 1.316 1.314h8.747c.72 0 1.315-.595 1.315-1.315V6.497l.149-.074a1.31 1.31 0 0 0 .723-1.172v-.875c0-.72-.591-1.315-1.31-1.315h-2.187v-.435c0-.72-.595-1.315-1.315-1.315H5.251Zm0 .876h3.497c.25 0 .44.19.44.44v.435H4.81v-.435c0-.25.19-.44.44-.44Zm-3.5 1.75h10.498c.247 0 .44.193.44.44v.875a.44.44 0 0 1-.246.39L7.195 8.268a.434.434 0 0 1-.391 0L1.557 5.642a.44.44 0 0 1-.246-.391v-.875c0-.247.193-.44.44-.44Zm5.248 2.626a.437.437 0 1 0 0 .875.437.437 0 0 0 0-.875Zm-4.813.373L6.41 9.049c.37.185.81.185 1.179 0l4.224-2.114v4.439c0 .25-.19.439-.44.439H2.626a.43.43 0 0 1-.44-.44V6.936Z"
      />
    </Svg>
  )
  
  export const SmallGym = (props: SvgProps) => (
    <Svg
 
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill="#00A32F"
          d="M11.083 2.918H9.917c-.644 0-1.167.523-1.167 1.167v1.75h-3.5v-1.75c0-.644-.523-1.167-1.167-1.167H2.917c-.644 0-1.167.523-1.167 1.167V8.75c0 .644.523 1.167 1.167 1.167h1.166c.644 0 1.167-.523 1.167-1.167v-1.75h3.5v1.75c0 .644.523 1.167 1.167 1.167h1.166c.644 0 1.167-.523 1.167-1.167V4.085c0-.644-.523-1.167-1.167-1.167ZM2.917 8.75V4.085h1.166V8.75H2.918Zm7 0V4.085h1.166V8.75H9.918Zm2.916-3.5H14v2.334h-1.167V5.25ZM0 5.251h1.167v2.334H0V5.25Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h14v14.001H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )

  export const SmallMegaPhone = (props: SvgProps) => (
    <Svg
    
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <G fill="#A30089" clipPath="url(#a)">
        <Path d="M11.307 11.69a.486.486 0 0 1-.301-.104L7.584 8.9a.487.487 0 0 1-.186-.383V4.055c0-.15.068-.29.186-.383L11.005.985a.488.488 0 0 1 .788.383v9.836a.487.487 0 0 1-.486.487ZM8.372 8.28l2.447 1.922V2.37L8.372 4.292V8.28Z" />
        <Path d="M7.885 8.992H2.706A2.71 2.71 0 0 1 0 6.286 2.71 2.71 0 0 1 2.706 3.58h5.179c.269 0 .487.217.487.487v4.438a.487.487 0 0 1-.487.487ZM2.706 4.553c-.955 0-1.732.777-1.732 1.733 0 .955.777 1.732 1.732 1.732h4.692V4.553H2.706Z" />
        <Path d="M3.76 13.12c-.318 0-.63-.093-.902-.27a1.645 1.645 0 0 1-.715-1.046L1.44 8.461a.487.487 0 0 1 .953-.201l.703 3.344a.677.677 0 0 0 .806.526.682.682 0 0 0 .525-.806l-.571-2.719a.487.487 0 0 1 .953-.2l.571 2.718a1.658 1.658 0 0 1-1.62 1.996Zm8.3-4.894h-.754a.487.487 0 0 1 0-.974h.754c.258 0 .5-.1.682-.282a.967.967 0 0 0-.682-1.65h-.754a.487.487 0 0 1 0-.975h.754a1.942 1.942 0 0 1 1.37 3.313 1.923 1.923 0 0 1-1.37.568Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h14v14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
  export const SmallSocial = (props: SvgProps) => (
    <Svg
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <Path
        stroke="#00A372"
        strokeMiterlimit={10}
        strokeWidth={1.7}
        d="M4.06 12.075a1.96 1.96 0 1 0 0-3.92 1.96 1.96 0 0 0 0 3.92ZM11.288 5.95h-3.15c-.21 0-.35-.14-.35-.35V2.45c0-.21.14-.35.35-.35h3.15c.21 0 .35.14.35.35V5.6c0 .21-.14.35-.35.35Z"
      />
      <Path
        fill="#00A372"
        d="M11.287 12.075c-.07 0-.14 0-.21-.07l-3.22-3.22a.338.338 0 0 1 0-.49c.14-.14.35-.14.49 0l3.22 3.22c.14.14.14.35 0 .49-.07.07-.14.07-.28.07Z"
      />
      <Path
        fill="#00A372"
        d="M8.067 12.075c.07 0 .14 0 .21-.07l3.22-3.22c.14-.14.14-.35 0-.49a.338.338 0 0 0-.49 0l-3.22 3.22c-.14.14-.14.35 0 .49.14.07.21.07.28.07Z"
      />
      <Path
        stroke="#00A372"
        strokeMiterlimit={10}
        strokeWidth={1.7}
        d="M5.67 5.95H2.45c-.28 0-.42-.21-.35-.42l1.61-3.22c.14-.21.49-.21.56 0l1.61 3.22c.14.21 0 .42-.21.42Z"
      />
    </Svg>
  )

  export const  SmallMusic = (props: SvgProps) => (
    <Svg
   
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <Path
        fill="#A000A3"
        d="M3.365 13.002h-.483c-.527 0-.994-.21-1.312-.59-.319-.38-.449-.9-.355-1.425C1.397 9.95 2.354 9.14 3.394 9.14h1.215V2.8a1.453 1.453 0 0 1 1.353-1.445l5.31-.354a1.458 1.458 0 0 1 1.085.388c.292.273.46.658.46 1.058l-.006 6.936c0 .107-.005.212-.025.323-.183 1.035-1.14 1.846-2.18 1.846h-.482c-.528 0-.994-.21-1.313-.589-.318-.38-.448-.9-.355-1.426.182-1.036 1.14-1.847 2.18-1.847h1.215V5.344a.478.478 0 0 0-.32-.455.476.476 0 0 0-.195-.027l-5.31.354a.485.485 0 0 0-.451.482v5.131a.5.5 0 0 1-.016.124c-.004.148-.01.175-.014.202-.184 1.035-1.14 1.847-2.18 1.847Zm.028-2.897c-.566 0-1.128.48-1.228 1.05-.044.248.008.474.144.637a.73.73 0 0 0 .573.244h.483c.566 0 1.128-.48 1.229-1.05-.002 0 .005-.14.01-.88h-1.21Zm7.242-1.448c-.566 0-1.129.48-1.229 1.05-.043.247.008.473.145.637a.73.73 0 0 0 .573.244h.483c.565 0 1.128-.48 1.228-1.05a.905.905 0 0 0 .01-.159l.004-.722h-1.214ZM6.025 2.32a.485.485 0 0 0-.451.481v1.532c.122-.044.251-.071.387-.08l5.31-.354c.197-.011.394.015.579.08V2.447a.477.477 0 0 0-.32-.455.477.477 0 0 0-.195-.027l-5.31.355Z"
      />
    </Svg>
  )

  export const SmallEdu = (props: SvgProps) => (
    <Svg

      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <Path
        fill="#0055A3"
        d="m12.536 5.944-.584-.32-5.25-2.917h-.064a.618.618 0 0 0-.11-.035h-.216a.683.683 0 0 0-.117.035H6.13L.88 5.623a.583.583 0 0 0 0 1.015l1.452.805v2.765a1.75 1.75 0 0 0 1.75 1.75H8.75a1.75 1.75 0 0 0 1.75-1.75V7.443l1.166-.653v1.668a.583.583 0 0 0 1.167 0V6.452a.583.583 0 0 0-.297-.508Zm-3.203 4.264a.583.583 0 0 1-.583.584H4.083a.583.583 0 0 1-.583-.584V8.091l2.63 1.458.088.035h.053a.583.583 0 0 0 .146 0 .583.583 0 0 0 .145 0h.053a.274.274 0 0 0 .087-.035l2.631-1.458v2.117ZM6.417 8.377 2.368 6.125l4.049-2.252 4.048 2.252-4.048 2.252Z"
      />
    </Svg>
  )

  export const SmallHealth = (props: SvgProps) => (
    <Svg
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <Path
        fill="#00A3A3"
        d="M4.88 1.751c-1.722 0-3.13 1.394-3.13 3.107.017.426.088.902.175 1.27h-.614c-.597-.013-.597.888 0 .875h.887c.767 1.992 2.483 3.984 4.587 5.189a.437.437 0 0 0 .433 0c1.39-.797 2.631-1.992 3.536-3.3a9.663 9.663 0 0 0 1.028-1.89h.907c.596.014.596-.887 0-.874h-.62c.115-.441.175-.853.18-1.27 0-1.713-1.408-3.107-3.13-3.107-.8 0-1.554.305-2.122.825A3.137 3.137 0 0 0 4.88 1.75Zm0 .876c.697 0 1.34.315 1.76.836a.438.438 0 0 0 .65.035c.542-.477 1.218-.86 1.83-.87 1.232 0 2.22.962 2.251 2.17-.027.469-.1.951-.211 1.33H9.188a.437.437 0 0 0-.31.126l-.446.446-.604-1.205a.438.438 0 0 0-.781 0l-.44.878-.513-1.285a.437.437 0 0 0-.772-.078L4.58 6.128H2.85a5.916 5.916 0 0 1-.22-1.35 2.234 2.234 0 0 1 2.25-2.15Zm.71 3.559L6.155 7.6c.14.35.628.373.798.036l.484-.969.485.969c.134.267.49.324.7.113l.746-.746h1.46c-.211.463-.478.934-.794 1.392C9.256 9.519 8.16 10.51 7 11.23 5.328 10.192 3.93 8.563 3.194 7.003H4.81a.438.438 0 0 0 .366-.198l.413-.619Z"
      />
    </Svg>
  )

  export const SmallMovie = (props: SvgProps) => (
    <Svg
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <Path
        fill="#0069A3"
        d="M12.559 4.17a.584.584 0 0 0-.583 0l-2.06 1.016A1.75 1.75 0 0 0 8.166 3.5h-5.25a1.75 1.75 0 0 0-1.75 1.75v3.5a1.75 1.75 0 0 0 1.75 1.75h5.25a1.75 1.75 0 0 0 1.75-1.686l2.077 1.038c.08.041.168.063.257.065a.583.583 0 0 0 .583-.584V4.667a.583.583 0 0 0-.274-.496Zm-3.81 4.58a.583.583 0 0 1-.583.583h-5.25a.583.583 0 0 1-.583-.583v-3.5a.583.583 0 0 1 .583-.583h5.25a.583.583 0 0 1 .584.583v3.5Zm2.917-.362-1.75-.875V6.487l1.75-.875v2.776Z"
      />
    </Svg>
  )
  export const SmallGame = (props: SvgProps) => (
    <Svg
     
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <Path
        stroke="#00A372"
        strokeMiterlimit={10}
        strokeWidth={1.7}
        d="M4.06 12.075a1.96 1.96 0 1 0 0-3.92 1.96 1.96 0 0 0 0 3.92ZM11.288 5.95h-3.15c-.21 0-.35-.14-.35-.35V2.45c0-.21.14-.35.35-.35h3.15c.21 0 .35.14.35.35V5.6c0 .21-.14.35-.35.35Z"
      />
      <Path
        fill="#00A372"
        d="M11.287 12.075c-.07 0-.14 0-.21-.07l-3.22-3.22a.338.338 0 0 1 0-.49c.14-.14.35-.14.49 0l3.22 3.22c.14.14.14.35 0 .49-.07.07-.14.07-.28.07Z"
      />
      <Path
        fill="#00A372"
        d="M8.067 12.075c.07 0 .14 0 .21-.07l3.22-3.22c.14-.14.14-.35 0-.49a.338.338 0 0 0-.49 0l-3.22 3.22c-.14.14-.14.35 0 .49.14.07.21.07.28.07Z"
      />
      <Path
        stroke="#00A372"
        strokeMiterlimit={10}
        strokeWidth={1.7}
        d="M5.67 5.95H2.45c-.28 0-.42-.21-.35-.42l1.61-3.22c.14-.21.49-.21.56 0l1.61 3.22c.14.21 0 .42-.21.42Z"
      />
    </Svg>
  )
  
export const Backbutton  = (props: SvgProps) => (
  <Svg

    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="#1D1D1D" rx={4} />
    <Path
      fill="#fff"
      fillOpacity={0.87}
      d="m20.773 12.288-8.485 8.485c-.29.29-.771.29-1.06 0a.756.756 0 0 1 0-1.06l8.484-8.486c.29-.29.771-.29 1.061 0 .29.29.29.77 0 1.06Z"
    />
    <Path
      fill="#fff"
      fillOpacity={0.87}
      d="M20.773 20.773c-.29.29-.77.29-1.06 0l-8.486-8.485a.756.756 0 0 1 0-1.061c.29-.29.77-.29 1.06 0l8.486 8.485c.29.29.29.771 0 1.061Z"
    />
  </Svg>
)

export const DeleteIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF4949"
      d="M21 6.73h-.08c-5.29-.53-10.57-.73-15.8-.2l-2.04.2a.755.755 0 0 1-.83-.68c-.04-.42.26-.78.67-.82l2.04-.2c5.32-.54 10.71-.33 16.11.2.41.04.71.41.67.82a.74.74 0 0 1-.74.68Z"
    />
    <Path
      fill="#FF4949"
      d="M8.5 5.72c-.04 0-.08 0-.13-.01a.753.753 0 0 1-.61-.86l.22-1.31c.16-.96.38-2.29 2.71-2.29h2.62c2.34 0 2.56 1.38 2.71 2.3l.22 1.3c.07.41-.21.8-.61.86-.41.07-.8-.21-.86-.61l-.22-1.3c-.14-.87-.17-1.04-1.23-1.04H10.7c-1.06 0-1.08.14-1.23 1.03l-.23 1.3a.75.75 0 0 1-.74.63ZM15.21 22.75H8.79c-3.49 0-3.63-1.93-3.74-3.49L4.4 9.19c-.03-.41.29-.77.7-.8.42-.02.77.29.8.7l.65 10.07c.11 1.52.15 2.09 2.24 2.09h6.42c2.1 0 2.14-.57 2.24-2.09l.65-10.07c.03-.41.39-.72.8-.7.41.03.73.38.7.8l-.65 10.07c-.11 1.56-.25 3.49-3.74 3.49Z"
    />
    <Path
      fill="#FF4949"
      d="M13.66 17.25h-3.33c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.33c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 13.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    />
  </Svg>
)

export const SuccessICon = (props: SvgProps) => (
  <Svg

    width={96}
    height={82}
    fill="none"
    {...props}
  >
    <Path
      fill="#8685E7"
      d="M81.29 46.722v18.172c0 4.534-1.61 8.41-4.829 11.63-3.219 3.22-7.095 4.829-11.629 4.829H17.286c-4.533 0-8.41-1.61-11.629-4.83C2.437 73.306.828 69.429.828 64.895V17.35c0-4.534 1.61-8.41 4.829-11.63C8.877 2.5 12.753.891 17.287.891h47.545c2.4 0 4.629.476 6.686 1.428.572.267.915.705 1.029 1.315.114.647-.057 1.2-.514 1.657l-2.8 2.8c-.382.381-.82.572-1.315.572-.114 0-.286-.039-.514-.115a10.164 10.164 0 0 0-2.572-.343H17.286c-2.514 0-4.667.896-6.457 2.686s-2.686 3.943-2.686 6.458v47.545c0 2.515.895 4.667 2.686 6.458 1.79 1.79 3.943 2.686 6.457 2.686h47.546c2.515 0 4.667-.895 6.458-2.686 1.79-1.79 2.685-3.943 2.685-6.458V50.38c0-.495.172-.914.515-1.257l3.657-3.657c.381-.381.82-.572 1.314-.572.23 0 .458.057.686.172.762.305 1.143.857 1.143 1.657Zm13.201-27.945L47.974 65.295c-.914.914-2 1.371-3.257 1.371-1.258 0-2.343-.457-3.258-1.371L16.886 40.722c-.914-.915-1.371-2-1.371-3.258 0-1.257.457-2.343 1.371-3.257l6.286-6.286c.915-.915 2-1.372 3.258-1.372 1.257 0 2.343.457 3.257 1.372l15.03 15.03L81.69 5.976c.915-.915 2-1.372 3.258-1.372 1.257 0 2.343.457 3.257 1.372l6.286 6.286c.914.914 1.371 2 1.371 3.257 0 1.257-.457 2.343-1.371 3.257Z"
    />
  </Svg>
)

