import React from "react";
import rehypeReact from "rehype-react";
import styled from "styled-components";

const Heading = styled.h1`
  color: purple;
`;

const Paragraph = styled.p`
  color: #2ecc40;
`;

const RowBlock = styled.div`
  display: flex;
  > p {
    color: #3366ff;
  }
`;

const CenterBlock = styled.div`
  text-align: center;
`;

const ColumnBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageBlock = styled.div`
 
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: Heading,
    p: Paragraph,
    "row-block": RowBlock,
    "center-block": CenterBlock,
    "column-block": ColumnBlock,
    "image-block": ImageBlock
  }
}).Compiler;

export default renderAst;
