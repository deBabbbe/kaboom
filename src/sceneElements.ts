import { GameObj, TextComp } from "kaboom";

export default function createScoreLable(score: number): GameObj<TextComp> {
  return add([text(score.toString(), { size: 24 }), pos(24, 24)]);
}
