import createScoreLable from "../sceneElements";

export default function createSceneLose(props: GameProperties) {
  add([text("Game Over", { size: 36 }), pos(center()), origin("center")]);
  createScoreLable(props.score);
}
