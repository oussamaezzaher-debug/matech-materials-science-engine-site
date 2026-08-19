/**
 * Matech Project Dashboard — Analytics & Data Visualization
 * Demo data aligned with Materials Science Engine scope.
 * Replace DATA sources with API calls when backend is ready.
 */

const CHART_COLORS = {
    accent: '#00d4ff',
    accentFade: 'rgba(0, 212, 255, 0.15)',
    success: '#00e676',
    warning: '#ffb300',
    danger: '#ff5252',
    purple: '#b388ff',
    orange: '#ff9100',
    grid: 'rgba(255, 255, 255, 0.06)',
    text: '#a8a8a8',
};

const DATA = {
    kpis: {
        7: { materials: 24, materialsChange: '+3', confidence: 87.2, confidenceChange: '+2.1%', runs: 18, runsChange: '+6', formulations: 12, formulationsChange: '0' },
        30: { materials: 47, materialsChange: '+8', confidence: 84.6, confidenceChange: '+4.3%', runs: 63, runsChange: '+22', formulations: 19, formulationsChange: '+3' },
        90: { materials: 47, materialsChange: '+15', confidence: 81.3, confidenceChange: '+7.8%', runs: 186, runsChange: '+64', formulations: 19, formulationsChange: '+7' },
        all: { materials: 47, materialsChange: '+47', confidence: 79.8, confidenceChange: 'baseline', runs: 312, runsChange: 'total', formulations: 19, formulationsChange: 'total' },
    },

    confidenceTrend: {
        7: {
            labels: ['Jun 28', 'Jun 29', 'Jun 30', 'Jul 1', 'Jul 2', 'Jul 3', 'Jul 4'],
            values: [85.1, 85.8, 86.2, 86.0, 87.1, 86.8, 87.2],
        },
        30: {
            labels: ['Jun 5', 'Jun 10', 'Jun 15', 'Jun 20', 'Jun 25', 'Jun 30', 'Jul 4'],
            values: [80.2, 81.5, 82.1, 83.0, 83.8, 84.2, 84.6],
        },
        90: {
            labels: ['Apr', 'May W1', 'May W3', 'Jun W1', 'Jun W3', 'Jul W1'],
            values: [73.5, 76.2, 78.4, 80.1, 82.0, 81.3],
        },
        all: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            values: [62.0, 68.5, 72.3, 75.8, 78.2, 81.0, 79.8],
        },
    },

    characterization: {
        7: { TGA: 5, DSC: 6, FTIR: 4, DMA: 3 },
        30: { TGA: 18, DSC: 22, FTIR: 14, DMA: 9 },
        90: { TGA: 52, DSC: 61, FTIR: 42, DMA: 31 },
        all: { TGA: 89, DSC: 98, FTIR: 71, DMA: 54 },
    },

    categories: {
        7: { Polymers: 8, Composites: 6, Additives: 5, Recyclates: 5 },
        30: { Polymers: 16, Composites: 12, Additives: 10, Recyclates: 9 },
        90: { Polymers: 16, Composites: 12, Additives: 10, Recyclates: 9 },
        all: { Polymers: 16, Composites: 12, Additives: 10, Recyclates: 9 },
    },

    transitions: {
        7: {
            labels: ['Jun 28', 'Jun 29', 'Jun 30', 'Jul 1', 'Jul 2', 'Jul 3', 'Jul 4'],
            draft: [2, 1, 3, 1, 2, 1, 0],
            testing: [3, 4, 2, 5, 3, 4, 3],
            validated: [1, 2, 3, 2, 4, 3, 5],
        },
        30: {
            labels: ['Jun 5', 'Jun 10', 'Jun 15', 'Jun 20', 'Jun 25', 'Jun 30', 'Jul 4'],
            draft: [4, 3, 5, 2, 3, 2, 1],
            testing: [8, 10, 9, 12, 11, 10, 9],
            validated: [3, 5, 7, 8, 10, 12, 14],
        },
        90: {
            labels: ['Apr', 'May W1', 'May W3', 'Jun W1', 'Jun W3', 'Jul W1'],
            draft: [12, 10, 8, 6, 4, 3],
            testing: [18, 22, 24, 26, 28, 27],
            validated: [8, 12, 18, 24, 30, 36],
        },
        all: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            draft: [20, 18, 15, 12, 8, 5, 3],
            testing: [10, 14, 18, 22, 26, 28, 27],
            validated: [2, 5, 10, 16, 24, 32, 36],
        },
    },

    benchmarks: [
        { name: 'ISO 1133 (MFI)', compliance: 94 },
        { name: 'ASTM D638 (Tensile)', compliance: 88 },
        { name: 'ISO 527 (Flexural)', compliance: 91 },
        { name: 'Internal Matech Spec v2.1', compliance: 76 },
    ],

    engines: [
        { name: 'Material Identity', status: 'active' },
        { name: 'State Transitions', status: 'active' },
        { name: 'Confidence Engine', status: 'active' },
        { name: 'Benchmark Governance', status: 'active' },
        { name: 'Characterization (TGA/DSC/FTIR/DMA)', status: 'dev' },
        { name: 'Additives Engine', status: 'planned' },
        { name: 'Virtual Lab', status: 'planned' },
    ],

    activity: [
        { time: '2h ago', event: 'DSC analysis completed', material: 'PP-GF30-001', engine: 'Characterization', confidence: 92 },
        { time: '5h ago', event: 'State transition: Testing → Validated', material: 'PA6-CF15-003', engine: 'State Transitions', confidence: 89 },
        { time: '8h ago', event: 'Confidence score updated', material: 'HDPE-REC-007', engine: 'Confidence Engine', confidence: 78 },
        { time: '1d ago', event: 'New formulation created', material: 'EP-ADH-012', engine: 'Formulation', confidence: 65 },
        { time: '1d ago', event: 'TGA thermal profile ingested', material: 'PET-REC-004', engine: 'Characterization', confidence: 81 },
        { time: '2d ago', event: 'Benchmark check passed', material: 'PP-GF30-001', engine: 'Benchmark Governance', confidence: 94 },
        { time: '2d ago', event: 'FTIR spectrum matched', material: 'ABS-FR-002', engine: 'Characterization', confidence: 86 },
        { time: '3d ago', event: 'Material identity registered', material: 'PLA-BIO-009', engine: 'Material Identity', confidence: 71 },
    ],

    materials: [
        { id: 'MT-001', name: 'PP-GF30-001', category: 'Composites', state: 'validated', confidence: 94, updated: 'Jul 4, 2026' },
        { id: 'MT-002', name: 'PA6-CF15-003', category: 'Composites', state: 'validated', confidence: 89, updated: 'Jul 4, 2026' },
        { id: 'MT-003', name: 'ABS-FR-002', category: 'Polymers', state: 'testing', confidence: 86, updated: 'Jul 3, 2026' },
        { id: 'MT-004', name: 'PET-REC-004', category: 'Recyclates', state: 'testing', confidence: 81, updated: 'Jul 3, 2026' },
        { id: 'MT-005', name: 'HDPE-REC-007', category: 'Recyclates', state: 'testing', confidence: 78, updated: 'Jul 2, 2026' },
        { id: 'MT-006', name: 'PLA-BIO-009', category: 'Polymers', state: 'draft', confidence: 71, updated: 'Jul 1, 2026' },
        { id: 'MT-007', name: 'EP-ADH-012', category: 'Additives', state: 'draft', confidence: 65, updated: 'Jul 1, 2026' },
    ],
};

