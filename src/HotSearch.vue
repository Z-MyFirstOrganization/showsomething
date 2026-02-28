<template>
  <div class="hotsearch">
    <h1>每日热搜榜</h1>
    <p>这是热搜榜页面</p>
    <div class="tabs">
      <button 
        :class="['tab-btn', { active: activeTab === 'baidu' }]" 
        @click="activeTab = 'baidu'"
      >
        百度热搜
      </button>
      <button 
        :class="['tab-btn', { active: activeTab === 'weibo' }]" 
        @click="activeTab = 'weibo'"
      >
        微博热搜
      </button>
    </div>
    
    <div v-if="activeTab === 'baidu'" class="list">
      <div v-for="(item, index) in baiduHotSearch" :key="index" class="item">
        <span class="rank">{{ index + 1 }}</span>
        <span class="title">{{ item.title }}</span>
        <span class="hot">{{ item.hot }}</span>
      </div>
    </div>
    
    <div v-else class="list">
      <div v-for="(item, index) in weiboHotSearch" :key="index" class="item">
        <span class="rank">{{ index + 1 }}</span>
        <span class="title">{{ item.title }}</span>
        <span class="hot">{{ item.hot }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotSearch',
  data() {
    return {
      activeTab: 'baidu',
      baiduHotSearch: [
        { title: '春节假期安排', hot: '123456' },
        { title: '2026年房价走势', hot: '987654' },
        { title: '最新电影推荐', hot: '876543' },
        { title: '股票市场分析', hot: '765432' },
        { title: '健康饮食指南', hot: '654321' }
      ],
      weiboHotSearch: [
        { title: '热门话题讨论', hot: '234567' },
        { title: '明星结婚喜讯', hot: '198765' },
        { title: '网络流行语', hot: '187654' },
        { title: '社会热点事件', hot: '176543' },
        { title: '综艺节目热度', hot: '165432' }
      ]
    }
  }
}
</script>

<style>
.hotsearch {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.hotsearch h1 {
  font-size: 48px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
}

.hotsearch p {
  font-size: 18px;
  color: white;
  margin-bottom: 20px;
}

.tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.tab-btn {
  padding: 12px 30px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.tab-btn.active {
  background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
}

.list {
  width: 100%;
  max-width: 600px;
}

.item {
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(5px);
}

.rank {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-right: 15px;
  flex-shrink: 0;
}

.title {
  flex: 1;
  color: white;
  font-size: 16px;
  text-align: left;
  margin-right: 15px;
}

.hot {
  color: #ff4757;
  font-size: 14px;
  font-weight: 500;
  flex-shrink: 0;
}
</style>