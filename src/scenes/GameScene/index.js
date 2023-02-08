import { Container, Sprite } from "@pixi/react";
import Background from "../../components/Background";

const GameScene = (props) => {
  const { size } = props;
  return (
    <Container>
      <Background image="day-background" stageSize={size} />
    </Container>
  );
};

export default GameScene;
