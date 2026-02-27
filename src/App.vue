<template>
  <div class="app">
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
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      lunchOptions: ['自助', '蒸菜', '拉面', '旺客来', '点外卖'],
      selectedLunch: '',
      particles: []
    }
  },
  mounted() {
    this.initParticles()
    this.animateParticles()
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
}
</style>