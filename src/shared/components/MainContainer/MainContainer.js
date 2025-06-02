import { Container, Wrapper } from "./MainContainer.styles";
import Routes from "../../../routes/Routes";
import RefreshToken from "../RefreshToken/RefreshToken";

const MainContainer = () => {
  return (
    <Wrapper>
      <RefreshToken/>
      <Container>
        <Routes />
      </Container>
    </Wrapper>
  );
};

export default MainContainer;
