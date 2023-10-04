import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import BibleCom from '@/components/BibleCom'
import PrayerGenerator from '@/components/PrayerGenerator'
import VerseFinder from '@/components/VerseFinder'
import ContentGrid from '@/components/ContentGrid'
import PastorChat from '@/components/PastorChat'








function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
          Type in any Bible verse and the AI will generate a commentary on it for you. It takes a few seconds to load
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>

<BibleCom></BibleCom>
         
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Prayers() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Type in anything that is on your heart and the AI will write a personal prayer for you. It takes a few seconds to load
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>

<PrayerGenerator></PrayerGenerator>
         
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Verse() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Use this tool to find where in the Bible something is said. It takes a few seconds to load
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>

<VerseFinder></VerseFinder>
         
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Pastor() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Talk to an AI Pastor to receive their wise and loving advice. It takes a few seconds to load
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>

<PastorChat></PastorChat>
         
        </FadeInStagger>
      </Container>
    </div>
  )
}



function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="With us you can develop your own unique AI tools"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Together we can craft the perfect AI tools for your church. You can decide what Bible translation is used in Verse Finder. You get to pick the style and structure of the Prayer Assist AI. You determine what theological views should come across in the Bible Commentary AI. Bible Intelligence ensures your congregation is all on the same page and reduces the risk of false teachings creeping in via public unfiltered AIs.
        </p>
      </SectionIntro>
      
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you embrace AI"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        We empower you by aiding in the development of your own AI content and apps. Providing assistance with prompt filters and API integration, 
        so that the theological views of your church are accurately and effectively communicated to your congregation.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Bible Content">
            We specialize in creating high-quality, 
            impactful content rooted in the Bible. 
            From captivating stories and enlightening sermons to heartfelt prayers and daily devotions, 
            we assist you in crafting content that resonates with your church's beliefs and values, 
            ensuring every piece is infused with profound theological insights and reflections.
            </ListItem>
            <ListItem title="AI Tools">
            We have a proficient team specializing in tailoring ChatGPT to align with your theological perspectives, implementing prompt filters approved by your leadership team. We manage API integration, billing processes, and GitHub repositories, ensuring a seamless and hassle-free experience as you explore and impart Biblical wisdom and insights.
            </ListItem>
            <ListItem title="Training Workshops">
            We are pioneers in integrating modern AI technology within religious studies and engagements. This includes conducting workshops designed to educate your staff on the essence, utilization, practicalities, opportunities, and potential risks of AI, ensuring a comprehensive understanding and responsible use of this transformative technology in exploring and interpreting Biblical truths.
            </ListItem>
            <ListItem title="Data Analytics">
            We can set up systems to gather statistics and then deploy the latest Data Science techniques to ensure your church has the information it needs when it comes to making the right decisions.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a consultancy firm working at the intersection of religion and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Faith Meets Future.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          To churches, Bible Intelligence is the trusted tech consultancy, providing customised AI-driven spiritual insights and tools, ensuring members have cohesive theological engagement with Scripture.
          </p>
          <p className="mt-6 text-xl text-neutral-600">
          Try out our various AI tools in the black boxes below.
          </p>

        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
      <SectionIntro
        title="Bible Commentary AI"
        className="mt-4 sm:mt-6 lg:mt-8"
      >
      </SectionIntro>
      </FadeIn>
      </Container>

      <Clients />

      <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
      <SectionIntro
        title="Prayer Generator AI"
        className="mt-4 sm:mt-6 lg:mt-8"
      >
      </SectionIntro>
      </FadeIn>
      </Container>

      <Prayers />

      <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
      <SectionIntro
        title="Verse Finder AI"
        className="mt-4 sm:mt-6 lg:mt-8"
      >
      </SectionIntro>
      </FadeIn>
      </Container>

      <Verse />

      <CaseStudies caseStudies={caseStudies} />

      <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
      <SectionIntro
        title="Pastor AI"
        className="mt-4 sm:mt-6 lg:mt-8"
      >
      </SectionIntro>
      </FadeIn>
      </Container>

      <Pastor />

      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h2 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            We also generate quality content with AI
          </h2>
          <p className="mt-6 text-xl text-neutral-600">
          Below is just a short list of some of the content we can customise and create for your church based on your views. See our YouTube channel for examples.
          </p>

        </FadeIn>
      </Container>

      <ContentGrid />


      <Services />

      <ContactSection />
    </>
  )
}
