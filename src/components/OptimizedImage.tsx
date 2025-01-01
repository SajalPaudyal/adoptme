import React from "react";

export default function OptimizedImage({
  image,
  alt,
  width,
}: {
  image: string;
  alt: string;
  width: number;
}) {
  return (
    <React.Fragment>
      <img src={image} alt={alt} loading="lazy" width={width}></img>
    </React.Fragment>
  );
}
