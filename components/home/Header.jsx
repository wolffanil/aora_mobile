import { View, Text, Image } from "react-native";
import images from "../../constants/images";
import SearchInput from "../SearchInput";
import Trending from "./Trending";

const headerText = {
  home: "Welcome back",
  search: "Search results",
  save: "Saved Videos",
};

const Header = ({ username, posts, type = "home", initialQuery }) => {
  return (
    <View className={`my-6 px-4 ${type === "home" ? "space-y-6" : ""}`}>
      <View className="justify-between items-start flex-row mb-6">
        <View>
          <Text className="font-pmedium text-sm text-gray-100">
            {headerText[type]}
          </Text>
          <Text className="font-psemibold text-2xl text-white">
            {type === "home"
              ? username || ""
              : type === "search"
              ? initialQuery
              : ""}
          </Text>
        </View>

        {type === "home" && (
          <View className="mt-1.5">
            <Image
              source={images.logoSmall}
              className="w-9 h-10"
              resizeMode="contain"
            />
          </View>
        )}
      </View>

      <SearchInput initialQuery={initialQuery} />

      {type === "home" && (
        <View className="w-full flex-1 pt-5 pb-8">
          <Text className="text-gray-100 text-lg font-pregular mb-3">
            Latest Videos
          </Text>

          <Trending latestPosts={posts?.slice(-3) ?? []} />
        </View>
      )}
    </View>
  );
};

export default Header;
