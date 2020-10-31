import React from "react";
import styled from "styled-components";

const Icon = styled.svg``;

export const Open = () => (
  <Icon
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 11.0714V8.92857H11.0714V1H8.92857V8.92857H1V11.0714H8.92857V18.9643H11.0714V11.0714H19Z"
      fill="black"
    />
  </Icon>
);

export const Close = () => (
  <Icon
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 11.1429H19V9H1V11.1429Z" fill="black" />
  </Icon>
);
