import { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "../app/features/posts/postsSlice";
import { MaterialIcons } from "@expo/vector-icons";
import PostsExcerpt from "../components/PostsExcerpt";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  // getting posts from redux
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  // ordering posts by timestamps

  let content;
  if (postsStatus === "loading") {
    content = <Text>Loading...</Text>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  // navigating to AddPostScreen
  const goAddPost = () => {
    navigation.navigate("AddPost");
  };

  return (
    <View className="px-3 flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Margin View */}
        <View className="mt-20" />
        <Text className="text-center text-3xl font-bold mb-10">Posts</Text>
        {content}
        {/* Margin View */}
        <View className="mb-28" />
      </ScrollView>
      <TouchableOpacity
        onPress={goAddPost}
        className="p-3 bg-green-300 rounded-lg absolute right-10 bottom-10"
      >
        <MaterialIcons name="post-add" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
