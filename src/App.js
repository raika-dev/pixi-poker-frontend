import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Stage } from "@pixi/react";

import LoadingScene from "./scenes/LoadingScene";
import GameScene from "./scenes/GameScene";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

const getSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

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
    <Stage
      options={{
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
        backgroundColor: 0xe92162,
        resizeTo: window,
      }}
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <Provider store={store}>
        {isLoading ? <LoadingScene size={size} /> : <GameScene size={size} />}
      </Provider>
    </Stage>
  );
};

export default App;
