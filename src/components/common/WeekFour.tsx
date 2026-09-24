import Image from "next/image";

const WeekFour = () => {
  return (
    <ul className="log-list">
      <li>
        A caixa das perguntas passou a mudar de tamanho de acordo com o texto.
        Também adicionamos animações na troca de vez entre os times e colocamos
        perguntas provisórias para as outras profissões
      </li>

      <li>
        Na reunião da semana, listamos o que faltava: posicionar a montanha da
        tela inicial no modo tela cheia, deixar as opções funcionando, bloquear
        as profissões que ainda não estavam prontas e esconder as barras de
        rolagem que apareciam na troca de turno
      </li>

      <li>
        No mesmo dia resolvemos boa parte da lista: sumimos com as barras de
        rolagem, trocamos a fonte do jogo, adicionamos no menu as opções de
        ligar e desligar o som e de entrar e sair da tela cheia, e deixamos
        apenas a profissão de desenvolvedor liberada
        <Image
          src="/image34.jpg"
          alt="Tela de escolha de profissão com apenas o desenvolvedor liberado"
          width={493}
          height={387}
          className="shot mx-auto my-5"
        />
      </li>

      <li>
        Criamos um arquivo global.js para guardar as configurações do jogo, como
        os tempos de cada etapa e o som
      </li>

      <li>
        Finalizamos o texto de apresentação do projeto para a 5ª Semana Nacional
        da Educação Profissional e Tecnológica, em Brasília. Um dos critérios de
        avaliação do evento é a interatividade com o público, que é justamente o
        foco do nosso jogo
      </li>

      <li>
        A tela de vitória passou a funcionar dentro do jogo e ganhou duas telas
        de suspense antes do anúncio do vencedor. Várias telas tiveram as fontes
        atualizadas, como a da vez de cada time e a do confronto
      </li>

      <li>
        Mudamos uma regra: quando o tempo dos juízes acaba, nenhum time leva
        dano. Antes, um time aleatório era atingido
      </li>

      <li>
        Começamos o sistema de pausa e decidimos hospedar o jogo no GitHub
        Pages, que é gratuito
      </li>
    </ul>
  );
};

export default WeekFour;
