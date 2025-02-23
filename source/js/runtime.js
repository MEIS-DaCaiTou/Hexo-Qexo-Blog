// 使用立即执行函数封装代码，避免全局变量污染
(function() {
    // ===============================
    // 常量定义区域
    // ===============================
    // 旅行者1号发射时间（1977年8月21日 0:00:00）
    const DISTANCE_START = new Date("1977/08/21 00:00:00");
    // 网站运行时间的起始时间（2025年2月8日 0:00:00）
    const WEBSITE_START = new Date("2025/02/08 00:00:00");
    // 初始距离：234e8 表示 234 × 10⁸（单位：千米）
    const INITIAL_DISTANCE = 234e8;
    // 旅行者1号每秒增加的距离（单位：千米）
    const SPEED = 17;
    // 1 个天文单位（AU）约等于 149600000 千米
    const KM_PER_AU = 149600000;
    
    // 获取页面中用于展示信息的 DOM 元素（id 为 "workboard"）
    const workboardEl = document.getElementById("workboard");
    
    // ===============================
    // 辅助函数：数字补零，确保数字显示为两位
    // 例如：9 显示为 "09"
    // ===============================
    function pad(num) {
      return num < 10 ? "0" + num : num;
    }
    
    // ===============================
    // 主函数：更新页面显示的信息
    // ===============================
    function updateTime() {
      // 获取当前时间
      const now = new Date();
      
      // -------------------------------
      // 1. 计算旅行者1号当前距离
      // -------------------------------
      // 计算自 DISTANCE_START 以来经过的秒数
      const elapsedSecondsDistance = (now - DISTANCE_START) / 1000;
      // 当前距离 = 初始距离 + （经过秒数 × 每秒增加的距离）
      const currentDistance = Math.trunc(INITIAL_DISTANCE + elapsedSecondsDistance * SPEED);
      // 将当前距离换算为天文单位（AU），保留6位小数
      const distanceAU = (currentDistance / KM_PER_AU).toFixed(6);
      
      // -------------------------------
      // 2. 计算网站运行时长（从2025年2月8日 0:00:00 开始）
      // -------------------------------
      // 计算自 WEBSITE_START 到当前时间经过的总秒数
      let elapsedSecondsRun = Math.floor((now - WEBSITE_START) / 1000);
      
      // 分解为天、小时、分钟、秒
      const days = Math.floor(elapsedSecondsRun / 86400);
      elapsedSecondsRun %= 86400;  // 去除已计算的天数秒数
      const hours = Math.floor(elapsedSecondsRun / 3600);
      elapsedSecondsRun %= 3600;   // 去除已计算的小时秒数
      const minutes = Math.floor(elapsedSecondsRun / 60);
      const seconds = elapsedSecondsRun % 60;
      
      // -------------------------------
      // 3. 判断当前时间是上班还是休息状态
      // -------------------------------
      // 这里使用当前实际时间的小时数进行判断
      const currentHour = now.getHours();
      const isWorkingTime = currentHour >= 9 && currentHour < 18;
      const imgSrc = isWorkingTime ?
        "https://blog-data-6y4.pages.dev/images/working.svg" :
        "https://blog-data-6y4.pages.dev/images/offwork.svg";
      const imgTitle = isWorkingTime ?
        "什么时候能够实现财富自由呀~" :
        "下班了就该开开心心地玩耍~";
      
      // -------------------------------
      // 4. 构造 HTML 内容
      // -------------------------------
      const html = `<img class='boardsign' src='${imgSrc}'><br>
          <p>${imgTitle}</p>
          <div>
            本站已运行 ${days} 天 ${pad(hours)} 小时 ${pad(minutes)} 分 ${pad(seconds)} 秒 
            <span class="heartbeat">❤️</span><br>
            旅行者 1 号距离地球 ${currentDistance} 千米，约 ${distanceAU} AU 
            <span class="rocket">🚀</span>
          </div>`;
      
      // -------------------------------
      // 5. 更新页面中的显示内容
      // -------------------------------
      if (workboardEl) {
        workboardEl.innerHTML = html;
      }
    }
    
    // ===============================
    // 定时刷新：每 1000 毫秒（1秒）调用一次 updateTime 函数
    // ===============================
    setInterval(updateTime, 1000);
    
    // 初始化调用一次，确保页面加载后立即显示数据
    updateTime();
  })();
  