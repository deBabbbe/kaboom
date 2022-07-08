import { GameObj, TextComp } from "kaboom";
import { SCORE } from "./constants/elementNameConstants";

export default function createScoreLable(score: number): GameObj<TextComp> {
  return add([text(score.toString(), { size: 24 }), pos(24, 24), SCORE]);
}
