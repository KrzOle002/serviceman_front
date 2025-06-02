import { Wrapper } from "./NotesPage.styles";
import Notes from "../../shared/components/Notes/Notes";
import PageTitle from "../../shared/components/PageTitle/PageTitle";

const NotesPage = () => {
  return (
    <Wrapper>
      <PageTitle>Notatki</PageTitle>
      <Notes />
    </Wrapper>
  );
};

export default NotesPage;
