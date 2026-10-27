const modal = document.getElementById('modal-cadastro');
const btnAbrirModal = document.getElementById('btn-abrir-modal');
const btnCancelar = document.getElementById('btn-cancelar');
const formJogo = document.getElementById('form-jogo');
const gridJogos = document.getElementById('grid-jogos');
const estadoVazio = document.getElementById('estado-vazio');

btnAbrirModal.addEventListener('click', () => {
    modal.showModal();
});

btnCancelar.addEventListener('click', () => {
    modal.close();
    formJogo.reset();
});

formJogo.addEventListener('submit', (event) => {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const plataforma = document.getElementById('plataforma').value;
    const desenvolvedora = document.getElementById('desenvolvedora').value;
    const imagemUrl = document.getElementById('imagem_url').value;
    const preco = parseFloat(document.getElementById('preco').value);

    const precoFormatado = preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const card = document.createElement('article');
    card.classList.add('game-card');

    card.innerHTML = `
        <img src="${imagemUrl}" alt="Capa do jogo ${titulo}">
        <div class="game-info">
            <h4>${titulo}</h4>
            <div class="game-details">
                <p><strong>Plataforma:</strong> ${plataforma}</p>
                <p><strong>Desenvolvedora:</strong> ${desenvolvedora}</p>
            </div>
            <div class="game-price">${precoFormatado}</div>
        </div>
    `;

    gridJogos.appendChild(card);

    if (estadoVazio) {
        estadoVazio.style.display = 'none';
    }

    modal.close();
    formJogo.reset();
});
