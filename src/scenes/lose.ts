import createScoreLable from "../sceneElements";

export default function createSceneLose(props: GameProperties) {
  createScoreLable(props.score);
  add([
    text("Game Over", { size: 36 }),
    pos(center()),
    origin("center"),
    area(),
    "gameOver",
  ]);

  onClick("gameOver", () => {
    props.score = 0;
    go("game");
  });
}
