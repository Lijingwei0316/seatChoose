// pages/zw/zw.js
var timestamp = Date.parse(new Date());

timestamp = timestamp / 1000;

var date = new Date(timestamp * 1000);

//获取年份

var Y = date.getFullYear();

//获取月份

var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);

//获取当日日期

var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    array1:[
      '8:00-10:00',
      '9:00-11:00',
      '10:00-12:00',
      '11:00-13:00',
      '12:00-14:00',
      '13:00-15:00',
      '14:00-16:00',
      '15:00-17:00',
      '16:00-18:00',
      "17:00-19:00",
      '18:00-20:00',
      '19:00-21:00'
    ],
    array2:[]
  }, 
  formSubmit1:function(e){
    var time1 = e.detail.value.time1;
    var time2 = e.detail.value.time2;
    var num = (Math.random() * 50).toFixed(0);
    this.setData({
      num:num
    })
    console.log(num)
    wx.showModal({            //显示确认对话框
      title: '确认信息',
      content: "你的座位号是:" + this.data.num + "\r\n你选择的日期是:" + this.data.array2[time2] + "\r\n你选择的时间是：" + this.data.array1[time1] +"\r\n请确认信息！",
      success:function(res){
        if(res.confirm){
          wx.showModal({
            title: '信息确认',
            content: '你的座位信息已确认！',
          })
          setTimeout(()=>{
            wx.navigateTo({
            url: "/pages/success/success",
          })
          },1200)
        } else{
          console.log('用户点击取消')
        }
      }
    })
  },

  cancel: function () {
    this.setData({
     index1:'',
     index2:''
    })
  },

  chooseTime1:function(e){
    var index1 = e.detail.value
    this.setData({
      index1:index1
    })
  },

  chooseTime2: function (e) {
    var index2 = e.detail.value
    this.setData({
      index2: index2
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var Y1 = Y;
    var M1 = M;
    var D1 = D;
    var mark = false;
    var array2=[];
    array2.push(Y1 + '年' + M1 + '月' + D1 + '日');
    if (Y1 % 4 == 0) mark = true;
    for (var i = 1; i < 7; i++) {
      D1 = D1+1;
      if (M1 == 2 && mark == true) {
        if (D1 > 29) { M1 = M1+1; D1 = 1 }
      } else if (M1 == 2) {
        if (D1 > 28) { M1 = M1+1; D1 = 1 }
      } else if (M1 == 1 || M1 == 3 || M1 == 5 || M1 == 7 || M1 == 8 || M1 == 10 || M1 == 12) {
        if (D1 > 31) { M1 = M1+1; D1 = 1 }
      } else {
        if (D1 > 30) { M1 = M1+1; D1 = 1 }
      }
      if (M1 == 13) { Y1 = Y1+1; M1 = 1; D1 = 1; }
      array2.push(Y1 + '年' + M1 + '月' + D1 + '日');
    }
    this.setData({
      array2:array2
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
})