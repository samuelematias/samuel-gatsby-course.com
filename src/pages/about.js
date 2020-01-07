import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"
import getThemeColor from "../utils/getThemeColor"

import { MainContent, ButtonLink } from "../styles/base"

const AboutPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            descriptionEn
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Sobre mim" description={site.siteMetadata.description} />
      <MainContent>
        <ButtonLink>
          <AniLink cover direction="right" bg={getThemeColor()} to="/en/about/">
            View in english
          </AniLink>
        </ButtonLink>
        <h1>Sobre mim</h1>
        <p>
          Meu nome é <span itemProp="name">Samuel Matias</span>, sou de{" "}
          <span itemProp="place">Recife/PE</span> e trabalho como{" "}
          <span itemProp="jobRole">Desenvolvedor</span> desde 2015. De 2015 para
          cá, já trabalhei com Automação de Testes, Back-end e Front-end. Desde
          de 2018 mudei meu foco para{" "}
          <span itemProp="jobRole">Desenvolvimento Mobile Multiplataforma</span>
          , usando tecnologias como{" "}
          <a
            href="https://flutter.dev/"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver"
            itemProp="tech"
          >
            Flutter
          </a>{" "}
          e{" "}
          <a
            href="https://facebook.github.io/react-native/"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver"
            itemProp="tech"
          >
            React Native
          </a>
          .
        </p>
        <p>
          {" "}
          Amo disseminar meu conhecimento de diversas formas como escrevendo
          artigos, fazendo talks e mentorias. Algo que me deixa muito feliz é
          saber que o produto que fiz ou que estou fazendo está impactando de
          maneira positiva várias pessoas.
        </p>
        <p>
          Atualmente, estou Revolucionando o Universo da Alimentação no{" "}
          <a
            href="https://www.ifood.com.br"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver"
            itemProp="affiliation"
          >
            iFood
          </a>{" "}
          como <span itemProp="jobTitle">Software Engineer</span>. Sou fundador
          do{" "}
          <a
            href="https://github.com/reactrecife"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver"
            itemProp="organizer"
          >
            React Recife
          </a>
          , que seria um grupo que promove Meetups e Eventos para disseminar o
          conhecimento do React e seu ecossistema no Recife.
        </p>

        <h2>Habilidades</h2>

        <ul>
          <li>Git</li>
          <li>Dart</li>
          <li>Flutter</li>
          <li>Provider</li>
          <li>BLoC</li>
          <li>JavaScript</li>
          <li>React Native</li>
          <li>Redux</li>
          <li>GraphQL</li>
          <li>O que eu não sei, aprendo rápido =)</li>
        </ul>

        <h2>Dê um Oi</h2>

        <p>
          Você consegue falar comigo através do meu email{" "}
          <a href="mailto:hi@samuelematias.com">hi@samuelematias.com</a> ou de
          qualquer uma das minhas redes sociais.
        </p>

        <SocialLinks isAboutPage={true} hideStyle />
      </MainContent>
    </Layout>
  )
}

export default AboutPage
