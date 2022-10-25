import React, {useState} from "react";
import styled from "styled-components";
import { useRef, useEffect } from "react";
import Note from "./Note";
import firebaseConfig from '../Firebase';


const NoteInput = styled.form`
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),
    0 2px 6px 2px rgba(60,64,67,.15);
  width:600px;
  border-radius:8px;
  margin:20px auto;
  padding:20px;
  !
  `

const Title = styled.input`
    border:none;
    color:#000;
    display:block;
    width:100%;
    font-size:18px;
    margin:10px 0;
    outline:none;
    &::placeholder{
      color:#3c4043;
      opacity:1;
    }
  `


const TextArea = styled.textarea`
      border:none;
      color:#000;
      display:block;
      width:100%;
      font-family: 'Noto Sans', sans-serif;
      font-size:13px;
      font-weight:bold;
      outline:none;
      resize: none;
      overflow: hidden;
      min-height: 10px;
      &::placeholder{
        color:#3c4043;
        opacity:1;
      }
      `
const NoteCon = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:center;
`

const autoGrow = (elem) => {

  elem.current.style.height = "5px";
  elem.current.style.height = 10 + elem.current.scrollHeight + "px";
};



const Main = (props) => {

   const [showinput, setShowinput] = useState("");
   const [textvalue, setTextValue] = useState("");
   const [titlevalue, setTitlevalue] = useState("");
   const textAreaRef = useRef(null);
   const [textFocused, setTextFocused] = useState(false);
   const [titleFocused, setTitleFocused] = useState(false);
   const [notes, setNotes] = useState([]);


const blurOut = () => {
  if (!textFocused && !titleFocused) {
    if (textvalue !== "" || titlevalue !== "") {
      setShowinput(false);
      let noteObj = {
        title: titlevalue,
        text: textvalue,
      };
      setTextValue("");
      setTitlevalue("");
      try {
        setNotes([...notes, noteObj]);
        const db = firebaseConfig.database().ref("data");
        db.push().set(noteObj);
      } catch (error) {
        console.log(error);
      }
    }
  }
};

const getData = () => {
  let notesArr = [];
  try {
    const db = firebaseConfig.database().ref("data");
    db.orderByValue().once("value", (snapshot) => {
      snapshot.forEach((note) => {
         console.log(notes)
        // setNotes([...notes, note.val()])
        notesArr.push(note.val());
      });

      if (notesArr.length !== 0) {
        setNotes(notesArr);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  getData();
}, []);
    return (
      <main
        textvalue={textvalue}
        titlevalue={titlevalue}
        showinput={showinput}
        onShowinput={(state) => setShowinput(state)}
        onTextChange={(state) => setTextValue(state)}
        onTitleChange={(state) => setTitlevalue(state)}
        onTextFocus={(state) => setTextFocused(state)}
        onTitleFocus={(state) => setTitleFocused(state)}
        onFocus={() => props.onTitleFocus(true)}
        onBlur={() => props.onTitleFocus(false)}

      >

        <NoteInput action="">
          {props.showinput ? (
            <Title
              type="text"
              name=""
              id=""
              placeholder="Title"
              value={props.titlevalue}
              onFocus={() => props.onTitleFocus(true)}
              onBlur={() => props.onTitleFocus(false)}
              onChange={(e) => props.onTitleChange(e.target.value)}
              notes={notes}
            />
          ) : (
            ""
          )}{" "}
          <NoteCon notes={notes} />
          <TextArea
            name=""
            id=""
            cols="30"
            rows="1"
            placeholder="Take a note..."
            value={props.textvalue}
            onFocus={() => {
              props.onShowinput(true);
              textAreaRef.current.focus();
            }}
            onInput={() => autoGrow(textAreaRef)}
            ref={textAreaRef}
            onChange={(e) => props.onTextChange(e.target.value)}
            onBlur={() => props.onTextFocus(false)}
          />
        </NoteInput>
      </main>
    );
}
export default Main;
