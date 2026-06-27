const questionsPool = [
    { text: "When is Chinese New Year?", type: 'fill', answer: '1st day of the first lunar month', img: 'https://images.unsplash.com/photo-1542736667-069d80d21884' },
    { text: "We eat _____ during Mid-Autumn Festival.", type: 'fill', answer: 'mooncake', img: 'https://images.unsplash.com/photo-1563273180-b2cc8931131c' },
    { text: "Where do you sleep at home?", type: 'fill', answer: 'bedroom', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f74af' },
    { text: "Is a table a living thing? (Yes/No)", type: 'fill', answer: 'No', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511' },
    { text: "Can birds fly? (Yes/No)", type: 'fill', answer: 'Yes', img: 'https://images.unsplash.com/photo-1555169062-013468b47731' },
    { text: "What do we throw into the bin?", type: 'fill', answer: 'rubbish', img: 'https://images.unsplash.com/photo-1595124233775-6804d96a7516' },
    { text: "Reading: Koalas and humans have fingerprints. Are they the same? (Yes/No)", type: 'fill', answer: 'No', img: 'https://images.unsplash.com/photo-1522069169874-bc53ad8b3680' }
    // 在這裡你可以繼續擴充更多題目...
];

let score = 0;
let currentIdx = 0;
let gameData = [];

function init() {
    // 隨機選30題
    gameData = [...questionsPool].sort(() => 0.5 - Math.random()).slice(0, 30);
    showQuestion();
}

function showQuestion() {
    const q = gameData[currentIdx];
    document.getElementById('q-img').src = q.img;
    document.getElementById('q-text').innerText = `${currentIdx + 1}. ${q.text}`;
    document.getElementById('input-area').innerHTML = `<input type="text" id="answer" placeholder="Write here...">`;
    document.getElementById('next-btn').classList.add('hidden');
}

function nextQuestion() {
    const userAns = document.getElementById('answer').value;
    const correct = gameData[currentIdx].answer;
    
    // 判斷對錯並顯示
    if(userAns.toLowerCase() === correct.toLowerCase()) {
        score++;
        document.getElementById('feedback').innerText = "Correct! Great job!";
    } else {
        document.getElementById('feedback').innerText = "Try again! Answer: " + correct;
    }
    
    currentIdx++;
    if(currentIdx < 30) {
        setTimeout(showQuestion, 2000);
    } else {
        document.getElementById('result-area').classList.remove('hidden');
        document.getElementById('final-score').innerText = `Score: ${score}/30`;
    }
}

// 監聽 Enter 鍵
document.addEventListener('keypress', (e) => { if(e.key === 'Enter') nextQuestion(); });

init();