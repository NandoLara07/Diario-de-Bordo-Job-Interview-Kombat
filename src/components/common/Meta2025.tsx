import Image from "next/image";

const Meta2025 = () => {
  return (
    <ul className="log-list">
      <li>
        Apresentamos o Job Interview Kombat no nosso estande na 34ª META,
        revezando a equipe ao longo dos dias da mostra
        <Image
          src="/image37.jpg"
          alt="Equipe do Job Interview Kombat no estande da 34ª META"
          width={600}
          height={450}
          className="shot mx-auto my-5"
        />
      </li>

      <li>
        Além do público, os avaliadores também ganharam bombons e chaveiros do
        jogo
      </li>

      <li>
        Um professor da área de programação conheceu o projeto e se interessou
        em manter contato com a equipe
      </li>

      <li>
        <strong className="text-arcade-yellow">
          O Job Interview Kombat foi um dos projetos premiados na 34ª META!
        </strong>
        <Image
          src="/image44.jpg"
          alt="Equipe do Job Interview Kombat com as medalhas da premiação da 34ª META"
          width={600}
          height={338}
          className="shot mx-auto my-5"
        />
      </li>
    </ul>
  );
};

export default Meta2025;
