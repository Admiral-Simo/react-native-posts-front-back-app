import { useDispatch } from "react-redux";
import { reactionAdded } from "../app/features/posts/postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <TouchableOpacity
        key={name}
        className="items-center justify-between py-2 px-4 rounded-full bg-sky-400"
        onPress={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        <Text>{emoji}</Text>
        <Text className='text-white font-bold'>{post.reactions[name]}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <View className="flex-row mt-2 justify-around">{reactionButtons}</View>
  );
};

export default ReactionButtons;
