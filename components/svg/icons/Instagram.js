import { svgInternalShape } from "@/shapes/svg";
import defaultProps from "./defaultProps";

export default function Instagram({
  className,
  size = 48,
  fill = "currentColor",
}) {
  const uniqueProps = {
    viewBox: "0 0 48 48",
    width: size,
    height: size,
    fill,
    className,
  };

  const mergedSvgProps = Object.assign(defaultProps, uniqueProps);
  return (
    <svg {...mergedSvgProps}>
      <title>Instagram icon</title>
      <path d="M29.9455,11.368H18.0475a6.26316,6.26316,0,0,0-6.263,6.264V30.28a6.263,6.263,0,0,0,6.263,6.263h11.898a6.2638,6.2638,0,0,0,6.264-6.263V17.632a6.264,6.264,0,0,0-6.264-6.264m1.873,12.597a7.83453,7.83453,0,0,1-15.669-.029,7.9667,7.9667,0,0,1,2.402-5.684,7.50818,7.50818,0,0,1,5.471-2.15c4.837.141,7.897,3.227,7.796,7.863m.19-6.257a1.827,1.827,0,1,1,1.827-1.827,1.827,1.827,0,0,1-1.827,1.827m-8.0626,1.033c3.346.097,5.302,2.029,5.233,5.166a5.19454,5.19454,0,1,1-10.389.029,5.316,5.316,0,0,1,1.601-3.791,4.87382,4.87382,0,0,1,3.413-1.406c.047,0,.095.001.142.002M23.9995.3695a23.6305,23.6305,0,1,0,23.631,23.631A23.6302,23.6302,0,0,0,23.9995.3695m14.294,29.969a8.42131,8.42131,0,0,1-8.388,8.456H18.0885a8.49239,8.49239,0,0,1-8.472-8.456V17.6675a8.50181,8.50181,0,0,1,8.472-8.467h11.817a8.43075,8.43075,0,0,1,8.388,8.467Z" />
    </svg>
  );
}

Instagram.displayName = "SVG.Instagram";

Instagram.propTypes = {
  ...svgInternalShape,
};

Instagram.defaultProps = defaultProps;
