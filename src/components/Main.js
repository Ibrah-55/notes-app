import React, {useState} from "react";
import styled from "styled-components";


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


const Main = () => {
   const [showInput, setShowInput] = useState(false);
   const [textValue, setTextValue] = useState("");
   const [titleValue, setTitleValue] = useState("");
    return (
      <main
        textValue={textValue}
        titleValue={titleValue}
        showInput={showInput}
        onShowInput={(state) => setShowInput(state)}
        onTextChange={(state) => setTextValue(state)}
        onTitleChange={(state) => setTitleValue(state)}
      >
        <NoteInput action="">
          {this.props.showInput ? (
            <Title
              type="text"
              name=""
              id=""
              placeholder="Title"
              value={this.props.titleValue}
              onFocus={() => this.props.onTitleFocus(true)}
              onBlur={() => this.props.onTitleFocus(false)}
              onChange={(e) => this.props.onTitleChange(e.target.value)}
            />
          ) : (
            ""
          )}{" "}
          <TextArea name="" id="" cols="30" rows="1"
            placeholder="Take a note..."
            value={this.props.textValue}
            onFocus={()=> {
              this.props.onShowInput(true);
            }}
            onChange={(e)=>this.props.onTextChange(e.target.value)}
          />
        </NoteInput>
      </main>
    );
}
export default Main;
