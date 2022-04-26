/**  @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Button } from "../Button";
import miku from "../../assets/pic/miku.jpg";

export function Nav() {
  return (
    <nav
      css={css`
        background-image: url(${miku});
        height: 600px;
      `}
    >
      <Button>风筝有风</Button>
    </nav>
  );
}
