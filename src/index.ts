import kaboom from "kaboom";
import createSceneGame from "./scenes/game";
import createSceneLose from "./scenes/lose";

kaboom({
  font: "sinko",
  background: [0, 0, 255],
});

const gameProperties = { score: 0 };

loadBean();
scene("game", () => createSceneGame(gameProperties));
scene("lose", () => createSceneLose(gameProperties));
go("game");
