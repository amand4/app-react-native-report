import React from "react";
import { Image } from "react-native";

import styles from "./styles";

interface ImageCardProps {
  uri?: string;
  key: number;
  index: number;
  testID: string
}

export function ImageCard(props: ImageCardProps) {
  const base64Image = props.uri;

  return (
    <Image
      key={`ImageSelect-${props.index}`}
      // source={{ uri: `data:image/jpeg;base64,${base64Image}` }}
      source={{ uri: props.uri }}
      style={styles.thumbnail}
      testID={props.testID}
    />
  );
}
