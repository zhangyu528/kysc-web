
function getGoodCategory(onSuccess, onFail) {
  wx.request({
    url: 'http://localhost:5000/good/category',
    method: 'POST',
    success: function(res) {
      var result = res.data
      onSuccess(result)
    },
    fail: function(res) {
      onFail(result)
    }
  })
}

// 导出模块
module.exports = {
  getGoodCategory
}