function joinGroup() {
    const platform = document.getElementById('platform').value;
    const group = document.getElementById('group').value;
    const links = {
        whatsapp: {
            1: "https://chat.whatsapp.com/HTp3rkM8rRGLevVwFDW5wD",
            2: "https://chat.whatsapp.com/BHuxtltTcDF6aqT0gaohN4",
            community: "https://chat.whatsapp.com/IKg4TDkD8sH69KT2HocGTN",
            tools: "https://t.me/GithubToolDeveloper"
        },
        telegram: {
            1: "https://t.me/HTp3rkM8rRGLevVwFDW5wD",
            2: "https://t.me/BHuxtltTcDF6aqT0gaohN4",
            community: "https://chat.whatsapp.com/IKg4TDkD8sH69KT2HocGTN",
            tools: "https://t.me/GithubToolDeveloper"
        }
    };

    const rewardKey = `${platform}-${group}-reward`;

    if (!localStorage.getItem(rewardKey)) {
        displayGift(rewardKey);
    }

    window.location.href = links[platform][group];
}

function displayGift(rewardKey) {
    const gifts = [
        "🎓 Programming Language Course",
        "📚 Administrator Guidelines",
        "🛠️ Hacking Tools Access",
        "📖 Free eBooks",
        "🔒 VPN Tools"
    ];
    
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    localStorage.setItem(rewardKey, randomGift);
    
    const giftElement = document.getElementById('gift');
    giftElement.innerHTML = `<strong>🎉 Congratulations!</strong> You have received a free gift: ${randomGift}. We will contact you shortly.`;
    giftElement.style.display = 'block';
}