let charts = {};

function getConfidenceClass(value) {
    if (value >= 85) return 'high';
    if (value >= 70) return 'medium';
    return 'low';
}

function formatChange(value, range) {
    if (range === 'all' && (value === 'total' || value === 'baseline')) {
        return range === 'all' && value === 'baseline' ? 'Since launch' : 'All time';
    }
    if (value.startsWith('+') || value.startsWith('-')) {
        return `${value} vs prior period`;
    }
    if (value === '0') return 'No change';
    return value;
}

function getChangeClass(value) {
    if (value.startsWith('+')) return 'positive';
    if (value.startsWith('-')) return 'negative';
    return 'neutral';
}

function updateKPIs(range) {
    const kpi = DATA.kpis[range];
    document.getElementById('kpi-materials').textContent = kpi.materials;
    document.getElementById('kpi-confidence').textContent = `${kpi.confidence}%`;
    document.getElementById('kpi-runs').textContent = kpi.runs;
    document.getElementById('kpi-formulations').textContent = kpi.formulations;

    const fields = ['materials', 'confidence', 'runs', 'formulations'];
    fields.forEach((field) => {
        const el = document.getElementById(`kpi-${field}-change`);
        const change = kpi[`${field}Change`];
        el.textContent = formatChange(change, range);
        el.className = `kpi-change ${getChangeClass(change)}`;
    });
}

function chartDefaults() {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: { color: CHART_COLORS.text, boxWidth: 12, padding: 16 },
            },
        },
        scales: {
            x: {
                ticks: { color: CHART_COLORS.text },
                grid: { color: CHART_COLORS.grid },
            },
            y: {
                ticks: { color: CHART_COLORS.text },
                grid: { color: CHART_COLORS.grid },
            },
        },
    };
}

function destroyCharts() {
    Object.values(charts).forEach((chart) => chart.destroy());
    charts = {};
}

function renderConfidenceChart(range) {
    const ctx = document.getElementById('confidence-chart');
    const data = DATA.confidenceTrend[range];

    charts.confidence = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Avg Confidence %',
                data: data.values,
                borderColor: CHART_COLORS.accent,
                backgroundColor: CHART_COLORS.accentFade,
                fill: true,
                tension: 0.35,
                pointRadius: 4,
                pointBackgroundColor: CHART_COLORS.accent,
            }],
        },
        options: {
            ...chartDefaults(),
            scales: {
                ...chartDefaults().scales,
                y: { ...chartDefaults().scales.y, min: 60, max: 100 },
            },
        },
    });
}

