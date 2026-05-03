/* ============================================================
   EVERYTHING Platform — Demo Utilities
   Shared JS used across all solution demos
   ============================================================ */

const EV = {

  /* ── Theme Toggle ─────────────────────────────────────────── */
  initTheme() {
    const saved = localStorage.getItem('ev-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const curr = document.documentElement.getAttribute('data-theme');
        const next = curr === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('ev-theme', next);
      });
    });
  },

  /* ── Tabs ─────────────────────────────────────────────────── */
  initTabs(container = document) {
    container.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.closest('[data-tab-group]') || document;
        const target = btn.dataset.tab;
        group.querySelectorAll('[data-tab]').forEach(b => b.classList.remove('active'));
        group.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = group.querySelector(`#tab-${target}`);
        if (panel) panel.classList.add('active');
      });
    });
  },

  /* ── Modal ────────────────────────────────────────────────── */
  openModal(id) {
    const m = document.getElementById(id);
    if (m) { m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
  },
  closeModal(id) {
    const m = document.getElementById(id);
    if (m) { m.style.display = 'none'; document.body.style.overflow = ''; }
  },
  initModals() {
    document.querySelectorAll('[data-modal-open]').forEach(btn => {
      btn.addEventListener('click', () => EV.openModal(btn.dataset.modalOpen));
    });
    document.querySelectorAll('[data-modal-close], .modal-backdrop').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target === el) {
          const modal = el.closest('.modal-backdrop') || document.getElementById(el.dataset.modalClose);
          if (modal) { modal.style.display = 'none'; document.body.style.overflow = ''; }
        }
      });
    });
  },

  /* ── Toast ────────────────────────────────────────────────── */
  toast(message, type = 'default', duration = 3000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const icons = { success: '✓', danger: '✕', warning: '⚠', default: 'ℹ' };
    const toast = document.createElement('div');
    toast.className = `toast ${type !== 'default' ? type : ''}`;
    toast.innerHTML = `<span>${icons[type] || icons.default}</span> ${message}`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity .3s'; setTimeout(() => toast.remove(), 300); }, duration);
  },

  /* ── Sidebar Mobile ───────────────────────────────────────── */
  initSidebar() {
    const toggle = document.querySelector('[data-sidebar-toggle]');
    const sidebar = document.querySelector('.sidebar');
    if (toggle && sidebar) {
      toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
      document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
          sidebar.classList.remove('open');
        }
      });
    }
  },

  /* ── Search / Filter ──────────────────────────────────────── */
  initSearch(inputSelector, rowSelector, columns = []) {
    const input = document.querySelector(inputSelector);
    if (!input) return;
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase();
      document.querySelectorAll(rowSelector).forEach(row => {
        const text = columns.length
          ? columns.map(i => row.children[i]?.textContent || '').join(' ').toLowerCase()
          : row.textContent.toLowerCase();
        row.style.display = text.includes(q) ? '' : 'none';
      });
    });
  },

  /* ── Simple Chart (no deps) ───────────────────────────────── */
  barChart(canvasId, labels, data, color = '#2563eb') {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const max = Math.max(...data) * 1.1 || 1;
    const pad = { top: 20, right: 20, bottom: 40, left: 40 };
    const chartW = W - pad.left - pad.right;
    const chartH = H - pad.top - pad.bottom;
    const barW = (chartW / labels.length) * 0.6;
    const gap   = chartW / labels.length;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-gray-100') || '#f3f4f6';
    ctx.fillRect(0, 0, W, H);
    // Grid lines
    ctx.strokeStyle = '#e5e7eb'; ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = pad.top + (chartH / 4) * i;
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(W - pad.right, y); ctx.stroke();
    }
    // Bars
    labels.forEach((label, i) => {
      const barH = (data[i] / max) * chartH;
      const x = pad.left + gap * i + (gap - barW) / 2;
      const y = pad.top + chartH - barH;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]) : ctx.rect(x, y, barW, barH);
      ctx.fill();
      // Label
      ctx.fillStyle = '#6b7280'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(label, x + barW / 2, H - pad.bottom + 16);
      // Value
      ctx.fillStyle = '#374151'; ctx.font = 'bold 11px sans-serif';
      ctx.fillText(data[i], x + barW / 2, y - 5);
    });
  },

  /* ── Random Data Helpers ──────────────────────────────────── */
  rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; },
  pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; },
  id(prefix = 'ID') { return `${prefix}-${Date.now().toString(36).toUpperCase()}`; },

  /* ── Date Helpers ─────────────────────────────────────────── */
  today() { return new Date().toLocaleDateString('en-IN'); },
  daysAgo(n) {
    const d = new Date(); d.setDate(d.getDate() - n);
    return d.toLocaleDateString('en-IN');
  },
  daysFrom(n) {
    const d = new Date(); d.setDate(d.getDate() + n);
    return d.toLocaleDateString('en-IN');
  },

  /* ── Format ───────────────────────────────────────────────── */
  currency(n, symbol = '₹') {
    return symbol + Number(n).toLocaleString('en-IN');
  },
  percent(n) { return n.toFixed(1) + '%'; },

  /* ── Init All ─────────────────────────────────────────────── */
  init() {
    this.initTheme();
    this.initTabs();
    this.initModals();
    this.initSidebar();
  }
};

document.addEventListener('DOMContentLoaded', () => EV.init());
