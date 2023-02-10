import { Container, Sprite, useTick } from "@pixi/react";
import { useEffect, useRef, useState } from "react";
import Background from "../../components/Background";
import Card from "../../components/Card";
import { numberOfPlayers } from "../../helpers/utils";

const originCardPositions = [
  { x: -72, y: 200 },
  { x: 0, y: 200 },

  { x: 478, y: 0 },
  { x: 550, y: 0 },

  { x: 378, y: -300 },
  { x: 450, y: -300 },

  { x: -72, y: -400 },
  { x: 0, y: -400 },

  { x: -550, y: -300 },
  { x: -478, y: -300 },

  { x: -642, y: 0 },
  { x: -570, y: 0 },
];

const annotationPositions = [
  { x: -96, y: 300 },
  { x: 454, y: 100 },
  { x: 354, y: -200 },
  { x: -96, y: -300 },
  { x: -574, y: -200 },
  { x: -666, y: 100 },
];

const GameScene = (props) => {
  const { size } = props;
  const [fromPositions, setFromPositions] = useState(originCardPositions);
  const [cardGivingOrder, setCardGivingOrder] = useState([]);
  const timeIter = useRef(0);

  const giveCardsToPlayers = (dealer) => {
    timeIter.current = 0;
    let order = [];
    let positions = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      order[i * 2] = (i - dealer + 5) % 6;
      order[i * 2 + 1] = ((i - dealer + 5) % 6) + 6;
      positions[i * 2] = { ...originCardPositions[dealer * 2] };
      positions[i * 2 + 1] = { ...originCardPositions[dealer * 2] };
    }
    for (let i = 0; i < 2 * numberOfPlayers; i++) {
      positions[i].y += 110;
      positions[i].x += 36;
    }
    setFromPositions(positions);
    setCardGivingOrder(order);
  };

  useEffect(() => {
    setInterval(() => {
      giveCardsToPlayers(parseInt(Math.random() * 6));
      // giveCardsToPlayers(2);
    }, 3000);
  }, []);

  useEffect(() => {
    console.log("render");
  });

  return (
    <Container>
      <Background
        image="day-background"
        anchor={{ x: 0.5, y: 0.5 }}
        stageSize={size}
      >
        <Sprite image="day-deck" anchor={{ x: 0.5, y: 0.5 }} />
        {fromPositions.map((pos, index) => (
          <Card
            image="day-card"
            src={pos}
            dst={originCardPositions[index]}
            order={cardGivingOrder[index]}
            key={"card" + index}
          />
          // <Sprite image="day-card" position={pos} key={"card" + index} />
        ))}
        {annotationPositions.map((pos, index) => (
          <Sprite image="day-annotation" position={pos} key={"anno-" + index} scale={{y:1.1, x:1}}/>
        ))}
      </Background>
    </Container>
  );
};

export default GameScene;
