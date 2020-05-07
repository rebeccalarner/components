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

import React, {
  useState,
  SyntheticEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import { Card, CardContent, Slider, Heading } from '@looker/components'
import styled from 'styled-components'

export const SliderDemo = () => {
  const [value1, setValue1] = useState(8)
  const [value2, setValue2] = useState(500)
  const [value11, setValue11] = useState(3)

  const handleEvent = (cb: Dispatch<SetStateAction<number>>) => {
    return (event: SyntheticEvent<HTMLInputElement>) => {
      const target = event.target as HTMLInputElement
      cb(parseInt(target.value, 10))
    }
  }
  const onChange1 = handleEvent(setValue1)
  const onChange2 = handleEvent(setValue2)
  const onChange11 = handleEvent(setValue11)

  return (
    <DemoWrapper>
      <Heading as="h1" mb="small">
        Single Value Slider
      </Heading>
      <DemoGrid>
        <Card height="auto">
          <CardContent p="xxlarge">
            <Heading>Min: 0, Max: 11</Heading>
            <Slider
              min={0}
              max={11}
              value={value1}
              onChange={onChange1}
              aria-labelledby="test-id"
            />
            <Heading pt="large">Min: 100, Max: 10000, Step: 100</Heading>
            <Slider
              min={100}
              max={10000}
              value={value2}
              step={100}
              onChange={onChange2}
            />
          </CardContent>
        </Card>
        <Card height="auto">
          <CardContent p="xxlarge">
            <Heading pt="large">Disabled:</Heading>

            <Slider
              min={0}
              max={5}
              value={value11}
              onChange={onChange11}
              disabled
            />
            <Heading pt="large">Uncontrolled:</Heading>
            <Slider min={0} max={5} />
          </CardContent>
        </Card>
      </DemoGrid>
    </DemoWrapper>
  )
}

const DemoWrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
`

const DemoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;
`