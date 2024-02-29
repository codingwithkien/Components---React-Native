import { View, Animated, Text, SafeAreaView, FlatList } from "react-native";
import React, { useRef, useState } from "react";
import SliderItem from "./SliderItem";
import data from "../data";
import Pagination from "./Pagination";

export default function Slider() {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 }).current;
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => <SliderItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={data} scrollX={scrollX} index={index} />
    </SafeAreaView>
  );
}
