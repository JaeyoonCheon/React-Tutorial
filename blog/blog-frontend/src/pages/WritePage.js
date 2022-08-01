import React from "react";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";
import Responsive from "../components/common/Responsive";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer></EditorContainer>
      <TagBoxContainer></TagBoxContainer>
      <WriteActionButtonsContainer></WriteActionButtonsContainer>
    </Responsive>
  );
};

export default WritePage;
