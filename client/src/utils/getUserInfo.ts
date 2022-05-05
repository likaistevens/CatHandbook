import Taro from "@tarojs/taro";

export const getUserInfo = (e) => {
  Taro.showModal({
    title: "温馨提示",
    content: "亲，授权微信登录后才能正常使用小程序功能",
    success(res) {
      console.log(res);
      //如果用户点击了确定按钮
      if (res.confirm) {
        Taro.getUserProfile({
          desc: "获取你的昵称、头像、地区及性别",
          success: (r) => {
            console.log(r);
            console.log(1);
          },
          fail: (r) => {
            console.log(r);
            //拒绝授权
            Taro.showToast({
              title: "授权失败",
              icon: "error",
              duration: 2000,
            });
            return;
          },
        });
      } else if (res.cancel) {
        //如果用户点击了取消按钮
        Taro.showToast({
          title: "授权失败",
          icon: "error",
          duration: 2000,
        });
        return;
      }
    },
  });
};
