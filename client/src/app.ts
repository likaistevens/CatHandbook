import "taro-ui/dist/style/index.scss"; // 引入组件样式
import Taro from "@tarojs/taro";
import "./app.less";

const App: React.FC<{ children: React.ReactElement<any, any> | null }> = ({
  children,
}) => {
  // if (!Taro.cloud) {
  //   console.error("请使用 2.2.3 或以上的基础库以使用云能力");
  // } else {
  //   Taro.cloud.init({
  //     env: "cloud1-8ga6uyisfda17d9f",
  //     traceUser: true,
  //   });
  // }
  return children;
};

export default App;
