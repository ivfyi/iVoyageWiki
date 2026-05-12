---
title: "旅行预算计算器"
description: "出国旅行预算规划和费用计算工具，支持多币种"
---

# 旅行预算计算器

<style>
.budget-calc { max-width: 700px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
.budget-calc .form-group { margin-bottom: 16px; }
.budget-calc label { display: block; font-weight: 600; margin-bottom: 4px; font-size: 14px; }
.budget-calc input[type="number"], .budget-calc select { width: 100%; padding: 8px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 15px; box-sizing: border-box; }
.budget-calc input[type="number"]:focus, .budget-calc select:focus { outline: none; border-color: #4A90D9; box-shadow: 0 0 0 2px rgba(74,144,217,0.2); }
.budget-calc .row { display: flex; gap: 12px; }
.budget-calc .row > * { flex: 1; }
.budget-calc .cost-table { width: 100%; border-collapse: collapse; margin: 16px 0; }
.budget-calc .cost-table th, .budget-calc .cost-table td { padding: 10px 12px; text-align: left; border-bottom: 1px solid #eee; }
.budget-calc .cost-table th { font-weight: 600; background: #f5f7fa; font-size: 13px; }
.budget-calc .cost-table td input { width: 100%; padding: 6px 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; box-sizing: border-box; }
.budget-calc .total { background: #e8f4e8; padding: 16px; border-radius: 8px; text-align: center; margin-top: 16px; }
.budget-calc .total h3 { margin: 0 0 8px; font-size: 18px; }
.budget-calc .total .amount { font-size: 28px; font-weight: 700; color: #2d8a4e; }
.budget-calc .total .per-person { font-size: 14px; color: #666; margin-top: 4px; }
.budget-calc .per-day { color: #888; font-size: 12px; }
</style>

<div class="budget-calc">
  <div class="row">
    <div class="form-group">
      <label>出行天数</label>
      <input type="number" id="days" value="7" min="1" max="90">
    </div>
    <div class="form-group">
      <label>出行人数</label>
      <input type="number" id="people" value="1" min="1" max="20">
    </div>
    <div class="form-group">
      <label>货币单位</label>
      <select id="currency">
        <option value="CNY">人民币 ¥</option>
        <option value="USD">美元 $</option>
        <option value="EUR">欧元 €</option>
        <option value="JPY">日元 ¥</option>
        <option value="THB">泰铢 ฿</option>
        <option value="KRW">韩元 ₩</option>
        <option value="GBP">英镑 £</option>
        <option value="AUD">澳元 A$</option>
      </select>
    </div>
  </div>

  <table class="cost-table">
    <thead><tr><th>费用项目</th><th>每日费用</th><th>总费用</th></tr></thead>
    <tbody id="costRows">
      <tr><td>住宿</td><td><input type="number" class="daily" data-label="住宿" value="300"></td><td class="total-cell">—</td></tr>
      <tr><td>餐饮</td><td><input type="number" class="daily" data-label="餐饮" value="200"></td><td class="total-cell">—</td></tr>
      <tr><td>当地交通</td><td><input type="number" class="daily" data-label="当地交通" value="80"></td><td class="total-cell">—</td></tr>
      <tr><td>景点门票</td><td><input type="number" class="daily" data-label="景点门票" value="100"></td><td class="total-cell">—</td></tr>
      <tr><td>购物/纪念品</td><td><input type="number" class="daily" data-label="购物/纪念品" value="100"></td><td class="total-cell">—</td></tr>
      <tr><td>其他杂费</td><td><input type="number" class="daily" data-label="其他杂费" value="50"></td><td class="total-cell">—</td></tr>
    </tbody>
  </table>

  <div class="row">
    <div class="form-group">
      <label>往返机票（总额）</label>
      <input type="number" id="flights" value="2000" min="0">
    </div>
    <div class="form-group">
      <label>旅行保险（总额）</label>
      <input type="number" id="insurance" value="200" min="0">
    </div>
    <div class="form-group">
      <label>签证费用（总额）</label>
      <input type="number" id="visa" value="0" min="0">
    </div>
  </div>

  <div class="total">
    <h3>旅行总预算</h3>
    <div class="amount" id="totalAmount">¥ 7,530</div>
    <div class="per-person" id="perPerson">人均 ¥ 7,530</div>
    <div class="per-day" id="perDay">日均 ¥ 1,076</div>
  </div>
</div>

<script>
if (typeof window !== 'undefined') {
function calculate() {
  const days = parseInt(document.getElementById('days').value) || 1
  const people = parseInt(document.getElementById('people').value) || 1
  const curr = document.getElementById('currency').value
  const symbols = { CNY: '¥', USD: '$', EUR: '€', JPY: '¥', THB: '฿', KRW: '₩', GBP: '£', AUD: 'A$' }
  const sym = symbols[curr] || '¥'
  const flights = parseFloat(document.getElementById('flights').value) || 0
  const insurance = parseFloat(document.getElementById('insurance').value) || 0
  const visa = parseFloat(document.getElementById('visa').value) || 0

  let dailyTotal = 0
  const rows = document.querySelectorAll('.daily')
  rows.forEach(input => {
    const val = parseFloat(input.value) || 0
    dailyTotal += val
  })

  const dailySum = dailyTotal * days
  const oneTime = flights + insurance + visa
  const total = dailySum * people + oneTime

  const format = (n) => {
    const s = curr === 'JPY' || curr === 'KRW' ? Math.round(n).toString() : n.toLocaleString('zh-CN', { maximumFractionDigits: 0 })
    return sym + ' ' + s
  }

  // Update per-row totals
  document.querySelectorAll('.total-cell').forEach((cell, i) => {
    const val = parseFloat(rows[i].value) || 0
    cell.textContent = format(val * days * people)
  })

  document.getElementById('totalAmount').textContent = format(total)
  document.getElementById('perPerson').textContent = '人均 ' + format(total / people)
  document.getElementById('perDay').textContent = '日均 ' + format(total / days / people)
}

document.addEventListener('DOMContentLoaded', () => {
  calculate()
  document.querySelectorAll('input, select').forEach(el => el.addEventListener('input', calculate))
})
}
</script>
