import { Graphics } from "@pixi/react";
import { useCallback, useEffect, useState } from "react";
import { manifest } from "../../assets";
import { Assets } from "pixi.js";
import { useDispatch } from "react-redux";
import { finishLoading } from "../../store/slices/loadingSlice";

const BAR_WIDTH_PERCENTAGE = 0.8;

const LoaderBarFill = (props) => {
  const { size: stageSize } = props;
  const { loadingPercentage, setLoadingPercentage } = useState(0);
  const dispatch = useDispatch();

  const draw = useCallback(
    (g) => {
      const loaderBarWidth = stageSize.width * BAR_WIDTH_PERCENTAGE;

      g.clear();
      g.beginFill(0x00aa00, 1);
      g.drawRoundedRect(0, 0, loaderBarWidth * loadingPercentage, 50);
      g.endFill();
      g.lineStyle(10, 0x0, 1);
      g.drawRoundedRect(0, 0, loaderBarWidth, 50);
      g.endFill();
    },
    [stageSize, loadingPercentage]
  );

  useEffect(() => {
    async function loadAssets() {
      Assets.init({ manifest: manifest });
      const bundleIds = manifest.bundles.map((bundle) => bundle.name);
      await Assets.loadBundle(bundleIds, (progress) => {
        setLoadingPercentage(progress);
      });
      // dispatch(finishLoading());
    }
    loadAssets();
  }, []);

  return (
    <Graphics
      draw={draw}
      position={{
        x: (stageSize.width - stageSize.width * BAR_WIDTH_PERCENTAGE) / 2,
        y: (stageSize.height / 4) * 3,
      }}
    />
  );
};

export default LoaderBarFill;
