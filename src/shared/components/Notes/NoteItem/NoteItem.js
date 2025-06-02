import {
  Wrapper,
  Text,
  CancelIconContainer,
  Description,
} from "./NoteItem.styles";

import CancelIcon from "@mui/icons-material/Cancel";

const NoteItem = ({ note, deleteNote, noteId }) => (
  <Wrapper>
    <CancelIconContainer onClick={() => deleteNote(noteId)}>
      <CancelIcon />
    </CancelIconContainer>
    <Text>
      <Description>
        <p>{note}</p>
      </Description>
    </Text>
  </Wrapper>
);

export default NoteItem;