function renderCharacterizationChart(range) {
    const ctx = document.getElementById('characterization-chart');
    const data = DATA.characterization[range];

    charts.characterization = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: 'Runs',
                data: Object.values(data),
                backgroundColor: [
                    CHART_COLORS.accent,
                    CHART_COLORS.success,
                    CHART_COLORS.purple,
                    CHART_COLORS.orange,
                ],
                borderRadius: 4,
            }],
        },
        options: {
            ...chartDefaults(),
            plugins: { legend: { display: false } },
        },
    });
}

function renderCategoriesChart(range) {
    const ctx = document.getElementById('categories-chart');
    const data = DATA.categories[range];

    charts.categories = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: [
                    CHART_COLORS.accent,
                    CHART_COLORS.success,
                    CHART_COLORS.warning,
                    CHART_COLORS.purple,
                ],
                borderColor: '#1a1a1a',
                borderWidth: 2,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: CHART_COLORS.text, boxWidth: 12, padding: 12 },
                },
            },
        },
    });
}

function renderTransitionsChart(range) {
    const ctx = document.getElementById('transitions-chart');
    const data = DATA.transitions[range];

    charts.transitions = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: 'Draft',
                    data: data.draft,
                    backgroundColor: 'rgba(136, 136, 136, 0.7)',
                    borderRadius: 2,
                },
                {
                    label: 'Testing',
                    data: data.testing,
                    backgroundColor: 'rgba(255, 179, 0, 0.7)',
                    borderRadius: 2,
                },
                {
                    label: 'Validated',
                    data: data.validated,
                    backgroundColor: 'rgba(0, 230, 118, 0.7)',
                    borderRadius: 2,
                },
            ],
        },
        options: {
            ...chartDefaults(),
            scales: {
                ...chartDefaults().scales,
                x: { ...chartDefaults().scales.x, stacked: true },
                y: { ...chartDefaults().scales.y, stacked: true },
            },
        },
    });
}

function renderBenchmarks() {
    const list = document.getElementById('benchmark-list');
    list.innerHTML = DATA.benchmarks.map((b) => `
        <li>
            <span class="benchmark-name">${b.name}</span>
            <span class="benchmark-value">${b.compliance}%</span>
        </li>
    `).join('');
}

function renderEngines() {
    const list = document.getElementById('engine-list');
    const labels = { active: 'Active', dev: 'In Development', planned: 'Planned' };

    list.innerHTML = DATA.engines.map((e) => `
        <li>
            <span class="engine-name">${e.name}</span>
            <span class="status-dot ${e.status}">${labels[e.status]}</span>
        </li>
    `).join('');
}

function confidenceBar(value) {
    const cls = getConfidenceClass(value);
    return `
        <div class="confidence-bar">
            <div class="confidence-bar-track">
                <div class="confidence-bar-fill ${cls}" style="width: ${value}%"></div>
            </div>
            <span class="confidence-pct">${value}%</span>
        </div>
    `;
}

function renderActivity() {
    const tbody = document.getElementById('activity-body');
    document.getElementById('activity-count').textContent = `${DATA.activity.length} events`;

    tbody.innerHTML = DATA.activity.map((row) => `
        <tr>
            <td>${row.time}</td>
            <td>${row.event}</td>
            <td><code>${row.material}</code></td>
            <td><span class="engine-tag">${row.engine}</span></td>
            <td>${confidenceBar(row.confidence)}</td>
        </tr>
    `).join('');
}

function renderMaterials() {
    const tbody = document.getElementById('materials-body');

    tbody.innerHTML = DATA.materials.map((m) => `
        <tr>
            <td><code>${m.id}</code></td>
            <td>${m.name}</td>
            <td>${m.category}</td>
            <td><span class="state-badge ${m.state}">${m.state}</span></td>
            <td>${confidenceBar(m.confidence)}</td>
            <td>${m.updated}</td>
        </tr>
    `).join('');
}

function renderDashboard(range) {
    updateKPIs(range);
    destroyCharts();
    renderConfidenceChart(range);
    renderCharacterizationChart(range);
    renderCategoriesChart(range);
    renderTransitionsChart(range);
}

function initDashboard() {
    const now = new Date();
    document.getElementById('last-updated').textContent = now.toLocaleString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric',
        hour: '2-digit', minute: '2-digit',
    });
    document.getElementById('last-updated').dateTime = now.toISOString();

    renderBenchmarks();
    renderEngines();
    renderActivity();
    renderMaterials();

    const select = document.getElementById('date-range');
    renderDashboard(select.value);

    select.addEventListener('change', (e) => {
        renderDashboard(e.target.value);
    });
}

document.addEventListener('DOMContentLoaded', initDashboard);
