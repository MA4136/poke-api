import { css } from '@emotion/css'

export const pokemon = css`
  font-family: "Russo One", sans-serif;
  text-transform: capitalize;
  text-align: start;
  max-width: 50em;
  border: 2px solid #61dafb;
  border-radius: 0.5em;
  margin: 0.3em auto;
  background: white;
  padding: 0.3em 2em;
  transition: color 0.35s;

  &:hover {
    color: white;
    background: #282c34;
    border: 2px solid darkred;
  }`