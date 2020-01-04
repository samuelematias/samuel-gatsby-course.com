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
      <SEO
        lang="en"
        title="About me"
        description={site.siteMetadata.descriptionEn}
      />
      <MainContent>
        <ButtonLink>
          <AniLink
            cover
            direction="left"
            bg={getThemeColor()}
            to="/about/"
            activeClassName="active"
          >
            Ver em português
          </AniLink>
        </ButtonLink>
        <h1>About me</h1>
        <p>
          My name is <span itemProp="name">Samuel Matias</span>, I'm from{" "}
          <span itemProp="place">Recife/PE/Brazil</span> and I work as a{" "}
          <span itemProp="jobRole">Developer</span> since 2015. From 2015 to
          Here, I've worked with Test Automation, Backend and Frontend. Since
                   2018 I changed my focus to{" "}
          <span itemProp="jobRole">Cross Platform Mobile Developer</span>, using
          technologies like{" "}
          <a
            href="https://flutter.dev/"
            target="_blank"
            rel="noopener noreferrer"
            title="Show"
            itemProp="tech"
          >
            Flutter
          </a>{" "}
          and{" "}
          <a
            href="https://facebook.github.io/react-native/"
            target="_blank"
            rel="noopener noreferrer"
            title="Show"
            itemProp="tech"
          >
            React Native
          </a>
          .
        </p>
        <p>
          {" "}
          I love to spread my knowledge in many ways such as writing articles,
          doing talks and mentoring. Something that makes me very happy is
          knowing that the product I made or am making is positively impacting
          many people.
        </p>
        <p>
          Currently, I'm Revolutionising the Universe of Food at{" "}
          <a
            href="https://www.ifood.com.br"
            target="_blank"
            rel="noopener noreferrer"
            title="Show"
            itemProp="affiliation"
          >
            iFood
          </a>{" "}
          as <span itemProp="jobTitle">Software Engineer</span>. I'm founder of{" "}
          <a
            href="https://github.com/reactrecife"
            target="_blank"
            rel="noopener noreferrer"
            title="Show"
            itemProp="organizer"
          >
            React Recife
          </a>
          , would be a group that promotes Meetups and Events to spread the
          knowledge of React and its ecosystem in Recife.
        </p>

        <h2>Skills</h2>

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
          <li>What I don't know, I learn fast =)</li>
        </ul>

        <h2>Say hi</h2>

        <p>
          Can you talk to me through my email{" "}
          <a href="mailto:hi@samuelematias.com">hi@samuelematias.com</a> or any
          of my social networks.
        </p>

        <SocialLinks isAboutPage={true} hideStyle />
      </MainContent>
    </Layout>
  )
}

export default AboutPage
