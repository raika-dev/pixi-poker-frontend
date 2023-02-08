import { Container } from "@pixi/react";
import Background from "../../components/Background";
import Deck from "../../components/Table";

const GameScene = (props) => {
  const { size } = props;
  return (
    <Container>
      <Background image="day-background" stageSize={size} />
      <Deck image="day-deck" stageSize={size} />
    </Container>
  );
};

export default GameScene;
