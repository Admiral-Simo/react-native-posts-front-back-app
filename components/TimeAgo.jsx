import { parseISO, formatDistanceToNow } from "date-fns";
import { Text, View } from "react-native";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    
      <Text className='text-cyan-700'>&nbsp; {timeAgo}</Text>
    
  );
};

export default TimeAgo;
