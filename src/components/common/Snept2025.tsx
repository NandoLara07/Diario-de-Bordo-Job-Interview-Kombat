import Image from "next/image";

const Snept2025 = () => {
  return (
    <>
      <p className="blink font-pixel text-base text-arcade-cyan">
        ★ BÔNUS DESBLOQUEADO!
      </p>
      <p className="mb-8 mt-2 text-arcade-dim">
        O Job Interview Kombat saiu do CEFET e foi parar em Brasília!
      </p>

      <ul className="log-list">
        <li>
          O projeto foi selecionado para a 5ª Semana Nacional de Educação
          Profissional e Tecnológica (SNEPT), promovida pelo Ministério da
          Educação, e fomos apresentá-lo em Brasília (DF), de 7 a 9 de outubro
          de 2025
          <Image
            src="/image41.jpg"
            alt="Crachás de expositor da 5ª SNEPT"
            width={360}
            height={477}
            className="shot mx-auto my-5 w-full max-w-[360px]"
          />
        </li>

        <li>
          Com o tema “Juventudes que inovam, Brasil que avança”, a SNEPT
          aconteceu na Arena BRB Mané Garrincha, junto com o Festival
          Internacional de Inovação e Sustentabilidade da Indústria, o Curicaca.
          O evento reuniu cerca de 400 projetos de 63 instituições da rede
          federal de todo o país
        </li>

        <li>
          Muita gente passou pelo nosso estande, e pessoas de várias regiões do
          Brasil testaram o jogo: educadores, estudantes e representantes de
          instituições
          <Image
            src="/image42.jpg"
            alt="Equipe no estande da SNEPT com o Job Interview Kombat aberto no notebook"
            width={600}
            height={450}
            className="shot mx-auto my-5"
          />
        </li>

        <li>
          A participação levou o Job Interview Kombat a um público bem diverso e
          ajudou a mostrar o jogo como uma ferramenta pedagógica inovadora e
          fácil de aplicar em outras escolas
        </li>
      </ul>

      <Image
        src="/image43.jpg"
        alt="Grupo em frente ao Congresso Nacional, em Brasília"
        width={600}
        height={568}
        className="shot mx-auto my-5"
      />
    </>
  );
};

export default Snept2025;
