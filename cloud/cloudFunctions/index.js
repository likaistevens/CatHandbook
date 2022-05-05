const getOpenId = require("./getOpenId/index");

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event);
  switch (event.type) {
    case "getOpenId":
      return await getOpenId.main(event, context);
  }
};
