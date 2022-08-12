// import TextArea from "./components/TextArea.js"
import { useState } from "react"
import styled from "styled-components"
import { MarkdownLogo, ExpandIcon, MinimizeIcon } from "./utils/index.js"
import {
  BACKGROUND_COLOR,
  HEADER_COLOR,
  BODY_COLOR,
  customColor
} from "./utils/globalVar.js"
import { CreatorWrapper, WrapIcons, GitHubIconStyled, LinkedinIconStyled } from "./styled/AppStyled.js"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"
import "./App.css"

const WrapAll = styled.div`
  background-color: ${BACKGROUND_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 105vh;
  text-align:center;
`

const ContainerTextArea = styled.div`
  display: ${(x) => (x.hasToHidden ? "none" : "flex")};
  background-color: ${HEADER_COLOR};
  color: black;
  width: 75vw;
  flex-direction: column;
  border-radius: 5px;
  border: 1px black solid;
  height: ${(x) => (x.expandedTextArea ? "95vh" : "null")};
  min-height: 200px;
`
const ContainerPreviwer = styled.div`
  display: ${(x) => (x.hasToHidden ? "none" : "flex")};
  background-color: ${HEADER_COLOR};
  color: black;
  width: 95vw;
  flex-direction: column;
  border-radius: 5px;
  border: 1px black solid;
  margin-top: ${(x) => (x.expandedPreviewer ? "0" : "12px")};
  margin-bottom: 15px;
  height: ${(x) => (x.expanded ? "auto" : "100%")};
  min-height: 100%;
`

const Header = styled.div`
  display: flex;
  border-bottom: 3px ${customColor(20, true)} solid;
  align-items: center;
  height: 65px;

  & > h2 {
    margin-left: 10px;
    text-align: center;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    list-style: none;
    padding: 0;
    cursor: pointer;
    width: 64px;
    height: 100%;
    border-left: 1px transparent solid;
  }

  & > div:hover {
    border-left: 1px ${(x) => (x.expanded ? "white" : "black")} solid;
  }
`

const MinimizeIconStyled = styled(MinimizeIcon)`
  fill: ${(x) => (x.expanded ? "white" : "black")};
`

const MarkdownLogoStyled = styled(MarkdownLogo)`
  height: 100%;
  width: 54px;
  margin-left: 10px;
  fill: ${(x) => (x.expanded ? "white" : "black")};
`

const BodyStyleTextArea = styled.textarea`
  background-color: ${BODY_COLOR};
  height: 100%;
  color: black;

  margin: 0;
  padding: 10px;
  border: 0;
  resize: ${(x) => (x.expanded ? "none" : "vertical")};
  height: ${(x) => (x.expandedTextArea ? "95vh" : "null")};
  min-height: 200px;

  line-height: 1.7;
  font-size: 1rem;
  outline: none;

  box-shadow: inset 1px 1px 3px black;

  &:focus {
    box-shadow: inset 1px 1px 5px black;
  }
`

const BodyStylePreviewer = styled.div`
  background-color: ${BODY_COLOR};
  height: ${(x) => (x.expanded ? "auto" : "100%")};
  min-height: 500px;
  border: 0;
  line-height: 1.7;
  font-size: 1.2rem;
  outline: none;
  display: flex;
  flex-direction: column;

  box-shadow: inset 1px 1px 3px black;
  width: 100%;

  & > div {
    padding: 15px;
    overflow-wrap: break-word;
  }

  & > div > p > img {
    width: 100%;
  }

  & > div > p > code {
    background-color: grey;
    /* margin:10px; */
    padding:3px;
  }
  
  & > div > blockquote{
    border-left: 5px ${customColor(5)} solid;
    padding-left: 5px;
    
  }
  & > div > blockquote > p{
    white-space: pre-wrap;
  }
  
  
  & > div > table, div>table * {
    border:1px solid black;
  }
`

function App() {
  const [textArea, setTextArea] = useState()
  const [expandTextArea, setExpandTextArea] = useState(false)
  const [expandPreviewer, setExpandPreviewer] = useState(false)
  console.log("expandPreviewer:", expandPreviewer)

  const handleClickTextArea = () => {
    setExpandTextArea(!expandTextArea)
  }
  const handleClickPreviewer = () => {
    setExpandPreviewer(!expandPreviewer)
  }

  const handleChanges = (e) => {
    setTextArea(e.target.value)
  }

  return (
    <>

      <WrapAll>

        <h1>Markdown live editor</h1>
        <CreatorWrapper>
          <h2>By <span>Juan Pastén Castillo</span></h2>
          <WrapIcons>
            <a href="https://github.com/JuanPastenCastillo"
              target="blank"
              rel="noreferrer">
              <GitHubIconStyled />
            </a>
            <a href="https://www.linkedin.com/in/juanpastencastillo/"
              target="blank"
              rel="noreferrer">
              <LinkedinIconStyled />
            </a>
          </WrapIcons>
        </CreatorWrapper>
        <>
          <ContainerTextArea
            expandedTextArea={expandTextArea}
            hasToHidden={expandPreviewer}
          >
            <Header expanded={expandTextArea}>
              <MarkdownLogoStyled expanded={expandTextArea} />
              <h2> Type text below</h2>
              <div onClick={handleClickTextArea}>
                {expandTextArea ? (
                  <MinimizeIconStyled expanded={expandTextArea} />
                ) : (
                  <ExpandIcon />
                )}
              </div>
            </Header>
            <BodyStyleTextArea
              onChange={handleChanges}
              placeholder={"Write some text here"}
              expanded={expandTextArea}
            />
          </ContainerTextArea>
        </>
        <>
          <ContainerPreviwer
            expanded={expandPreviewer}
            hasToHidden={expandTextArea}
          >
            <Header expanded={expandPreviewer}>
              <MarkdownLogoStyled expanded={expandPreviewer} />
              <h2>Previewer</h2>
              <div onClick={handleClickPreviewer}>
                {expandPreviewer ? (
                  <MinimizeIconStyled expanded={expandPreviewer} />
                ) : (
                  <ExpandIcon />
                )}
              </div>
            </Header>
            <BodyStylePreviewer expanded={expandPreviewer}>
              <div>
                {/* <ReactMarkdown children={textArea} remarkPlugins={[remarkGfm]} /> */}
                <ReactMarkdown

                  children={textArea}
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "")
                      return !inline && match ? (
                        <SyntaxHighlighter
                          children={String(children).replace(/\n$/, "")}
                          style={dark}
                          language={match[1]}
                          PreTag="div"
                          className="ReactMarkdown"
                          {...props}
                        />
                      ) : (
                        <code className={className} {...props}>{children}</code>
                      )
                    }
                  }}
                />
              </div>
            </BodyStylePreviewer>
          </ContainerPreviwer>
        </>
      </WrapAll>

    </>
  )
}

export default App
