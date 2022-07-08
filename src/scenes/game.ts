import { FLOOR, PLAYER, TREE } from "../constants/elementNameConstants";
import {
  FLOOR_HEIGHT,
  GRAVITY,
  JUMP_FORCE,
  SPEED,
} from "../constants/gameConstants";
import createScoreLable from "../sceneElements";

export default function createSceneGame(props: GameProperties) {
  gravity(GRAVITY);

  const scoreLabel = createScoreLable(props.score);

  onUpdate(() => {
    props.score++;
    scoreLabel.text = props.score.toString();
  });

  const player = add([sprite("bean"), pos(80, 40), area(), body(), PLAYER]);
  add([
    rect(width(), FLOOR_HEIGHT),
    pos(0, height()),
    outline(4),
    origin("botleft"),
    area(),
    solid(),
    color(127, 200, 255),
    FLOOR,
  ]);

  onKeyPress("space", () => {
    if (!player.isGrounded()) return;
    player.jump(JUMP_FORCE);
  });

  player.onCollide(TREE, () => {
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
      TREE,
    ]);

    wait(rand(0.5, 1.5), () => {
      spawnTree();
    });
  }

  spawnTree();
}
