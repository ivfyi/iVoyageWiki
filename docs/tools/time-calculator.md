---
title: "时差计算器"
description: "世界各地时差查询和计算工具，支持全球主要城市"
---

# 时差计算器

<style>
.tz { max-width: 650px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
.tz .row { display: flex; gap: 12px; margin-bottom: 16px; align-items: flex-end; }
.tz .row > * { flex: 1; }
.tz label { display: block; font-weight: 600; margin-bottom: 4px; font-size: 13px; }
.tz select { width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 15px; box-sizing: border-box; background: #fff; }
.tz select:focus { outline: none; border-color: #4A90D9; box-shadow: 0 0 0 2px rgba(74,144,217,0.2); }
.tz .clock { background: #f5f7fa; border-radius: 10px; padding: 20px; text-align: center; }
.tz .clock .city { font-size: 14px; color: #888; margin-bottom: 4px; }
.tz .clock .time { font-size: 36px; font-weight: 700; letter-spacing: 2px; }
.tz .clock .date { font-size: 13px; color: #888; margin-top: 4px; }
.tz .diff-area { background: #e8f4e8; border-radius: 10px; padding: 16px; text-align: center; margin: 20px 0; }
.tz .diff-area .diff-text { font-size: 18px; font-weight: 600; color: #2d8a4e; }
.tz .diff-area .diff-detail { font-size: 13px; color: #666; margin-top: 4px; }
.tz .world-clocks { margin-top: 24px; }
.tz .world-clocks table { width: 100%; border-collapse: collapse; font-size: 14px; }
.tz .world-clocks th, .tz .world-clocks td { padding: 8px 12px; text-align: left; border-bottom: 1px solid #eee; }
.tz .world-clocks th { font-weight: 600; background: #f5f7fa; font-size: 12px; }
.tz .world-clocks .now-time { font-weight: 600; }
.tz .world-clocks .diff-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 12px; font-weight: 600; }
.tz .world-clocks .diff-same { background: #e8f4e8; color: #2d8a4e; }
.tz .world-clocks .diff-ahead { background: #fff3e0; color: #e67e00; }
.tz .world-clocks .diff-behind { background: #e3f2fd; color: #1565c0; }
</style>

<div class="tz">
  <div class="row">
    <div>
      <label>城市 A</label>
      <select id="cityA">
        <option value="Asia/Shanghai" selected>🇨🇳 北京</option>
        <option value="Asia/Tokyo">🇯🇵 东京</option>
        <option value="Asia/Seoul">🇰🇷 首尔</option>
        <option value="Asia/Bangkok">🇹🇭 曼谷</option>
        <option value="Asia/Singapore">🇸🇬 新加坡</option>
        <option value="Asia/Hong_Kong">🇭🇰 香港</option>
        <option value="Asia/Taipei">🇹🇼 台北</option>
        <option value="Asia/Kuala_Lumpur">🇲🇾 吉隆坡</option>
        <option value="Asia/Dubai">🇦🇪 迪拜</option>
        <option value="Asia/Kolkata">🇮🇳 印度（德里）</option>
        <option value="Europe/London">🇬🇧 伦敦</option>
        <option value="Europe/Paris">🇫🇷 巴黎</option>
        <option value="Europe/Berlin">🇩🇪 柏林</option>
        <option value="Europe/Rome">🇮🇹 罗马</option>
        <option value="Europe/Madrid">🇪🇸 马德里</option>
        <option value="Europe/Moscow">🇷🇺 莫斯科</option>
        <option value="America/New_York">🇺🇸 纽约</option>
        <option value="America/Chicago">🇺🇸 芝加哥</option>
        <option value="America/Denver">🇺🇸 丹佛</option>
        <option value="America/Los_Angeles">🇺🇸 洛杉矶</option>
        <option value="America/Toronto">🇨🇦 多伦多</option>
        <option value="America/Vancouver">🇨🇦 温哥华</option>
        <option value="America/Sao_Paulo">🇧🇷 圣保罗</option>
        <option value="America/Mexico_City">🇲🇽 墨西哥城</option>
        <option value="Australia/Sydney">🇦🇺 悉尼</option>
        <option value="Australia/Melbourne">🇦🇺 墨尔本</option>
        <option value="Pacific/Auckland">🇳🇿 奥克兰</option>
        <option value="Africa/Cairo">🇪🇬 开罗</option>
        <option value="Africa/Cape_Town">🇿🇦 开普敦</option>
      </select>
    </div>
    <div>
      <label>城市 B</label>
      <select id="cityB">
        <option value="Asia/Shanghai">🇨🇳 北京</option>
        <option value="Asia/Tokyo" selected>🇯🇵 东京</option>
        <option value="Asia/Seoul">🇰🇷 首尔</option>
        <option value="Asia/Bangkok">🇹🇭 曼谷</option>
        <option value="Asia/Singapore">🇸🇬 新加坡</option>
        <option value="Asia/Hong_Kong">🇭🇰 香港</option>
        <option value="Asia/Taipei">🇹🇼 台北</option>
        <option value="Asia/Kuala_Lumpur">🇲🇾 吉隆坡</option>
        <option value="Asia/Dubai">🇦🇪 迪拜</option>
        <option value="Asia/Kolkata">🇮🇳 印度（德里）</option>
        <option value="Europe/London">🇬🇧 伦敦</option>
        <option value="Europe/Paris">🇫🇷 巴黎</option>
        <option value="Europe/Berlin">🇩🇪 柏林</option>
        <option value="Europe/Rome">🇮🇹 罗马</option>
        <option value="Europe/Madrid">🇪🇸 马德里</option>
        <option value="Europe/Moscow">🇷🇺 莫斯科</option>
        <option value="America/New_York">🇺🇸 纽约</option>
        <option value="America/Chicago">🇺🇸 芝加哥</option>
        <option value="America/Denver">🇺🇸 丹佛</option>
        <option value="America/Los_Angeles">🇺🇸 洛杉矶</option>
        <option value="America/Toronto">🇨🇦 多伦多</option>
        <option value="America/Vancouver">🇨🇦 温哥华</option>
        <option value="America/Sao_Paulo">🇧🇷 圣保罗</option>
        <option value="America/Mexico_City">🇲🇽 墨西哥城</option>
        <option value="Australia/Sydney">🇦🇺 悉尼</option>
        <option value="Australia/Melbourne">🇦🇺 墨尔本</option>
        <option value="Pacific/Auckland">🇳🇿 奥克兰</option>
        <option value="Africa/Cairo">🇪🇬 开罗</option>
        <option value="Africa/Cape_Town">🇿🇦 开普敦</option>
      </select>
    </div>
  </div>

  <div class="row">
    <div class="clock" id="clockA">
      <div class="city" id="cityALabel">🇨🇳 北京</div>
      <div class="time" id="timeA">--:--</div>
      <div class="date" id="dateA">----</div>
    </div>
    <div class="clock" id="clockB">
      <div class="city" id="cityBLabel">🇯🇵 东京</div>
      <div class="time" id="timeB">--:--</div>
      <div class="date" id="dateB">----</div>
    </div>
  </div>

  <div class="diff-area">
    <div class="diff-text" id="diffText">时差：+1 小时</div>
    <div class="diff-detail" id="diffDetail">东京比北京快 1 小时</div>
  </div>

  <div class="world-clocks">
    <h3 style="font-size:15px;margin:0 0 8px">🌍 世界主要城市当前时间</h3>
    <table>
      <thead><tr><th>城市</th><th>当前时间</th><th>与北京时差</th></tr></thead>
      <tbody id="worldTable"></tbody>
    </table>
  </div>
</div>

<script>
const WORLD_CITIES = [
  { tz: 'Asia/Tokyo', label: '东京' },
  { tz: 'Asia/Seoul', label: '首尔' },
  { tz: 'Asia/Bangkok', label: '曼谷' },
  { tz: 'Asia/Singapore', label: '新加坡' },
  { tz: 'Asia/Dubai', label: '迪拜' },
  { tz: 'Europe/London', label: '伦敦' },
  { tz: 'Europe/Paris', label: '巴黎' },
  { tz: 'Europe/Berlin', label: '柏林' },
  { tz: 'Europe/Moscow', label: '莫斯科' },
  { tz: 'America/New_York', label: '纽约' },
  { tz: 'America/Chicago', label: '芝加哥' },
  { tz: 'America/Denver', label: '丹佛' },
  { tz: 'America/Los_Angeles', label: '洛杉矶' },
  { tz: 'America/Toronto', label: '多伦多' },
  { tz: 'Australia/Sydney', label: '悉尼' },
  { tz: 'Pacific/Auckland', label: '奥克兰' },
]

function pad(n) { return String(n).padStart(2, '0') }

function formatTime(date, tz) {
  const opts = { timeZone: tz, hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }
  return new Intl.DateTimeFormat('zh-CN', opts).format(date)
}

function formatDate(date, tz) {
  const opts = { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }
  return new Intl.DateTimeFormat('zh-CN', opts).format(date)
}

function getOffsetMinutes(tz) {
  const d = new Date()
  const utc = d.getTime() + d.getTimezoneOffset() * 60000
  const local = new Date(utc).toLocaleString('zh-CN', { timeZone: tz })
  const diff = new Date(local).getTime() - new Date(utc).getTime()
  return Math.round(diff / 60000)
}

function timeDiffStr(minutes) {
  const hours = Math.floor(Math.abs(minutes) / 60)
  const mins = Math.abs(minutes) % 60
  const sign = minutes >= 0 ? '+' : '-'
  if (mins === 0) return `${sign}${hours} 小时`
  return `${sign}${hours} 小时 ${mins} 分`
}

function getCityName(val) {
  const opt = document.querySelector(`#cityA option[value="${val}"]`) || document.querySelector(`#cityB option[value="${val}"]`)
  return opt ? opt.textContent.trim().replace(/^[^\s]+\s/, '') : val
}

function updateClocks() {
  const now = new Date()
  const tzA = document.getElementById('cityA').value
  const tzB = document.getElementById('cityB').value
  const cityALabel = getCityName(tzA)
  const cityBLabel = getCityName(tzB)

  document.getElementById('cityALabel').textContent = cityALabel
  document.getElementById('cityBLabel').textContent = cityBLabel
  document.getElementById('timeA').textContent = formatTime(now, tzA)
  document.getElementById('timeB').textContent = formatTime(now, tzB)
  document.getElementById('dateA').textContent = formatDate(now, tzA)
  document.getElementById('dateB').textContent = formatDate(now, tzB)

  const offsetA = getOffsetMinutes(tzA)
  const offsetB = getOffsetMinutes(tzB)
  const diff = offsetB - offsetA

  document.getElementById('diffText').textContent = `时差：${timeDiffStr(diff)}`
  document.getElementById('diffDetail').textContent = diff >= 0
    ? `${cityBLabel}比${cityALabel}快${timeDiffStr(diff).replace('+', ' ')}`
    : `${cityBLabel}比${cityALabel}慢${timeDiffStr(diff).replace('-', ' ').replace('+', '')}`

  // World clocks table
  const beijingOffset = getOffsetMinutes('Asia/Shanghai')
  let html = ''
  WORLD_CITIES.forEach(c => {
    const o = getOffsetMinutes(c.tz)
    const diffWithBeijing = o - beijingOffset
    const t = formatTime(now, c.tz)
    const d = formatDate(now, c.tz)
    let badgeClass = 'diff-same'
    let diffLabel = '相同'
    if (diffWithBeijing > 0) { badgeClass = 'diff-ahead'; diffLabel = `快 ${timeDiffStr(diffWithBeijing).replace('+', '')}` }
    else if (diffWithBeijing < 0) { badgeClass = 'diff-behind'; diffLabel = `慢 ${timeDiffStr(diffWithBeijing).replace('-', '')}` }
    html += `<tr><td>${c.label}</td><td class="now-time">${t}</td><td><span class="diff-badge ${badgeClass}">${diffLabel}</span></td></tr>`
  })
  document.getElementById('worldTable').innerHTML = html
}

document.addEventListener('DOMContentLoaded', () => {
  updateClocks()
  setInterval(updateClocks, 1000)
  document.getElementById('cityA').addEventListener('change', updateClocks)
  document.getElementById('cityB').addEventListener('change', updateClocks)
})
</script>
