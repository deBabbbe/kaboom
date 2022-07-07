import { FLOOR_HEIGHT, JUMP_FORCE, SPEED } from "../constants";
import createScoreLable from "../sceneElements";
export default function createSceneGame(props: GameProperties) {
  gravity(2400);

  const scoreLabel = createScoreLable(props.score);
  onKeyPress("f", () => {
    fullscreen(!isFullscreen());
  });

  onUpdate(() => {
    props.score++;
    scoreLabel.text = props.score.toString();
  });

  const player = add([sprite("bean"), pos(80, 40), area(), body()]);
  add([
    rect(width(), FLOOR_HEIGHT),
    pos(0, height()),
    outline(4),
    origin("botleft"),
    area(),
    solid(),
    color(127, 200, 255),
    "floor",
  ]);

  onKeyPress("space", () => {
    if (!player.isGrounded()) return;
    player.jump(JUMP_FORCE);
  });

  player.onCollide("tree", () => {
    addKaboom(player.pos);
    shake(120);
    burp();
    go("lose");
  });

  function spawnTree() {
    add([
      rect(48, rand(24, 64)),
      area(),
      outline(4),
      pos(width(), height() - 48),
      origin("botleft"),
      color(255, 180, 255),
      move(LEFT, SPEED),
      "tree",
    ]);
    wait(rand(0.5, 1.5), () => {
      spawnTree();
    });
  }

  spawnTree();
}
