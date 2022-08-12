import { GitHubIcon, LinkedinIcon } from "../utils/index.js"
import styled from "styled-components"
export const CreatorWrapper = styled.div`
  /* border: 1px white solid; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width:100%; */
  align-items: center;

  h2 {
    font-size: calc(1.1rem + 1vw);
    text-align: center;
    margin: 0;
  }

  span {
    color: hsl(55.6, 38.3%, 52%);
  }

  a {
    fill: snow;
  }

  a:hover {
    fill: hsl(208, 100%, 17.1%);
  }

  a > svg {
    width: 100%;
    height: 44px;
    /* border: 1px black solid; */
  }
`

export const WrapIcons = styled.div`
  /* border:1px yellowgreen solid; */
  display: flex;
  /* justify-content: center; */
`

export const GitHubIconStyled = styled(GitHubIcon)`
  /* display:inline; */
  /* border:1px yellowgreen solid; */
  /* margin-left: 20px; */
  /* margin-right: 20px; */
  /* padding-right: 20px; */
`
export const LinkedinIconStyled = styled(LinkedinIcon)`
  /* display:inline; */
  /* border: 1px crimson solid; */
  /* margin-left: 20px; */
  /* padding-left: 20px; */
`
