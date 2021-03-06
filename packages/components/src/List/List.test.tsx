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

import React from 'react'
import { renderWithTheme, assertSnapshot } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { List } from './List'
import { ListItem } from './ListItem'

import 'jest-styled-components'

describe('List', () => {
  test('Default, should be a ul', () =>
    assertSnapshot(
      <List>
        <ListItem>🥑</ListItem>
        <ListItem>🍕</ListItem>
        <ListItem>🥨</ListItem>
      </List>
    ))

  test('bulleted', () =>
    assertSnapshot(
      <List type="bullet">
        <ListItem>🥑</ListItem>
        <ListItem>🍕</ListItem>
        <ListItem>🥨</ListItem>
      </List>
    ))

  test('numerically ordered', () =>
    assertSnapshot(
      <List type="number">
        <ListItem>🥑</ListItem>
        <ListItem>🍕</ListItem>
        <ListItem>🥨</ListItem>
      </List>
    ))

  test('numerically ordered marked as nomarker', () => {
    renderWithTheme(
      <List type="number" nomarker>
        <ListItem>🥑</ListItem>
        <ListItem>🍕</ListItem>
        <ListItem>🥨</ListItem>
      </List>
    )

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
    expect(list).toHaveStyle('list-style-type: none;')
    // Padding unset due to default reset applied
    expect(list).toMatchSnapshot()
  })
})
