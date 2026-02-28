<template>
  <div class="app">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <h1>生活助手</h1>
        </div>
        <div class="navbar-links">
          <a href="#lunch">午餐选择</a>
          <a href="#hotsearch">热搜榜</a>
        </div>
      </div>
    </nav>
    
    <!-- 粒子动画背景 -->
    <canvas ref="particlesCanvas" class="particles-bg"></canvas>
    
    <!-- 午餐随机选择器 -->
    <section id="lunch" class="lunch">
      <div class="container">
        <h1 class="main-title">午餐随机选择器</h1>
        <div class="lunch-content card">
          <div class="lunch-display">
            <h2 class="lunch-result">{{ selectedLunch || '点击按钮开始选择' }}</h2>
          </div>
          <button class="btn lunch-button" @click="selectLunch">随机选择</button>
        </div>
      </div>
    </section>
    
    <!-- 热搜榜 -->
    <section id="hotsearch" class="hotsearch">
      <div class="container">
        <h1 class="main-title">每日热搜榜</h1>
        <div class="hotsearch-content card">
          <div class="hotsearch-tabs">
            <button :class="['tab-button', { active: activeTab === 'baidu' }]" @click="activeTab = 'baidu'">百度热搜</button>
            <button :class="['tab-button', { active: activeTab === 'weibo' }]" @click="activeTab = 'weibo'">微博热搜</button>
          </div>
          <div class="hotsearch-list" v-if="activeTab === 'baidu'">
            <div v-if="baiduHotSearch.length === 0" class="loading">加载中...</div>
            <div v-else class="search-item" v-for="(item, index) in baiduHotSearch" :key="index">
              <span class="rank">{{ index + 1 }}</span>
              <span class="title">{{ item.title }}</span>
              <span class="hot">{{ item.hot }}</span>
            </div>
          </div>
          <div class="hotsearch-list" v-else>
            <div v-if="weiboHotSearch.length === 0" class="loading">加载中...</div>
            <div v-else class="search-item" v-for="(item, index) in weiboHotSearch" :key="index">
              <span class="rank">{{ index + 1 }}</span>
              <span class="title">{{ item.title }}</span>
              <span class="hot">{{ item.hot }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      lunchOptions: ['自助', '蒸菜', '拉面', '旺客来', '点外卖'],
      selectedLunch: '',
      particles: [],
      activeTab: 'baidu',
      baiduHotSearch: [],
      weiboHotSearch: []
    }
  },
  mounted() {
    this.initParticles()
    this.animateParticles()
    this.getHotSearchData()
  },
  methods: {
    selectLunch() {
      // 清空当前选择
      this.selectedLunch = ''
      
      // 创建旋转粒子效果
      this.createRotatingParticles()
      
      // 创建粒子滚动特效
      this.createParticleScroll()
      
      // 延迟显示最终结果
      setTimeout(() => {
        // 显示最终结果
        const finalIndex = Math.floor(Math.random() * this.lunchOptions.length)
        this.selectedLunch = this.lunchOptions[finalIndex]
        // 创建最终的爆炸效果
        this.createFinalExplosion()
        // 创建文字粒子效果
        this.createTextParticles(this.selectedLunch)
      }, 1200)
    },
    initParticles() {
      const canvas = this.$refs.particlesCanvas
      const ctx = canvas.getContext('2d')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      for (let i = 0; i < 100; i++) {
        this.particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`
        })
      }
    },
    animateParticles() {
      const canvas = this.$refs.particlesCanvas
      const ctx = canvas.getContext('2d')
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        // 过滤掉生命周期结束的粒子
        this.particles = this.particles.filter(p => !p.life || p.life > 0)
        
        for (let i = 0; i < this.particles.length; i++) {
          const p = this.particles[i]
          
          // 绘制粒子
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.fill()
          
          // 更新粒子位置
          p.x += p.speedX
          p.y += p.speedY
          
          // 处理旋转粒子
          if (p.rotating) {
            // 让粒子围绕中心旋转
            const centerX = canvas.width / 2
            const centerY = canvas.height / 2
            const dx = p.x - centerX
            const dy = p.y - centerY
            const angle = Math.atan2(dy, dx) + 0.1
            const radius = Math.sqrt(dx * dx + dy * dy)
            p.x = centerX + Math.cos(angle) * radius
            p.y = centerY + Math.sin(angle) * radius
          }
          
          // 处理生命周期
          if (p.life) {
            p.life--
            // 随着生命周期减少，粒子逐渐变小并透明
            p.size *= 0.98
            const alpha = p.life / 100
            p.color = p.color.replace(/rgba\(([^,]+), ([^,]+), ([^,]+), [^)]+\)/, `rgba($1, $2, $3, ${alpha})`)
          } else {
            // 普通粒子的边界碰撞
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1
          }
        }
        
        requestAnimationFrame(animate)
      }
      
      animate()
    },
    createExplosion() {
      const canvas = this.$refs.particlesCanvas
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      for (let i = 0; i < 50; i++) {
        this.particles.push({
          x: centerX,
          y: centerY,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 5,
          speedY: (Math.random() - 0.5) * 5,
          color: `rgba(${Math.random() * 255}, ${Math.random() * 150 + 100}, ${Math.random() * 50}, 1)`,
          life: 100
        })
      }
    },
    createRotatingParticles() {
      const canvas = this.$refs.particlesCanvas
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      for (let i = 0; i < 36; i++) {
        const angle = (i * 10) * Math.PI / 180
        const radius = 100
        
        this.particles.push({
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          size: Math.random() * 4 + 2,
          speedX: Math.cos(angle) * 3,
          speedY: Math.sin(angle) * 3,
          color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`,
          life: 150,
          rotating: true
        })
      }
    },
    createFinalExplosion() {
      const canvas = this.$refs.particlesCanvas
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      for (let i = 0; i < 80; i++) {
        const angle = (i * 4.5) * Math.PI / 180
        const speed = Math.random() * 6 + 3
        
        this.particles.push({
          x: centerX,
          y: centerY,
          size: Math.random() * 5 + 2,
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          color: `rgba(${Math.random() * 255}, ${Math.random() * 150 + 100}, ${Math.random() * 50}, 1)`,
          life: 200
        })
      }
    },
    createParticleScroll() {
      const canvas = this.$refs.particlesCanvas
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // 创建滚动的粒子流
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          for (let j = 0; j < 10; j++) {
            this.particles.push({
              x: centerX - 200 + Math.random() * 400,
              y: centerY - 100,
              size: Math.random() * 3 + 1,
              speedX: (Math.random() - 0.5) * 2,
              speedY: Math.random() * 5 + 2,
              color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`,
              life: 100
            })
          }
        }, i * 40)
      }
    },
    createTextParticles(text) {
      const canvas = this.$refs.particlesCanvas
      const ctx = canvas.getContext('2d')
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // 设置文字样式
      ctx.font = '64px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      
      // 测量文字宽度
      const textWidth = ctx.measureText(text).width
      const startX = centerX - textWidth / 2
      
      // 创建文字粒子
      for (let i = 0; i < text.length; i++) {
        const char = text[i]
        const charWidth = ctx.measureText(char).width
        const charX = startX + ctx.measureText(text.substring(0, i)).width + charWidth / 2
        
        // 为每个字符创建更多粒子，形成文字形状
        for (let j = 0; j < 30; j++) {
          // 随机偏移，形成文字轮廓
          const offsetX = (Math.random() - 0.5) * charWidth * 0.8
          const offsetY = (Math.random() - 0.5) * 60
          
          this.particles.push({
            x: charX + offsetX,
            y: centerY + offsetY,
            size: Math.random() * 5 + 2,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            color: `rgba(${Math.random() * 255}, ${Math.random() * 150 + 100}, ${Math.random() * 50}, 1)`,
            life: 200
          })
        }
      }
    },
    getHotSearchData() {
      // 模拟百度热搜数据
      this.baiduHotSearch = [
        { title: '春节假期安排', hot: '123456' },
        { title: '2026年房价走势', hot: '987654' },
        { title: '最新电影推荐', hot: '876543' },
        { title: '股票市场分析', hot: '765432' },
        { title: '健康饮食指南', hot: '654321' },
        { title: '旅游景点推荐', hot: '543210' },
        { title: '教育政策变化', hot: '432109' },
        { title: '科技新闻资讯', hot: '321098' },
        { title: '体育赛事结果', hot: '210987' },
        { title: '明星八卦新闻', hot: '109876' }
      ]
      
      // 模拟微博热搜数据
      this.weiboHotSearch = [
        { title: '热门话题讨论', hot: '234567' },
        { title: '明星结婚喜讯', hot: '198765' },
        { title: '网络流行语', hot: '187654' },
        { title: '社会热点事件', hot: '176543' },
        { title: '综艺节目热度', hot: '165432' },
        { title: '时尚潮流趋势', hot: '154321' },
        { title: '美食推荐', hot: '143210' },
        { title: '健身减肥方法', hot: '132109' },
        { title: '职场生存技巧', hot: '121098' },
        { title: '亲子教育经验', hot: '110987' }
      ]
    }
  }
}
</script>

<style scoped>
/* 全局样式 */
.app {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 导航栏 */
.navbar {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px 0;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand h1 {
  margin: 0;
  font-size: 24px;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.navbar-links {
  display: flex;
  gap: 30px;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.navbar-links a:hover {
  color: #ffd700;
  transform: translateY(-2px);
}

/* 粒子动画背景 */
.particles-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* 午餐随机选择器 */
.lunch {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
}

.container {
  text-align: center;
  max-width: 600px;
  width: 100%;
}

.main-title {
  font-size: 48px;
  font-weight: bold;
  color: white;
  margin-bottom: 40px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
  to {
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5);
  }
}

.lunch-content {
  background: transparent;
  border-radius: 20px;
  padding: 60px 40px;
  box-shadow: none;
  backdrop-filter: none;
  border: none;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.lunch-display {
  margin-bottom: 40px;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 15px;
  padding: 30px;
  box-shadow: none;
}

.lunch-result {
  font-size: 64px;
  font-weight: bold;
  color: white;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.5s ease-in;
  text-align: center;
  position: relative;
  z-index: 20;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.lunch-button {
  font-size: 24px;
  padding: 18px 50px;
  background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
}

.lunch-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(79, 172, 254, 0.6);
}

.lunch-button:active {
  transform: translateY(0);
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
}

/* 热搜榜 */
.hotsearch {
  position: relative;
  z-index: 10;
  min-height: 100vh;
  padding: 120px 20px 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.hotsearch-content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  max-width: 600px;
}

.hotsearch-tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  justify-content: center;
}

.tab-button {
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

.tab-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.tab-button.active {
  background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
}

.hotsearch-list {
  max-height: 500px;
  overflow-y: auto;
  padding-right: 10px;
}

.search-item {
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.search-item:hover {
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hot {
  color: #ff4757;
  font-size: 14px;
  font-weight: 500;
  flex-shrink: 0;
}

.loading {
  color: white;
  text-align: center;
  padding: 40px;
  font-size: 18px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-title {
    font-size: 36px;
  }
  
  .lunch-content {
    padding: 40px 20px;
  }
  
  .lunch-result {
    font-size: 48px;
  }
  
  .lunch-button {
    font-size: 20px;
    padding: 15px 40px;
  }
  
  .hotsearch {
    padding: 100px 20px 40px;
  }
  
  .hotsearch-content {
    padding: 30px 20px;
  }
  
  .tab-button {
    padding: 10px 20px;
    font-size: 14px;
  }
  
  .search-item {
    padding: 12px;
  }
  
  .title {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 28px;
  }
  
  .lunch-result {
    font-size: 36px;
  }
  
  .lunch-button {
    font-size: 18px;
    padding: 12px 30px;
  }
  
  .hotsearch-tabs {
    flex-direction: column;
    gap: 10px;
  }
  
  .tab-button {
    width: 100%;
  }
  
  .search-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .rank {
    margin-right: 0;
  }
  
  .title {
    width: 100%;
  }
  
  .hot {
    align-self: flex-end;
  }
}
</style>