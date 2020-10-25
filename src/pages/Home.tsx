import React from "react";
import { Button } from "shared/elements";
import { styled } from "shared/theme";

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Button onClick={() => console.log("Test Clicked")}>
        Click For Testing
      </Button>
      <h1>
        Hello Home! <span>test</span>
      </h1>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.primary};

    & > span {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export default Home;
