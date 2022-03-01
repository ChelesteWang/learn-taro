import { View, Text } from "@tarojs/components";
import "./index.scss";

export default function Index() {
  return (
    <View
      className='index'
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello world!</Text>
    </View>
  );
}
