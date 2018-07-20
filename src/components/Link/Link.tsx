// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../themes'
export { ThemeInterface }
// End Typescript component boilerplate

export const Link = styled('a')`
  color: ${props => props.theme.colors.linkColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
