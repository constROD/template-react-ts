import React from "react";
import { styled } from "shared/theme";

const Home: React.FC = () => {
  return (
    <HomeWrapper>
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
