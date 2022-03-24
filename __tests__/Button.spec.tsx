import '@testing-library/jest-dom'
import { Button } from '@chakra-ui/react'

import { render } from 'jest.utils'

test('Button', () => {
  // expect(COMPONENTS).toBeTruthy()
  const rendered = render(<Button />)
  expect(rendered.container).toMatchSnapshot()
})
