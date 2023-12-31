import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill={props.color}
      d="M8 1.334a6.667 6.667 0 1 0 0 13.334A6.667 6.667 0 0 0 8 1.334Zm0 12A5.333 5.333 0 1 1 8 2.67a5.333 5.333 0 0 1 0 10.665Z"
    />
    <path
      fill="#fff"
      d="M8.227 4.967a1.133 1.133 0 0 0-1.234-.2 1.067 1.067 0 0 0-.666.987v4.493a1.067 1.067 0 0 0 .666.987c.145.066.302.1.46.1a1.16 1.16 0 0 0 .774-.3l2.44-2.247a1.068 1.068 0 0 0 0-1.573l-2.44-2.247Zm-.56 4.767V6.267L9.54 8.001 7.667 9.734Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
