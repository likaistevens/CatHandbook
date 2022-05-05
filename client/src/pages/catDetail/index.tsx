import { View } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import { AtAvatar } from "taro-ui";
import "./index.less";
import Cat from "../../../assets/img/cat.png";

definePageConfig({
  navigationBarTitleText: "猫咪详情",
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
  const onClick = () => {
    Taro.navigateTo({
      url: `/pages/index/index`,
    });
  };
  const router = useRouter();
  const id = router.params.id;
  console.log(router);

  const data = {
    id: "1",
    avatar: Cat,
    age: "3岁",
    name: "抓鱼猫",
    color: "三花",
    location: "科技绿洲24",
    state: "在读",
    sterilization: "已绝育",
    guide: "性格温和，随便撸",
  };

  return (
    <>
      <View className="flex-center" style={{ marginTop: "10px" }}>
        <View
          className="at-icon at-icon-chevron-left"
          style={{ position: "absolute", left: "10px" }}
          onClick={onClick}
        />
        <View>详情</View>
      </View>
      <View style={{ padding: "30px" }}>
        <View className="flex-center" style={{ flexDirection: "column" }}>
          <AtAvatar
            circle
            image={data.avatar}
            customStyle={{ width: "150px", height: "150px" }}
          />
          <View
            style={{ fontSize: "24px", fontWeight: "bold", margin: "15px 0" }}
          >
            {data.name}
          </View>
        </View>
        <View>
          <View className="at-row at-row--wrap">
            {["age", "color", "state", "sterilization", "location"].map(
              (field) => {
                return (
                  <View
                    key={data[field].id}
                    className="at-col at-col-6"
                    style={{ margin: "20rpx 0" }}
                  >
                    <View className="field-name">{fieldMap[field]}</View>
                    <View className="field-text">{data[field]}</View>
                  </View>
                );
              }
            )}
          </View>
          <View style={{ margin: "20rpx 0" }}>
            <View className="field-name">{fieldMap["guide"]}</View>
            <View className="field-text">{data["guide"]}</View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Index;

const fieldMap = {
  age: "年龄",
  color: "毛色",
  state: "状态",
  sterilization: "绝育情况",
  location: "出没地区",
  guide: "撸猫指南",
};
