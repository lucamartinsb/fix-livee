import Image from "next/image";
import "./pagePrincipal.css"
import Link from "next/link";

export default function Home() {
  return (

    <main>
      <nav className="navBar">
        <div className="logoLivee">
          <Image src="/assets/logonav.png"
            alt="Logo da livee"
            width={86.88}
            height={32}
          />
        </div>
        <ul className="navBar_lista">
          <li className="navItem">
            <Link href="#quemSomos"> Quem somos</Link>
          </li>
          <li className="navItem">
            <Link href="#servicos"> Serviços</Link>
          </li>
          <li className="navItem">
            <Link href="/"> Depoimentos</Link>
          </li>
          <li className="navItem">
            <Link href="/"> Blog</Link>
          </li>
          <li className="navItem">
            <Link href="/"> Parcerias</Link>
          </li>
          <li className="navItem">
            <Link href="#contato"> Contato</Link>
          </li>
        </ul>

      </nav>



      <div className="fotoHomem_container">
        <Image
          className="fotoHomem"
          src="/assets/homem.png"
          alt="homem de terno"
          width={150}
          height={150}
        />
        <div className="textoCentral">Simplifique sua gestão com <a className="textoCentralCor">Quem Entende!</a></div>
        <button className="botao" type="submit">Fale com um Especialista!</button>
      </div>

      <div className="sombraHomem_container">
        <Image
          className="sombraHomem"
          src="/assets/SombraHomem.png"
          alt="sombra de um homem"
          width={500}
          height={500}
        />
      </div>


      <div className="FolhaUm_container">
        <Image
          className="folhasUm"
          src="/assets/Folha1.png"
          alt="folhas de jornal"
          width={150}
          height={150}
        />
      </div>

      <div className="FolhaDois_container">
        <Image
          className="folhasDois"
          src="/assets/Folha2.png"
          alt="folhas de jornal"
          width={150}
          height={150}
        />
      </div>

      <div className="FolhaTres_container">
        <Image
          className="folhasTres"
          src="/assets/Folha3.png"
          alt="folhas de jornal"
          width={150}
          height={150}
        />
      </div>

      <div className="computadores ">
        <div>
          <Image
            className="computadorEsquerda"
            src="/assets/computador.png"
            alt="mesa de computador"
            width={330.12}
            height={503}
          />
        </div>
        <div>
          <Image
            src="/assets/computador.png"
            alt="mesa de computador"
            width={330.12}
            height={503}
          />
        </div>
      </div>

      <div className="sombrasComputadores">
        <div>
          <Image
            className="sombraComputadorEsquerda"
            src="/assets/SombraComputador.png"
            alt="sombra do computador"
            width={470}
            height={470}
          />
        </div>
        <div>
          <Image
            className="sombraComputadorDireita"
            src="/assets/SombraComputador.png"
            alt="sombra do computador"
            width={470}
            height={470}
          />
        </div>
      </div>


      <div id="quemSomos" className="sobreNos_container">
        <Image
          className="sobreNos"
          src="/assets/sobrenos.png"
          alt="logo da livee"
          width={900}
          height={300}
        />
      </div>

      {/*SESSÃO SERVICOS*/}
      <div className="servicos">
        <Image
          id="servicos"
          className="lampadaServicos"
          src="/assets/lampadatop.png"
          alt="luminaria azul"
          width={150}
          height={150}
        />

        <div className="tituloServicos_container">
          <div className="tituloServicos">
            <a>Nossos</a> <a className="corTituloServicos">Serviços</a>
          </div>
        </div>

        <div className="main_container">
          <div className="container1">
            <div className="blocoTextoServicos">
              <Image
                className="gestaoFinanceiraIMG"
                src="/assets/gestao.png"
                alt="planner"
                width={42}
                height={42}
              />
              <p className="textoPrincipalServicos">Gestão Financeira Estratégica</p>
              <p className="textoSecundarioServicos">Envolve a administração e controle das atividades financeiras de uma empresa. Visando maximizar seus recursos econômicos e garantir sua sustentabilidade e governança a longo prazo.</p>
            </div>
            <div className="botõesServicos_container">
              <p className="botãoNossoServico"> Manual de governança <br /> Administrativa Financeira</p>
              <p className="botãoNossoServico"> Estruturaçao Financeira</p>
              <p className="botãoNossoServico">BPO Financeiro</p>
            </div>
          </div>
          <div className="container2">
            <div className="blocoTextoServicos">
              <Image
                className="gestaoFinanceiraIMG"
                src="/assets/money.png"
                alt="planner"
                width={42}
                height={42}
              />
              <p className="textoPrincipalServicos">Planejamento de Demanda</p>
              <p className="textoSecundarioServicos">Permite prever vendas com precisão, otimizar estoques, gerenciar cadeia de suprimentos, reduzir custos e oferecer uma melhor experiência ao cliente, garantindo o produto certo na prateleira no momento que o seu cliente precisa.</p>
            </div>
            <div className="botõesServicos_container">
              <p className="botãoNossoServico">Gestão de estoque e Compras</p>
              <p className="botãoNossoServico">Estratégia de Precificação</p>
              <p className="botãoNossoServico">Projeto de Viabilidade</p>
            </div>
          </div>
        </div>


        <div className="LinhaBaixo">
          <div className="linhaBaixo_individual">
            <Image
              className="gestaoFinanceiraIMG"
              src="/assets/earning.png"
              alt="planner"
              width={42}
              height={42}
            />
            <p className="textoPrincipalServicos">Planejamento Estratégico</p>
            <p className="textoSecundarioServicos">Ajuda sua empresa a alcançar o sucesso a longo prazo por meio da Análise SWOT, definição de objetivos claros, desenvolvimento de planos de ação e monitoramento contínuo. Isso proporciona uma direção clara para o crescimento, alinha recursos com os objetivos estratégicos e aumenta a capacidade de adaptação às mudanças do mercado.</p>
          </div>

          <div className="linhaBaixo_individual">
            <Image
              className="gestaoFinanceiraIMG"
              src="/assets/celular.png"
              alt="planner"
              width={42}
              height={42}
            />
            <p className="textoPrincipalServicos">Formatação de Franquia</p>
            <p className="textoSecundarioServicos">Transforma seu negócio em uma rede de franquias de sucesso. Desenvolvemos o modelo de franquia, estruturamos detalhadamente o modelo de negócios, criamos manuais operacionais e de gestão, e oferecemos suporte contínuo aos franqueados com treinamento e apoio. Além disso, planejamos a estratégia de expansão para promover o crescimento sustentável da rede.</p>
          </div>

          <div className="linhaBaixo_individual">
            <Image
              className="gestaoFinanceiraIMG"
              src="/assets/tratofeito.png"
              alt="planner"
              width={42}
              height={42}
            />

            <p className="textoPrincipalServicos">Desenvolvimento de banco digital </p>
            <p className="textoSecundarioServicos">Desenvolvimento e criação de Fintech consiste na concepção e implementação de soluções tecnológicas inovadoras para o setor financeiro, visando otimizar processos e melhorar a experiência do usuário.</p>
          </div>
        </div>
      </div>

{/*       <div className="blog_bg">
        <div className="blog_container_principal">
          <div className="blog_bloco_texto">
            <p className="blog_titulo">Liv.ee <a className="blog_titulo2"> Blog  </a> </p>
            <p className="blog_conteudo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. </p>
            <button className="blog_botao">
              Acessar o blog
            </button>
          </div>
          <div className="card_container">
            <div className="card">
              <div className="card_bloco_texto">
                <p className="card_parteCima"> Por <a className="card_parteCima_livee">Liv.ee </a> em 16 de julho de 2024</p>
                <p className="card_titulo">Titulo do Post</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. </p>
              </div>

            </div>
            <div className="card">
              <div className="card_bloco_texto">
                <p className="card_parteCima"> Por <a className="card_parteCima_livee">Liv.ee </a> em 16 de julho de 2024</p>
                <p className="card_titulo">Titulo do Post</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. </p>

              </div>

            </div>
          </div>
        </div>
      </div> */}


      <div id="contato" className="faleConosco_bg">
        <form className="faleConosco">
          <h5 className="nomeForm">Fale Conosco</h5>
          <div className="input_grupo">
            <div className="input_item">
              <label htmlFor="name">Nome:</label>
              <input className="styleinput_grupo" placeholder="Nome" type="text" name="Nome" />
            </div>
            <div>
              <div className="input_item">
                <label htmlFor="email">Seu melhor email</label>
                <input className="styleinput_grupo" placeholder="exemplo@seuemail.com" type="email" name="email" />
              </div>
            </div>
          </div>
          <div className="input_item_full">
            <label htmlFor="message"> Mensagem</label>
            <textarea placeholder="Digite a mensagem aqui" name="mensagem" />
          </div>
          <div className="botao_container">
            <button type="submit" className="botaoForm">
              Entrar
            </button>
          </div>

        </form>
      </div>

      <div className="footer_container">
        <div className="footer_section">
          <Image
            className="logoFooter"
            src="/assets/logobranco.png"
            alt="logo livee em branco"
            width={86.88}
            height={32}
          />
        </div>

        <ul className="footer_lista">
          <li className="footer_item">Quem somos</li>
          <li className="footer_item">Serviços</li>
          <li className="footer_item">Depoimentos</li>
          <li className="footer_item">Blog</li>
          <li className="footer_item">Parcerias</li>
          <li className="footer_item">Contato</li>
        </ul>

        <div className="footer_icones">
          <Image
            className="logoFooter"
            src="/assets/instagram.png"
            alt="logo livee em branco"
            width={19.8}
            height={20}
          />
          <Image
            className="logoFooter"
            src="/assets/linkedin.png"
            alt="logo livee em branco"
            width={19.8}
            height={20}
          />
          <Image
            className="logoFooter"
            src="/assets/whatsapp.png"
            alt="logo livee em branco"
            width={19.8}
            height={20}
          />
        </div>
      </div>

      <div className="footer_copyright_container">
        <a className="footer_copyright_texto">Copyright 2024 Liv.ee - </a> <span className="footer_copyright_texto2">Todos os direitos Reservados </span>
      </div>
    </main >




  );
}