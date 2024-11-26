import { SafeAreaView, FlatList } from "react-native";
import React from "react";
import { EmptyState, VideoCard, DatailsProfile } from "../../components";
import { useGlobalContext } from "../../context/GlobarProvider";
import { useAppwrite } from "../../hooks/useAppwrite";
import { getUserPosts } from "../../lib/appwrite.config";

const Profile = () => {
  const { user } = useGlobalContext();

  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  return (
    <SafeAreaView className="bg-primary pt-6 h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard item={item} />}
        ListHeaderComponent={() => (
          <DatailsProfile postslength={posts.length || 0} />
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
