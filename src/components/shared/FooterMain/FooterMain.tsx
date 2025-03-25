import React, { ComponentProps } from "react";
import "./styles.scss";

export type IFooter = {
  politicaPrivacidade: string;
  trabalheConosco: string;
  quemSomos: string;
  termosCompras: string;
  sobrePlataforma: string;
};

export const FooterMain: React.FC<IFooter> = ({
  politicaPrivacidade,
  trabalheConosco,
  quemSomos,
  sobrePlataforma,
  termosCompras,
}) => {
  const getCurrentYear = (): number => {
    return new Date().getFullYear();
  };
  return (
    <footer>
      <div className="wrapper-footer">
        <div className="wrapper-1">
          <div className="wrapper-1__logo"></div>
          <p>
            Ticket Sports é líder nacional para organizadores de eventos para
            esporte, faça parte agora!
          </p>
          <div className="wrapper-1__icones">
            <a
              target="_blank"
              href={"https://www.facebook.com/ticketsportss/?locale=pt_BR"}
            >
              <div className="wrapper-1__icones--facebook"></div>
            </a>
            <a
              target="_blank"
              href={"https://www.youtube.com/@TicketSportsHUB"}
            >
              <div className="wrapper-1__icones--youtube"></div>
            </a>
            <a
              target="_blank"
              href={"https://www.instagram.com/ticket.sports/"}
            >
              <div className="wrapper-1__icones--instagram"></div>
            </a>
          </div>
        </div>
        <div className="wrapper-2">
          <h5>PARTICIPANTES</h5>
          <a href="https://www.ticketsports.com.br/Entrar/Participante">
            <h6>Login</h6>
          </a>
          <a href="https://www.ticketsports.com.br/Entrar/Participante">
            <h6>Cadastra-se</h6>
          </a>
          <a
            target="_blank"
            href="https://gruposeassessorias.zendesk.com/hc/pt-br"
          >
            <h6>Central de ajuda</h6>
          </a>

          <a target="_blank" href={termosCompras}>
            <h6>Termos de compras</h6>
          </a>
        </div>
        <div className="wrapper-3">
          <h5>ORGANIZADORES</h5>
            <a href={sobrePlataforma}>
              <h6>Sobre a plataforma</h6>
            </a>
          <a
            target="_blank"
            href="https://www.ticketsports.com.br/Funcionalidades"
          >
            <h6>Solicite um orçamento</h6>
          </a>
          <a
            target="_blank"
            href="https://organizadorpainel.zendesk.com/hc/pt-br"
          >
            <h6>Suporte</h6>
          </a>
          <a target="_blank" href="https://hub.ticketsports.com.br/">
            <h6>Hub</h6>
          </a>
        </div>
        <div className="wrapper-4">
          <h5>GRUPOS E ASSESSORIAS</h5>
          <a target="_blank" href="https://grupos.ticketsports.com.br/login">
            <h6>Login</h6>
          </a>
          <a
            target="_blank"
            href="https://grupos.ticketsports.com.br/login/cadastro?eventId=null"
          >
            <h6>Cadastre-se</h6>
          </a>
          <a
            target="_blank"
            href="https://gruposeassessorias.zendesk.com/hc/pt-br"
          >
            <h6>Central de ajuda</h6>
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5511968646757&text=Ol%C3%A1%2C+vim+da+Central+de+Ajuda+de+Grupos+e+Assessorias+Meu+Nome+%C3%A9&type=phone_number&app_absent=0"
          >
            <h6>Suporte</h6>
          </a>
        </div>
        <div className="wrapper-5">
          <h5>EMPRESA</h5>
          <a href={quemSomos}>
            <h6>Quem somos</h6>
          </a>
          <a href={trabalheConosco}>
            <h6>Trabalhe conosco</h6>
          </a>
          <a href={politicaPrivacidade}>
            <h6>Política de privacidade</h6>
          </a>
          <a href={"#"}>
            <h6>fff</h6>
          </a>
        </div>
      </div>
      <hr />
      <div className="wrapper-copy">
        <h6>
          Copyright ©{getCurrentYear()} Ticket Sports. All rights reserved.
        </h6>
        <div className="wrapper-copy__app">
          <h6>Compre pelo aplicativo</h6>
          <div className="wrapper-copy__app--store"></div>
          <div className="wrapper-copy__app--apple"></div>
        </div>
      </div>
    </footer>
  );
};
