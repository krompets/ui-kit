import { Icon, IconProps } from '@chakra-ui/react'
import { FC } from 'react'

export const IconNode: FC<IconProps> = props => (
  <Icon
    width="22px"
    height="22px"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 3c0-.55.45-1 1-1h2V0H3C1.34 0 0 1.34 0 3v2h2V3ZM2 19v-2H0v2c0 1.66 1.34 3 3 3h2v-2H3c-.55 0-1-.45-1-1ZM19 0h-2v2h2c.55 0 1 .45 1 1v2h2V3c0-1.66-1.34-3-3-3ZM20 19c0 .55-.45 1-1 1h-2v2h2c1.66 0 3-1.34 3-3v-2h-2v2ZM18 13.87V8.13c0-.72-.38-1.38-1-1.73l-5-2.88c-.31-.18-.65-.27-1-.27s-.69.09-1 .27L5 6.39c-.62.36-1 1.02-1 1.74v5.74c0 .72.38 1.38 1 1.73l5 2.88c.31.18.65.27 1 .27s.69-.09 1-.27l5-2.88c.62-.35 1-1.01 1-1.73Zm-8 2.3-4-2.3V9.24l4 2.33v4.6Zm1-6.33L7.04 7.53 11 5.25l3.96 2.28L11 9.84Zm5 4.03-4 2.3v-4.6l4-2.33v4.63Z"
      fill="currentColor"
    />
  </Icon>
)

export default IconNode
