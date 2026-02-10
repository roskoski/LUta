// Função para simular o início do jogo
function playGame() {
    alert("Iniciando Arena...");
    // Aqui você poderia redirecionar para a fase do jogo:
    // window.location.href = "fase1.html";
}

function openOptions() {
    console.log("Abrindo menu de configurações...");
}

// Efeito sonoro ao passar o mouse (opcional)
const buttons = document.querySelectorAll('.menu-btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        // Se tiver um arquivo de som:
        // let hoverSound = new Audio('hover.mp3');
        // hoverSound.play();
        console.log("Hover no botão");
    });
});