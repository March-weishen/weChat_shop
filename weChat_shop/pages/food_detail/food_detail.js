// pages/food_detail/food_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    food: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let foods = [{},
      {
        food_id: 1,
        food_name: "西红柿炒鸡蛋",
        food_price: "16",
        food_img: "/img/西红柿炒鸡蛋.jpg",
        food_dec: "营养又好吃,居家美食不解释"
      }, {
        food_id: 2,
        food_name: "土豆烧牛肉",
        food_price: "36",
        food_img: "/img/土豆炖牛肉.jpg",
        food_dec: "营养又好吃,居家美食不解释"
      }, {
        food_id: 3,
        food_name: "可乐",
        food_price: "3",
        food_img: "/img/可乐.jpg",
        food_dec: "营养又好吃,居家美食不解释"
      },
      {
        food_id: 4,
        food_name: "矿泉水",
        food_price: "2",
        food_img: "/img/矿泉水.jpg",
        food_dec: "营养又好吃,居家美食不解释"
      },
    ]
    console.log(options)
    let food = foods[options.food_id]
    this.setData({
      food: food
    })
  },

  addShop: function(e) {
    console.log(e)
    let food_id = e.target.dataset.id
    console.log(food_id)

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})