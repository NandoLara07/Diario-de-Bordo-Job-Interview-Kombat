const WeekSix = () => {
  return (
    <ul className="log-list">
      <li>
        Parte das imagens não carregava no site publicado porque alguns nomes de
        arquivo tinham espaços e outros caracteres. Padronizamos todos os nomes,
        corrigimos os caminhos e todas as imagens voltaram a aparecer
      </li>

      <li>Terminamos o sistema de pausa e trocamos a fonte dos contadores</li>

      <li>
        <strong className="text-arcade-yellow">
          Em 03/09/2025, lançamos oficialmente a versão 1.0 do Job Interview
          Kombat!
        </strong>{" "}
        Ficaram anotados alguns bugs conhecidos, como a música que era cortada
        de repente na passagem do menu para a partida (a ideia é ela ir
        diminuindo aos poucos) e o ícone da aba, que não aparecia
      </li>

      <li>
        Seguindo uma sugestão da nossa orientadora, adicionamos botões para
        pular o tempo da pergunta e para encerrar os turnos antes da hora
      </li>

      <li>
        Também adicionamos uma animação de coração pulsando, ajustamos a barra de
        vida, colocamos uma transição antes da luta e deixamos o cronômetro do
        julgamento no topo da tela
      </li>

      <li>
        Corrigimos o ícone da aba e um bug em que a música continuava tocando
        mesmo depois de desligar o som
      </li>
    </ul>
  );
};

export default WeekSix;
