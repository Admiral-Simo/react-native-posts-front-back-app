import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../app/features/users/usersSlice";

import React from "react";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);
  return <Text>By {author ? author.name : "Unknown author"}</Text>;
};

export default PostAuthor;
