import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";
import { router, usePathname } from "expo-router";

const SearchInput = ({
  title,
  placeholder,
  handleChangeText,
  otherStyles,
  value,
  initialQuery,
  ...props
}) => {
  const path = usePathname();
  const [query, setQuery] = useState(initialQuery ?? "");

  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className={`${
          !initialQuery ? "mb-3.5" : ""
        } flex-1 text-base text-white font-pregular`}
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
        {...props}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) return;
          if (path.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image
          source={icons.search}
          className="max-w-5 max-h-5"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
