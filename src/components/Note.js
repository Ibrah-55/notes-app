import React from "react";
import styled from "styled-components";
import blurOut from "./Main";
const NoteDiv = styled.div`
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-align: left;
  font-size: 18px;
  margin: 10px;
  min-width: 300px;
`;

const H = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;
const Note = (props) => {
  return (
    <NoteDiv>
      <H>{props.note.title}</H>
      <p>{props.note.text}</p>
    </NoteDiv>
  );
};
export default Note;
