<template>
  <div class="app">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <h1>个人信息展示</h1>
        </div>
        <div class="navbar-links">
          <a href="#home">首页</a>
          <a href="#about">关于我</a>
          <a href="#skills">技能</a>
          <a href="#projects">项目</a>
          <a href="#contact">联系我</a>
        </div>
      </div>
    </nav>

    <!-- 首页/个人简介 -->
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h2>你好，我是 <span class="highlight">张三</span></h2>
            <p>前端开发工程师 | UI/UX 设计师</p>
            <p>专注于创建美观、响应式的网站和应用程序</p>
            <div class="hero-buttons">
              <a href="#contact" class="btn">联系我</a>
              <a href="#projects" class="btn btn-secondary">查看项目</a>
            </div>
          </div>
          <div class="hero-image">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20developer%20portrait%20headshot&image_size=square" alt="个人头像" />
          </div>
        </div>
      </div>
    </section>

    <!-- 关于我 -->
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">关于我</h2>
        <div class="about-content">
          <div class="about-text">
            <p>我是一名具有5年经验的前端开发工程师，专注于使用Vue、React等现代前端框架构建高质量的Web应用。我热爱编程，喜欢解决复杂的问题，并且始终保持学习新技术的热情。</p>
            <p>在过去的项目中，我积累了丰富的前端开发经验，包括响应式设计、用户界面优化、性能调优等。我注重代码质量和用户体验，致力于创建既美观又实用的Web应用。</p>
            <p>除了前端开发，我还对UI/UX设计有浓厚的兴趣，能够将设计理念转化为实际的代码实现。</p>
          </div>
          <div class="about-info">
            <div class="info-item">
              <span class="info-label">姓名：</span>
              <span class="info-value">张三</span>
            </div>
            <div class="info-item">
              <span class="info-label">职业：</span>
              <span class="info-value">前端开发工程师</span>
            </div>
            <div class="info-item">
              <span class="info-label">邮箱：</span>
              <span class="info-value">zhangsan@example.com</span>
            </div>
            <div class="info-item">
              <span class="info-label">电话：</span>
              <span class="info-value">138-0013-8000</span>
            </div>
            <div class="info-item">
              <span class="info-label">所在地：</span>
              <span class="info-value">北京市</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能 -->
    <section id="skills" class="skills">
      <div class="container">
        <h2 class="section-title">技能</h2>
        <div class="skills-grid">
          <div class="skill-card card">
            <div class="skill-icon">
              <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=html%20css%20javascript%20logo&image_size=square" alt="前端技能" />
            </div>
            <h3>前端开发</h3>
            <ul>
              <li>HTML5/CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>Vue.js 3</li>
              <li>React</li>
              <li>Bootstrap/Tailwind CSS</li>
            </ul>
          </div>
          <div class="skill-card card">
            <div class="skill-icon">
              <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ui%20ux%20design%20logo&image_size=square" alt="设计技能" />
            </div>
            <h3>UI/UX设计</h3>
            <ul>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>响应式设计</li>
              <li>用户体验优化</li>
              <li>原型设计</li>
            </ul>
          </div>
          <div class="skill-card card">
            <div class="skill-icon">
              <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=backend%20development%20logo&image_size=square" alt="后端技能" />
            </div>
            <h3>后端开发</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>RESTful API</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目 -->
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title">项目经验</h2>
        <div class="projects-grid">
          <div class="project-card card">
            <div class="project-image">
              <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=e-commerce%20website%20design&image_size=landscape_16_9" alt="电商网站" />
            </div>
            <h3>电商网站</h3>
            <p>使用Vue 3和Tailwind CSS构建的响应式电商网站，包含商品展示、购物车、支付等功能。</p>
            <div class="project-tech">
              <span class="tech-tag">Vue 3</span>
              <span class="tech-tag">Tailwind CSS</span>
              <span class="tech-tag">Node.js</span>
            </div>
          </div>
          <div class="project-card card">
            <div class="project-image">
              <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=personal%20blog%20website%20design&image_size=landscape_16_9" alt="个人博客" />
            </div>
            <h3>个人博客</h3>
            <p>使用React和Next.js构建的个人博客网站，支持文章发布、评论、分类等功能。</p>
            <div class="project-tech">
              <span class="tech-tag">React</span>
              <span class="tech-tag">Next.js</span>
              <span class="tech-tag">MongoDB</span>
            </div>
          </div>
          <div class="project-card card">
            <div class="project-image">
              <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dashboard%20admin%20panel%20design&image_size=landscape_16_9" alt="管理系统" />
            </div>
            <h3>管理系统</h3>
            <p>使用Vue 3和Element Plus构建的企业管理系统，包含用户管理、数据统计、权限控制等功能。</p>
            <div class="project-tech">
              <span class="tech-tag">Vue 3</span>
              <span class="tech-tag">Element Plus</span>
              <span class="tech-tag">Express</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我 -->
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">联系我</h2>
        <div class="contact-content">
          <div class="contact-info">
            <p>如果您对我的作品感兴趣，或者有任何问题，欢迎随时联系我。</p>
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <span>zhangsan@example.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span>138-0013-8000</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span>北京市</span>
            </div>
            <div class="social-links">
              <a href="#" class="social-link">GitHub</a>
              <a href="#" class="social-link">LinkedIn</a>
              <a href="#" class="social-link">微博</a>
            </div>
          </div>
          <div class="contact-form">
            <form>
              <div class="form-group">
                <label for="name">姓名</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div class="form-group">
                <label for="message">留言</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn">发送留言</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2026 个人信息展示官网. 保留所有权利.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* 导航栏 */
