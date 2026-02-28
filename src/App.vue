<template>
  <div class="app">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <h1>生活助手</h1>
        </div>
        <div class="navbar-links">
          <router-link to="/">午餐选择</router-link>
          <router-link to="/hotsearch">热搜榜</router-link>
        </div>
      </div>
    </nav>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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

.content {
  padding-top: 100px;
  min-height: 100vh;
}
</style>