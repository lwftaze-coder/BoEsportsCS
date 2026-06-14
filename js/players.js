// Данные игроков и логика отображения
const playersData = {
    mAVR1K: {
        name: 'mAVR1K',
        role: 'Entry Fragger',
        rating: 1.08,
        kd: '1.06',
        avg: '17 kills',
        hs: '70%',
        specialty: 'Первый вход, агрессивный стиль'
    },
    Lwftaze: {
        name: 'Lwftaze',
        role: 'Lurker',
        rating: 1.06,
        kd: '1.13',
        avg: '17 kills',
        hs: '40%',
        specialty: 'Фланги, неожиданные атаки'
    },
    sem41qq: {
        name: 'sem41qq',
        role: 'AWPer',
        rating: 1.22,
        kd: '1.24',
        avg: '21 kills',
        hs: '60%',
        specialty: 'Снайпер, ключевые фраги',
        isMvp: true
    },
    s0plen0k: {
        name: 's0plen0k',
        role: 'IGL / Rifler',
        rating: 1.13,
        kd: '1.13',
        avg: '18 kills',
        hs: '50%',
        specialty: 'Стратегии, командная игра'
    },
    Komugi: {
        name: 'Komugi',
        role: 'Support',
        rating: 0.98,
        kd: '0.94',
        avg: '15 kills',
        hs: '80%',
        specialty: 'Поддержка, utility'
    }
};

function showPlayer(playerId) {
    const player = playersData[playerId];
    if (!player) return;
    
    const panel = document.getElementById('panel');
    const ratingClass = player.rating >= 1.15 ? 'gold' : 'blue';
    const mvpBadge = player.isMvp ? '<span class="gold"> ⭐ MVP</span>' : '';
    
    panel.style.display = 'block';
    panel.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h2 style="color: #7eb0ff;">${player.name}${mvpBadge}</h2>
            <button onclick="closePanel()" style="background: none; border: none; color: white; font-size: 24px; cursor: pointer;">✕</button>
        </div>
        <p><strong>🎭 Роль:</strong> ${player.role}</p>
        <p><strong>📊 Статистика:</strong></p>
        <ul style="margin-left: 20px; margin-top: 10px;">
            <li>Rating: <span class="${ratingClass}">${player.rating}</span></li>
            <li>K/D: ${player.kd}</li>
            <li>Средний фраг: ${player.avg}</li>
            <li>Headshots: ${player.hs}</li>
        </ul>
        <p><strong>💪 Сильные стороны:</strong> ${player.specialty}</p>
        <hr style="margin: 15px 0; border-color: rgba(255,255,255,0.1);">
        <small>🏆 Сыграно матчей: 24 | Winrate: 66.7%</small>
    `;
    
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closePanel() {
    const panel = document.getElementById('panel');
    panel.style.display = 'none';
    panel.innerHTML = '';
}

function initPlayers() {
    const playerCards = document.querySelectorAll('.player-card');
    playerCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const playerId = card.getAttribute('data-player');
            if (playerId) {
                showPlayer(playerId);
            }
        });
    });
}

// Закрытие панели по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePanel();
    }
});

// Запуск после загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPlayers);
} else {
    initPlayers();
}
