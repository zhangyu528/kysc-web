//获取种类列表
function getGoodCategorys(onSuccess, onFail) {
  wx.request({
    url: 'http://localhost:5000/good/category',
    method: 'GET',
    success: function(res) {
      var result = res.data
      onSuccess(result)
    },
    fail: function(res) {
    }
  })
}

//获取商品信息列表
function getGoodInfos(catId, onSuccess, onFail) {
  wx.request({
    url: 'http://localhost:5000/good/list',
    method: 'POST',
    data: {
      cat_id: catId
    },
    success: function (res) {
      var result = res.data
      onSuccess(result)
    },
    fail: function (res) {
    }
  })
}
//微信用户授权
function wxAuth(code, encryptedData, iv, onSuccess, onFail) {
  wx.request({
    url: 'http://localhost:5000/auth/wx',
    method: 'POST',
    data: {
      code: code,
      encryptedData: encryptedData,
      iv: iv
    },
    success: function (res) {
      var result = res.data
      onSuccess(result)
    },
    fail: function (res) {

    }
  })
}
// 导出模块
module.exports.getGoodCategorys = getGoodCategorys
module.exports.getGoodInfos = getGoodInfos
module.exports.wxAuth = wxAuth