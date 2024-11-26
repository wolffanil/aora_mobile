import {
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
  Platform,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobarProvider";
import { EmptyState, HeaderHome, VideoCard } from "../../components";
import { getAllPosts } from "../../lib/appwrite.config";
import { useAppwrite } from "../../hooks/useAppwrite";
import * as Network from "expo-network";
import * as Device from "expo-device";

const Home = () => {
  const { user } = useGlobalContext();
  const [refreshing, setRefreshing] = useState(false);

  const { data: posts, isLoading, refetch } = useAppwrite(getAllPosts);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary pt-6 h-full">
      <TouchableOpacity onPress={fetchTestB}>
        <Text>dfsdfd</Text>
      </TouchableOpacity>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard item={item} />}
        ListHeaderComponent={() => (
          <HeaderHome username={user?.username ?? ""} posts={posts} />
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
