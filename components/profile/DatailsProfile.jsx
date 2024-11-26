import { View, TouchableOpacity, Image } from "react-native";
import { useGlobalContext } from "../../context/GlobarProvider";
import icons from "../../constants/icons";
import InfoBox from "./InfoBox";
import { singOut } from "../../lib/appwrite.config";
import { router } from "expo-router";

const DatailsProfile = ({ postslength }) => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();

  const logout = async () => {
    await singOut();
    setUser(null);
    setIsLoggedIn(false);

    router.replace("/sign-in");
  };

  return (
    <View className="w-full justify-center items-center mt-6 mb-12 px-4">
      <TouchableOpacity className="w-full items-end mb-10" onPress={logout}>
        <Image source={icons.logout} resizeMode="contain" className="w-6 h-6" />
      </TouchableOpacity>

      <View className="w-16 h-16 justify-center items-center border-secondary border">
        <Image
          source={{ uri: user?.avatar }}
          className="w-[90%] h-[90%] rounded-lg"
          resizeMode="cover"
        />
      </View>

      <InfoBox
        title={user?.username}
        containerStyles="mt-5"
        titleStyles="text-lg"
      />

      <View className="mt-5 flex-row">
        <InfoBox
          title={postslength}
          subtitle="Posts"
          containerStyles="mr-10"
          titleStyles="text-xl"
        />

        <InfoBox title="1.2k" subtitle="Followers" titleStyles="text-xl" />
      </View>
    </View>
  );
};

export default DatailsProfile;
