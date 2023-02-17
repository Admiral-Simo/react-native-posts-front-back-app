import { View, Text } from 'react-native'
import React from 'react'

import PostAuthor from "../components/PostAuthor";
import TimeAgo from "../components/TimeAgo";
import ReactionButtons from "../components/ReactionButtons";

const PostsExcerpt = ({post}) => {
  return (
    <View className="p-4 border rounded-lg mb-5">
      <Text className="text-xl">{post.title}</Text>
      <Text className="text-slate-500">{post.content.substring(0, 100)}</Text>
      <View className="flex-row justify-between mt-2">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </View>
      <ReactionButtons post={post} />
    </View>
  )
}

export default PostsExcerpt