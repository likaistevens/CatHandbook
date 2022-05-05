import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtAvatar, AtDivider } from "taro-ui";
import "./index.less";
import Cat from "../../../assets/img/cat.png";

definePageConfig({
  navigationBarTitleText: "猫咪图鉴",
});

const Index: React.FC = () => {
  // Taro.login({
  //   success: function (res) {
  //     if (res.code) {
  //       //发起网络请求
  //       console.log(res);
  //     } else {
  //       console.log("登录失败！" + res.errMsg);
  //     }
  //   },
  // });
  // const [currentTab, setCurrentTab] = useState(0);

  const onClick = (id) => {
    Taro.navigateTo({
      url: `/pages/catDetail/index?id=${id}`,
    });
  };

  return (
    <View className="index">
      {data.map((item, index) => {
        return (
          <View
            onClick={() => {
              onClick(item.id);
            }}
            key={item.id}
            style={{
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              // alignContent: "center",
              // justifyContent: "center",
            }}
          >
            <View className="at-row" style={{ fontSize: 14, height: "100%" }}>
              <View className="at-col flex-center">
                <AtAvatar
                  circle
                  image={item.avatar}
                  size="large"
                  customStyle={{ width: "100px", height: "100px" }}
                />
              </View>
              <View className="at-col desc-text">
                <View>姓名：</View>
                <View>花色：</View>
                <View>出没地区：</View>
              </View>
              <View className="at-col desc-text">
                <View>{item.name}</View>
                <View>{item.color}</View>
                <View>{item.location}</View>
              </View>
            </View>
            <View className="at-row">
              <View className="at-col at-col__offset-1 at-col-10">
                <AtDivider customStyle={{ height: "30px" }}>
                  {index === data.length - 1 && (
                    <View style={{ fontSize: "16px", lineHeight: "16px" }}>
                      到底了哟
                    </View>
                  )}
                </AtDivider>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Index;

const data = [
  {
    id: "1",
    avatar: Cat,
    name: "抓鱼猫",
    color: "三花",
    location: "科技绿洲24",
  },
  {
    id: "2",
    avatar: Cat,
    name: "抓鱼猫",
    color: "三花",
    location: "科技绿洲24",
  },
  {
    id: "3",
    avatar: Cat,
    name: "抓鱼猫",
    color: "三花",
    location: "科技绿洲24",
  },
  {
    id: "4",
    avatar: Cat,
    name: "抓鱼猫",
    color: "三花",
    location: "科技绿洲24",
  },
  {
    id: "5",
    avatar: Cat,
    name: "抓鱼猫",
    color: "三花",
    location: "科技绿洲24",
  },
  {
    id: "6",
    avatar: Cat,
    name: "抓鱼猫",
    color: "三花",
    location: "科技绿洲24",
  },
];
