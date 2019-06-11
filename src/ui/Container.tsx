import styled from "@emotion/styled"
import { media } from "ui/styles"

export const Container = styled.div`
  max-width: 100vw;
  ${media.md`width: 90%;`} ${media.lg`max-width: 1260px;`}
  
  margin: 0 auto;
`
