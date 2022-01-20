import {css} from "@emotion/css";

export const listItem = css`
  font-family: "Russo One", sans-serif;
  text-align: center;
  border: 1px solid #61dafb;
  border-radius: 0.3em;
  margin: 0.1em;
  background: white;
  transition: color 0.35s;
  min-width: 1.75em;
  padding: 0.3em 1em;

  &:hover {
    color: white;
    background: #282c34;
    border: 1px solid darkred;
  }

  &:active {
    background: darkred;
  }

  &.isActive {
    color: darkred;
    background: white;
    border: 1px solid darkred;
    box-shadow: 0 0 0.5em #282c34;
  }`

export const btn = css`
  font-family: "Russo One", sans-serif;
  text-align: center;
  border: 2px solid darkslateblue;
  border-radius: 0.3em;
  margin: 0.3em;
  background: white;
  transition: color 0.35s;
  padding: 0.3em 1em;

  &:hover {
    color: white;
    background: #282c34;
    border: 2px solid darkred;
  }

  &.disabled {
    background: lightgray;
    pointer-events: none;
    color: white;
    border: 2px solid white;
  }`

export const list = css`
  display: inline-flex;
  list-style-type: none;
  margin: 1em auto;
  padding: 0;
`