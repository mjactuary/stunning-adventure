import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our vision"
        title="To help the world study the Bible."
        invert
      >
        <p>
          We can use technology to teach everyone about theology.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Technology" invert>
          Harnessing cutting-edge AI to unlock a new realm of spiritual exploration and understanding.
          </GridListItem>
          <GridListItem title="Teaching" invert>
          Empowering every individual with curated insights, fostering a deeper connection to age-old wisdom.
          </GridListItem>
          <GridListItem title="Theology" invert>
          Exploring diverse Christian theological perspectives with an open mind and heart.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}



export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our Founder">
        <p>
          Michael Jordan is a Fellow of the Actuarial Society of South Africa. Though his main skill is around Enterprise Risk Management, he has a passion for Teaching, Technology and Theology.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">

          <p>
            2010 - Part of the school team that won the Johannesburg Bible Quiz Tournament.
          </p>
          <p>
            2013 - Graduated from Wits University with Honours in Actuarial Science and a major in Mathematical Statistics.
          </p>
          <p>
            2014 - Launched a Bible USSD application that reached 20 000 people in Zimbabwe.
          </p>
          <p>
            2015 - Recorded a series of religious YouTube videos where one got over 250 000 views.
          </p>
          <p>
            2016 - Created an Artificial Intelligence that is featured in the South African Journal of Science.
          </p>
          <p>
            2017 - Gave a TedX Talk at UCT about how machine learning principles can be used to help students study.
          </p>
          <p>
            2018 - Wrote an article on how morality can be influenced by uncertainty in the Philosophy Now Magazine.
          </p>
          <p>
            2019 - Self published a book on Amazon entitled "What to Pray For".
          </p>
          <p>
            2020 - Secured a tender from a branch of the SA Government to create Post Graduate Courses on Insurance and Risk Management.
          </p>
          <p>
            2021 - Joined Polygon, a fast growing tech startup and presented at various international conferences about emerging technology.
          </p>
          <p>
            2022 - An early adopter of ChatGPT and MidJourney.
          </p>
          <p>
            2023 - Secured funding to pursue Bible Intelligence full time.
          </p>
          
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="+50" label="Books in the Bible Decoded Series" />
          <StatListItem value="+1 Million" label="Views on YouTube" />
          <StatListItem value="+50 000" label="Subscribers" />
        </StatList>
      </Container>

      <Culture />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Read more about what we are doing and how we can benefit your church"
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
