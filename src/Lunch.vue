<template>
  <div class="lunch">
    <h1>午餐随机选择器</h1>
    <p>这是午餐选择页面</p>
    <button @click="selectLunch">随机选择</button>
    <p v-if="selectedLunch">今天吃：{{ selectedLunch }}</p>
  </div>
</template>

<script>
export default {
  name: 'Lunch',
  data() {
    return {
      lunchOptions: ['自助', '蒸菜', '拉面', '旺客来', '点外卖'],
      selectedLunch: ''
    }
  },
  methods: {
    selectLunch() {
      const randomIndex = Math.floor(Math.random() * this.lunchOptions.length)
      this.selectedLunch = this.lunchOptions[randomIndex]
    }
  }
}
</script>

<style>
.lunch {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
}

.lunch h1 {
  font-size: 48px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
}

.lunch p {
  font-size: 18px;
  color: white;
  margin-bottom: 20px;
}

.lunch button {
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

.lunch button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(79, 172, 254, 0.6);
}
</style>