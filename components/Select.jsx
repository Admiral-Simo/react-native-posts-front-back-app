import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Select = ({ data, userId, setUserId }) => {
  return (
    <View className="space-x-3 flex-row items-center flex-wrap space-y-3">
      {data.map((user,index) => {
        const { name } = user;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => setUserId(name)}
            className={`${
              userId === name ? "bg-green-300" : "bg-gray-200"
            } rounded-lg p-2`}
          >
            <Text>{name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Select;
