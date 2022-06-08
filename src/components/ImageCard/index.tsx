import React from "react";
import { Image } from "react-native";

import styles from "./styles";

interface ImageCardProps {
  uri?: string;
  key?: number;
  index: number;
  testID: string;
}

export function ImageCard(props: ImageCardProps) {
  return (
    <Image
      key={`ImageSelect-${props.index}`}
      source={{ uri: props.uri }}
      style={styles.thumbnail}
      testID={props.testID}
    />
  );
}
