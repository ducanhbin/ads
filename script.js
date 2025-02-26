document.addEventListener("DOMContentLoaded", function () {
    const continueButton = document.querySelector('.continue');
    const ad = document.querySelector('.ad');
    const countdownDisplay = document.getElementById('countdown');

    let timer = 30;

    const updateCountdown = () => {
        countdownDisplay.textContent = timer;
    };

    const countdown = () => {
        updateCountdown();
        timer--;

        if (timer < 0) {
            clearInterval(interval);
            ad.textContent = '✅ Quảng cáo đã hoàn tất!';
            continueButton.disabled = false;
            continueButton.style.backgroundColor = "#28a745"; // Chuyển sang màu xanh lá

            // Chỉ thêm sự kiện click 1 lần
            continueButton.addEventListener("click", () => {
                window.location.href = "https://example.com"; // Thay bằng URL thật
            }, { once: true });
        }
    };

    // Bắt đầu đếm ngược
    updateCountdown();
    let interval = setInterval(countdown, 1000);
});

