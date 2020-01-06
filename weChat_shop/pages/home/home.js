// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [{
      name: "分类一",
      category_id: 1,
      foods: [{
        food_id: 1,
        food_name: "西红柿炒鸡蛋",
        food_price: "16",
        food_img:"/img/西红柿炒鸡蛋.jpg"
      },
      {
        food_id: 2,
        food_name: "土豆烧牛肉",
        food_price: "36",
        food_img:"/img/土豆炖牛肉.jpg"
      },
        {
          food_id: 1,
          food_name: "西红柿炒鸡蛋",
          food_price: "16",
          food_img: "/img/西红柿炒鸡蛋.jpg"
        },
        {
          food_id: 2,
          food_name: "土豆烧牛肉",
          food_price: "36",
          food_img: "/img/土豆炖牛肉.jpg"
        },
        {
          food_id: 1,
          food_name: "西红柿炒鸡蛋",
          food_price: "16",
          food_img: "/img/西红柿炒鸡蛋.jpg"
        },
        {
          food_id: 2,
          food_name: "土豆烧牛肉",
          food_price: "36",
          food_img: "/img/土豆炖牛肉.jpg"
        },
      ]
    },
    {
      name: "分类二",
      category_id: 2,
      foods: [{
        food_id: 3,
        food_name: "可乐",
        food_price: "3",
        food_img: "/img/可乐.jpg"
      },
      {
        food_id: 4,
        food_name: "矿泉水",
        food_price: "2",
        food_img: "/img/矿泉水.jpg"
      },
      ]
    },
      {
        name: "分类三",
        category_id: 3,
        foods: [{
          food_id: 3,
          food_name: "可乐",
          food_price: "3",
          food_img: "/img/可乐.jpg"
        },
        {
          food_id: 4,
          food_name: "矿泉水",
          food_price: "2",
          food_img: "/img/矿泉水.jpg"
        },
        ]
      }
    ],
    curNav: "1"
  },
  switchRightTab: function (e) {
    let id = e.target.dataset.id;
    console.log(id);
    this.setData({
      curNav: id
    })
  },
  addShop: function(e) {
    console.log(e)
    let food_id = e.target.dataset.id
    console.log(food_id)
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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