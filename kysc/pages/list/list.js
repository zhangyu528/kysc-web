// pages/list.js
var api = require('../../api/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    dialogShow: false,
  },

  handleChange({ detail }) {
    var page = this
    page.setData({
      current: detail.key,
      isLoading: true
    })
    //获取list数据
    api.getGoodInfos(detail.key, function (result) {
      page.setData({
        goods: result.data,
        isLoading: false
      })
    }, function (result) {

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this
    //获取tab数据
    api.getGoodCategorys(function (result) {
      page.setData({
        tabs: result.data,
        current: "0"
      })
      //获取list数据
      api.getGoodInfos("0", function (result) {
        page.setData({
          goods: result.data,
          isLoading: false
        })
      }, function (result) {

      })
    }, function (result) {

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  tapToDetail: function (event) {
    var productId = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/detail?productId='+productId,
    })
  },

  tapToPreBuy: function (event) {
    this.setData({
      dialogShow: true
    })
    var productId = event.currentTarget.dataset.id
    var page = this
    //获取detail数据
    api.getGoodDetail(productId, function (result) {
      page.setData({
        detail: result.data,
        isLoading: false
      })
    }, function (result) {

    })
  }
})