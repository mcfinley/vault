import React from 'react'
import styled from 'styled-components'

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const InnerWrap = styled.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #efefef;
  background: white;

  display: flex;
  align-items: center;
  justify-content: center;
`

export default ({ title, children, right = null, ...props }) => (
  <div {...props}>
    <TopRow>
      <h1>{title}</h1>
      {right}
    </TopRow>

    <InnerWrap>{children}</InnerWrap>
  </div>
)