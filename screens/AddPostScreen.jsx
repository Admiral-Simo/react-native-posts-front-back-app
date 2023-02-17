import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { postAdded } from "../app/features/posts/postsSlice";
import { selectAllUsers } from "../app/features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from "react-native-select-dropdown";
import Select from "../components/Select";

const AddPostScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const pushToPosts = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      navigation.goBack();
    }
  };

  const cansave = title && content && userId;

  return (
    <View className="px-6 flex-1 justify-center my-10">
      <ScrollView className="bg-white shadow p-6 rounded-xl">
        <View className="mx-2 mb-5">
          <Text>title</Text>
          <TextInput
            selectionColor={"black"}
            value={title}
            onChangeText={setTitle}
            className="p-2 bg-gray-100 text-gray-500 rounded-lg"
          />
        </View>
        <View className="mx-2 mb-5">
          <Text>content</Text>
          <TextInput
            selectionColor={"black"}
            value={content}
            onChangeText={setContent}
            className="h-64 p-2 bg-gray-100 text-gray-500 rounded-lg justify-start"
            textAlignVertical="top"
            multiline={true}
          />
        </View>
        <View className="mx-2 mb-5">
          <Text>users</Text>
          <Select data={users} setUserId={setUserId} userId={userId} />
        </View>
        <TouchableOpacity
          disabled={!cansave}
          onPress={pushToPosts}
          className={`rounded-lg py-2 px-5 ${
            cansave ? "bg-purple-500" : "bg-gray-500"
          }`}
        >
          <Text className="text-center text-white">Add Post</Text>
        </TouchableOpacity>
        <View className='mb-10' />
      </ScrollView>
    </View>
  );
};

export default AddPostScreen;
