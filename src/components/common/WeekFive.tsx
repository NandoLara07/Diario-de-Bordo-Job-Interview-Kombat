const WeekFive = () => {
  return (
    <ul className="log-list">
      <li>
        A tela de vitória passou a funcionar em todos os casos: quando um time
        vence, quando os rounds acabam e quando há empate
      </li>

      <li>
        O jogo ganhou música, e as profissões que ainda não tinham perguntas
        foram bloqueadas. Depois, fizemos uma música mais elaborada para a
        partida
      </li>

      <li>
        Como os navegadores não deixam uma música começar a tocar sozinha, sem
        nenhuma interação do usuário, a música passou a ser ativada pelo jogador
        na tela de opções
      </li>

      <li>
        Uma mudança na forma de salvar as opções acabou quebrando a configuração
        de tempo das partidas, e precisamos corrigir
      </li>

      <li>
        Começamos a publicar o jogo no GitHub Pages. Para isso, a tela inicial
        virou o index.html na raiz do projeto, e tivemos que corrigir vários
        caminhos de arquivos que funcionavam no nosso computador, mas não no
        site publicado
      </li>

      <li className="log-note">
        PS: Futuramente, foi feita uma música dedicada para o fundo do jogo
      </li>
    </ul>
  );
};

export default WeekFive;
