import { useState } from "react";
import { FlatList } from "react-native";
import TrendingItem from "./TrendingItem";

const Trending = ({ latestPosts }) => {
  const [activeItem, setActiveItem] = useState(latestPosts[0]);

  const viewableItemsChanged = ({ viewableItems }) => {
    setActiveItem(viewableItems[0].key);
  };
  return (
    <FlatList
      data={latestPosts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Trending;
