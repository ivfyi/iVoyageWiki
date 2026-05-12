---
title: "汇率换算器"
description: "实时汇率换算工具，支持全球主要货币"
---

# 汇率换算器

<style>
.conv { max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
.conv .swap-row { display: flex; gap: 12px; align-items: center; margin-bottom: 16px; }
.conv .swap-row > * { flex: 1; }
.conv .swap-btn { flex: 0 0 44px; height: 44px; border: 1px solid #ddd; border-radius: 50%; background: #f5f7fa; cursor: pointer; font-size: 20px; display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
.conv .swap-btn:hover { background: #e8ecf1; }
.conv label { display: block; font-weight: 600; margin-bottom: 4px; font-size: 13px; }
.conv select, .conv input { width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px; box-sizing: border-box; }
.conv select:focus, .conv input:focus { outline: none; border-color: #4A90D9; box-shadow: 0 0 0 2px rgba(74,144,217,0.2); }
.conv .result-area { margin-top: 20px; padding: 20px; background: #f0f7ff; border-radius: 10px; text-align: center; }
.conv .result-amount { font-size: 32px; font-weight: 700; color: #1a5fa8; margin: 8px 0; }
.conv .rate-info { font-size: 13px; color: #888; margin-top: 4px; }
.conv .update-time { font-size: 12px; color: #aaa; margin-top: 12px; }
.conv .quick-row { display: flex; gap: 8px; flex-wrap: wrap; margin: 12px 0; }
.conv .quick-btn { padding: 6px 16px; border: 1px solid #ddd; border-radius: 20px; background: #fff; cursor: pointer; font-size: 13px; transition: all 0.2s; }
.conv .quick-btn:hover { background: #4A90D9; color: #fff; border-color: #4A90D9; }
.conv .popular-pairs { margin-top: 20px; }
.conv .popular-pairs table { width: 100%; border-collapse: collapse; font-size: 14px; }
.conv .popular-pairs td { padding: 8px 12px; border-bottom: 1px solid #eee; }
.conv .popular-pairs .rate { text-align: right; font-weight: 600; }
</style>

<div class="conv">
  <div class="swap-row">
    <div>
      <label>从</label>
      <select id="fromCurrency">
        <option value="CNY">人民币 CNY</option>
        <option value="USD" selected>美元 USD</option>
        <option value="EUR">欧元 EUR</option>
        <option value="GBP">英镑 GBP</option>
        <option value="JPY">日元 JPY</option>
        <option value="KRW">韩元 KRW</option>
        <option value="THB">泰铢 THB</option>
        <option value="HKD">港币 HKD</option>
        <option value="SGD">新加坡元 SGD</option>
        <option value="AUD">澳元 AUD</option>
        <option value="CAD">加元 CAD</option>
        <option value="MYR">马来西亚令吉 MYR</option>
        <option value="VND">越南盾 VND</option>
        <option value="TWD">新台币 TWD</option>
        <option value="CHF">瑞士法郎 CHF</option>
      </select>
    </div>
    <button class="swap-btn" id="swapBtn" title="互换货币">⇄</button>
    <div>
      <label>到</label>
      <select id="toCurrency">
        <option value="CNY" selected>人民币 CNY</option>
        <option value="USD">美元 USD</option>
        <option value="EUR">欧元 EUR</option>
        <option value="GBP">英镑 GBP</option>
        <option value="JPY">日元 JPY</option>
        <option value="KRW">韩元 KRW</option>
        <option value="THB">泰铢 THB</option>
        <option value="HKD">港币 HKD</option>
        <option value="SGD">新加坡元 SGD</option>
        <option value="AUD">澳元 AUD</option>
        <option value="CAD">加元 CAD</option>
        <option value="MYR">马来西亚令吉 MYR</option>
        <option value="VND">越南盾 VND</option>
        <option value="TWD">新台币 TWD</option>
        <option value="CHF">瑞士法郎 CHF</option>
      </select>
    </div>
  </div>

  <div class="swap-row">
    <div>
      <label>金额</label>
      <input type="number" id="amount" value="100" min="0" step="any">
    </div>
    <div style="flex:0 0 44px"></div>
    <div>
      <label>换算结果</label>
      <div style="padding:10px 12px;border:1px solid #eee;border-radius:6px;background:#fafafa;font-size:16px;font-weight:600;min-height:22px" id="resultDisplay"></div>
    </div>
  </div>

  <div class="quick-row">
    <button class="quick-btn" data-amount="1">1</button>
    <button class="quick-btn" data-amount="10">10</button>
    <button class="quick-btn" data-amount="50">50</button>
    <button class="quick-btn" data-amount="100">100</button>
    <button class="quick-btn" data-amount="500">500</button>
    <button class="quick-btn" data-amount="1000">1000</button>
  </div>

  <div class="result-area">
    <div id="resultLabel" style="font-size:14px;color:#666">100 USD =</div>
    <div class="result-amount" id="resultAmount">—</div>
    <div class="rate-info" id="rateInfo">获取汇率中...</div>
    <div class="update-time" id="updateTime"></div>
  </div>

  <div class="popular-pairs">
    <h3 style="font-size:15px;margin:0 0 8px">📊 常用汇率参考</h3>
    <table id="rateTable">
      <tbody>
        <tr><td>1 USD</td><td class="rate">—</td><td>CNY</td></tr>
        <tr><td>1 EUR</td><td class="rate">—</td><td>CNY</td></tr>
        <tr><td>1 GBP</td><td class="rate">—</td><td>CNY</td></tr>
        <tr><td>100 JPY</td><td class="rate">—</td><td>CNY</td></tr>
        <tr><td>1 THB</td><td class="rate">—</td><td>CNY</td></tr>
        <tr><td>1 KRW</td><td class="rate">—</td><td>CNY</td></tr>
        <tr><td>1 AUD</td><td class="rate">—</td><td>CNY</td></tr>
        <tr><td>1 HKD</td><td class="rate">—</td><td>CNY</td></tr>
      </tbody>
    </table>
  </div>
</div>

<script>
const CACHE_KEY = 'opencode_exchange_rates'
const CACHE_DURATION = 3600000 // 1 hour

async function fetchRates() {
  const cached = localStorage.getItem(CACHE_KEY)
  if (cached) {
    const { data, timestamp } = JSON.parse(cached)
    if (Date.now() - timestamp < CACHE_DURATION) return data
  }
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD')
    const json = await res.json()
    if (json.result === 'success') {
      const data = { rates: json.rates, time: json.time_last_update_utc }
      localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }))
      return data
    }
  } catch (e) {
    console.warn('汇率API请求失败，使用本地缓存')
  }
  return null
}

function getSymbol(code) {
  const syms = { CNY:'¥', USD:'$', EUR:'€', GBP:'£', JPY:'¥', KRW:'₩', THB:'฿', HKD:'HK$', SGD:'S$', AUD:'A$', CAD:'C$', MYR:'RM', VND:'₫', TWD:'NT$', CHF:'Fr' }
  return syms[code] || code
}

function calcRate(rates, from, to) {
  if (from === 'USD') return rates[to] || 1
  if (to === 'USD') return 1 / (rates[from] || 1)
  return (rates[to] || 1) / (rates[from] || 1)
}

async function convert() {
  const from = document.getElementById('fromCurrency').value
  const to = document.getElementById('toCurrency').value
  const amount = parseFloat(document.getElementById('amount').value) || 0
  const data = await fetchRates()
  const rate = data ? calcRate(data.rates, from, to) : null

  const symFrom = getSymbol(from)
  const symTo = getSymbol(to)

  if (rate) {
    const result = amount * rate
    const fmtFrom = from === 'JPY' || from === 'KRW' || from === 'VND' ? Math.round(amount) : amount.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    const fmtTo = to === 'JPY' || to === 'KRW' || to === 'VND' ? Math.round(result) : result.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

    document.getElementById('resultLabel').textContent = `${symFrom} ${fmtFrom} ${from} =`
    document.getElementById('resultAmount').textContent = `${symTo} ${fmtTo}`
    document.getElementById('rateInfo').textContent = `1 ${from} = ${rate.toFixed(6)} ${to}`
    document.getElementById('updateTime').textContent = data.time ? `汇率更新：${data.time}` : ''

    // Update popular pairs
    const pairs = ['USD', 'EUR', 'GBP', 'JPY', 'THB', 'KRW', 'AUD', 'HKD']
    const rows = document.querySelectorAll('#rateTable .rate')
    pairs.forEach((code, i) => {
      const r = calcRate(data.rates, code, 'CNY')
      const label = code === 'JPY' ? `100 ${code}` : `1 ${code}`
      rows[i].textContent = code === 'JPY' ? (r * 100).toFixed(4) : r.toFixed(4)
    })
  } else {
    document.getElementById('resultLabel').textContent = '汇率数据加载失败'
    document.getElementById('resultAmount').textContent = '—'
    document.getElementById('rateInfo').textContent = '请检查网络连接后刷新页面'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  convert()
  document.getElementById('fromCurrency').addEventListener('change', convert)
  document.getElementById('toCurrency').addEventListener('change', convert)
  document.getElementById('amount').addEventListener('input', convert)
  document.getElementById('swapBtn').addEventListener('click', () => {
    const from = document.getElementById('fromCurrency')
    const to = document.getElementById('toCurrency')
    const tmp = from.value
    from.value = to.value
    to.value = tmp
    convert()
  })
  document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('amount').value = btn.dataset.amount
      convert()
    })
  })
})
</script>
