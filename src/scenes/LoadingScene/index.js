import { Container } from "@pixi/react";
import LoaderBarFill from "./LoaderBarFill";

const LoadingScene = (props) => {
  const { size } = props;
  return (
    <Container>
      <LoaderBarFill size={size} />
    </Container>
  );
};

export default LoadingScene;
