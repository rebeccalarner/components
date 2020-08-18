/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import { reset, CompatibleHTMLProps } from '@looker/design-tokens'
import React, { KeyboardEvent, ReactNode, forwardRef, Ref } from 'react'
import styled, { css } from 'styled-components'
import { IconButton } from '../Button/IconButton'
import { Text, TextProps } from '../Text'
import { TruncateProps, truncate } from '../Text/truncate'
import { useWrapEvent, useVisibleFocus, FocusVisibleProps } from '../utils'

export interface ChipBaseProps extends TruncateProps {
  children: ReactNode
  disabled?: boolean
  onDelete?: () => void
}

export type ChipProps = ChipBaseProps & CompatibleHTMLProps<HTMLSpanElement>

export const chipStyle = ({ focusVisible }: FocusVisibleProps) => css`
  ${reset}

  align-items: center;
  background: ${({ theme }) => theme.colors.keySubtle};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.keyInteractive};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  height: 28px;
  max-width: 320px;
  min-width: 44px;
  padding: ${({ theme: { space } }) => `${space.xxsmall} ${space.xsmall}`};

  &:hover,
  &:active,
  &:focus {
    background: ${(props) => props.theme.colors.keyAccent};
  }

  &.focus,
  &:focus {
    outline: none;
  }

  ${({ theme: { colors } }) =>
    focusVisible && `box-shadow: 0 0 0 1px ${colors.key};`}

  &:active {
    border-color: ${({ theme }) => theme.colors.key};
  }

  &[disabled],
  &[aria-disabled='true'] {
    background: ${({ theme }) => theme.colors.neutralAccent};
    color: ${({ theme }) => theme.colors.neutral};

    &:hover {
      background: ${({ theme }) => theme.colors.neutralAccent};
    }
  }
`

const ChipStyle = styled.span<FocusVisibleProps>`
  ${chipStyle}
`

export const ChipLabel = styled(Text)<TextProps & TruncateProps>`
  font-size: inherit;
  ${truncate}
`

const ChipJSX = forwardRef((props: ChipProps, ref: Ref<HTMLSpanElement>) => {
  const {
    children,
    disabled,
    onBlur,
    onDelete,
    onKeyUp,
    onKeyDown,
    truncate = true,
    ...restProps
  } = props

  function handleDelete() {
    if (!disabled) {
      onDelete && onDelete()
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLSpanElement>) {
    if (event.key === 'Backspace') {
      onDelete && onDelete()
    }
  }

  const focusVisibleProps = useVisibleFocus({
    onBlur,
    onKeyDown: useWrapEvent(handleKeyDown, onKeyDown),
    onKeyUp,
  })

  return (
    <ChipStyle
      aria-disabled={disabled}
      ref={ref}
      tabIndex={disabled ? undefined : 0}
      {...restProps}
      {...focusVisibleProps}
    >
      <ChipLabel truncate={truncate}>{children}</ChipLabel>
      {onDelete && !disabled && (
        <IconButton
          disabled={disabled}
          icon="Close"
          label="Delete"
          ml="xsmall"
          onClick={handleDelete}
          size="xxsmall"
        />
      )}
    </ChipStyle>
  )
})

ChipJSX.displayName = 'ChipJSX'

export const Chip = styled(ChipJSX)``