.navbar {
  background-color: var(--white);
  box-shadow: var(--shadow);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
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
  color: var(--primary-color);
}

.navbar-links {
  display: flex;
  gap: 20px;
}

.navbar-links a {
  color: var(--primary-color);
  font-weight: 500;
}

.navbar-links a:hover {
  color: var(--accent-color);
}

/* 英雄区域 */
.hero {
  padding-top: 120px;
  padding-bottom: 80px;
  background-color: var(--white);
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 60px;
}

.hero-text h2 {
  font-size: 36px;
  margin-bottom: 15px;
}

.hero-text .highlight {
  color: var(--accent-color);
}

.hero-text p {
  font-size: 18px;
  color: var(--secondary-color);
  margin-bottom: 30px;
}

.hero-buttons {
  display: flex;
  gap: 15px;
}

.btn-secondary {
  background-color: transparent;
  color: var(--accent-color);
  border: 1px solid var(--accent-color);
}

.btn-secondary:hover {
  background-color: var(--accent-color);
  color: var(--white);
}

.hero-image img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: var(--shadow);
}

/* 通用部分样式 */
.section-title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 3px;
  background-color: var(--accent-color);
  margin: 10px auto 0;
}

/* 关于我 */
.about {
  background-color: var(--background-color);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.about-info {
  background-color: var(--white);
  padding: 30px;
  border-radius: 10px;
  box-shadow: var(--shadow);
}

.info-item {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.info-label {
  font-weight: 600;
  width: 80px;
}

/* 技能 */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.skill-card {
  text-align: center;
}

.skill-icon img {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

.skill-card ul {
  list-style: none;
  text-align: left;
  margin-top: 15px;
}

.skill-card li {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.skill-card li::before {
  content: '•';
  color: var(--accent-color);
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* 项目 */
.projects {
  background-color: var(--background-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.project-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
}

.project-tech {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-tag {
  background-color: var(--accent-color);
  color: var(--white);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
}

/* 联系我 */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.contact-info {
  background-color: var(--white);
  padding: 30px;
  border-radius: 10px;
  box-shadow: var(--shadow);
}

.contact-item {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-icon {
  font-size: 20px;
}

.social-links {
  margin-top: 30px;
  display: flex;
  gap: 15px;
}

.social-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--accent-color);
  color: var(--white);
  border-radius: 5px;
}

.social-link:hover {
  background-color: #0056b3;
  color: var(--white);
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group label {
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

/* 页脚 */
.footer {
  background-color: var(--primary-color);
  color: var(--white);
  padding: 30px 0;
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }
  
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  
  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .hero-text h2 {
    font-size: 28px;
  }
  
  .section-title {
    font-size: 28px;
  }
}
</style>