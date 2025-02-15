import { FC } from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

export const IconCopy: FC<IconProps> = props => (
  <Icon
    height="16px"
    width="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.6668 0.666992H2.66683C1.9335 0.666992 1.3335 1.26699 1.3335 2.00033V11.3337H2.66683V2.00033H10.6668V0.666992ZM12.6668 3.33366H5.3335C4.60016 3.33366 4.00016 3.93366 4.00016 4.66699V14.0003C4.00016 14.7337 4.60016 15.3337 5.3335 15.3337H12.6668C13.4002 15.3337 14.0002 14.7337 14.0002 14.0003V4.66699C14.0002 3.93366 13.4002 3.33366 12.6668 3.33366ZM12.6668 14.0003H5.3335V4.66699H12.6668V14.0003Z"
      fill="currentColor"
    />
  </Icon>
)

export default IconCopy
