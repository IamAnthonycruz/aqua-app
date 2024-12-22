import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 30"
    height={50}
    width={70}
    {...props}
  >
    <Path
      fill="#ffff"
      d="M10.406 8.813c0-2.672 2.109-4.828 4.781-4.828s4.828 2.156 4.828 4.828-2.156 4.781-4.828 4.781-4.781-2.109-4.781-4.781M12.797 18c0-1.125.891-2.016 2.016-2.016s1.969.891 1.969 2.016-.844 2.016-1.969 2.016-2.016-.891-2.016-2.016m-8.813-3.609c0-1.781 1.453-3.188 3.234-3.188s3.188 1.406 3.188 3.188S9 17.579 7.218 17.579s-3.234-1.406-3.234-3.188"
    />
  </Svg>
);
export default SVGComponent;
