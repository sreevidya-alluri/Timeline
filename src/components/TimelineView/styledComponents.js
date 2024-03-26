// styledComponents.js
import styled from 'styled-components/macro'

export const TimeLineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1110px;
  height: 100vh;
`

export const HeaderContainer = styled.div`
  text-align: center;
  color: #171f46;
  font-family: "Roboto";
`

export const Heading = styled.h1`
  text-align: center;
  color: #171f46;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 18px;
  line-height: 2.7;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const CCBPHeading = styled.span`
  color: #2b237;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 24px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
