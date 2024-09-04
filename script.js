document.addEventListener('DOMContentLoaded', () => {
    const ratcoinButton = document.getElementById('get-ratcoin');
    const ratcoinAmount = document.getElementById('ratcoin-amount');
    const leaderboardBody = document.getElementById('leaderboard-body');

    // Примерные данные для лидеров
    let leaderboard = [
        { user: 'User1', coin: 5000 },
        { user: 'User2', coin: 3000 },
        { user: 'User3', coin: 2000 },
    ];

    function updateLeaderboard() {
        leaderboard.sort((a, b) => b.coin - a.coin);
        leaderboardBody.innerHTML = leaderboard.map((item, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${item.user}</td>
                <td>${item.coin}</td>
            </tr>
        `).join('');
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    ratcoinButton.addEventListener('click', () => {
        const earnedCoins = getRandomInt(2000, 10000);
        ratcoinAmount.textContent = `Вы получили: ${earnedCoins} RatCoin`;
        // Для демонстрации обновляем список лидеров
        leaderboard.push({ user: 'NewUser', coin: earnedCoins });
        updateLeaderboard();
    });

    updateLeaderboard();
});
