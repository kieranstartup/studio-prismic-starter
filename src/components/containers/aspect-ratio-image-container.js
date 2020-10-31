import React from "react";
import styled from "styled-components";

const AspectRatioContainer = styled.div`
  position: relative;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: ${(props) => props.padding}%;
    background-color: #f8f8f8;
  }

  & > .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

// Takes in the image, children and padding
// Image can be null if you want to set it a hardcoded padding value
// Used for displaying images quicker and preventing unnecessary layout paints and jumps
export const AspectRatioImageContainer = ({ children, image, padding }) => {
  if (image === null) {
    return (
      <AspectRatioContainer padding={padding}>
        <div className="content">{children}</div>
      </AspectRatioContainer>
    );
  } else {
    const aspectRatioWidth = image.dimensions.width / image.fluid.aspectRatio;
    const aspectRatioHeight = image.dimensions.height / image.fluid.aspectRatio;
    const aspectRatio = (aspectRatioHeight / aspectRatioWidth) * 100;

    return (
      <AspectRatioContainer padding={aspectRatio}>
        <div className="content">{children}</div>
      </AspectRatioContainer>
    );
  }
};
