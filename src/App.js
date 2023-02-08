import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import LoadingScene from "./scenes/LoadingScene";
import GameScene from "./scenes/GameScene";

import { getSize } from "./helpers/utils";

import { CustomStage } from "./CustomStage";

const App = () => {
  const [size, setSize] = useState(getSize);
  const isLoading = useSelector((state) => state.preLoading.value);

  useEffect(() => {
    const update = () => {
      requestAnimationFrame(() => setSize(getSize()));
    };
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <CustomStage
      options={{
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
        backgroundColor: 0xe92162,
        resizeTo: window,
      }}
      width={window.innerWidth}
      height={window.innerHeight}
    >
      {isLoading ? <LoadingScene size={size} /> : <GameScene size={size} />}
    </CustomStage>
  );
};

export default App;
