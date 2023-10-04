import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'
import { formatDate } from '@/lib/formatDate'
import { loadCaseStudies } from '@/lib/mdx'
import { List, ListItem } from '@/components/List'

function CaseStudies({ caseStudies }) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Read case study
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['Phobia', logoPhobia],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          You’re in good company
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata = {
  title: 'FAQ',
  description:
    'Answers to Your Queries: Dive into our frequently asked questions to gain clarity on how Bible Intelligence seamlessly blends faith with cutting-edge AI technology.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      <PageIntro
        eyebrow="Frequently Asked Questions"
        title="FAQ"
      >
        <p>
        Answers to Your Queries: Dive into our frequently asked questions to gain clarity on how Bible Intelligence seamlessly blends faith with cutting-edge AI technology.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
         
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="What is Bible Intelligence?">
            Bible Intelligence combines artificial intelligence with biblical teachings to offer enhanced tools for understanding, prayer generation, and personalized insights into Scripture.</ListItem>
            <ListItem title="How does the AI ensure the theological accuracy of its insights?">
            We employ ChatGPT, a state-of-the-art language model developed by OpenAI. ChatGPT is trained on a vast array of textual data, encompassing various theological perspectives and biblical interpretations. While it possesses a comprehensive understanding of theological matters, we further use prompt filters to refine its outputs. This combination ensures doctrinal accuracy while allowing for customization to suit specific church theological stances.
            </ListItem>
            <ListItem title="Is my personal prayer data stored or shared?">
            Your privacy is paramount. Any prayer or query inputted is processed without being stored, ensuring your personal spiritual reflections remain confidential.
            </ListItem>
            <ListItem title="How can AI help deepen my understanding of the Bible?">
            AI can provide contextual insights, cross-referencing verses, historical backgrounds, and even generate questions for reflection, all tailored to your theological perspective.
            </ListItem>

            <ListItem title="Can our church customize the AI outputs to align with our specific beliefs?">
            Absolutely. We offer tools and workshops to aid churches in tailoring the AI insights to fit their specific doctrinal stances.
            </ListItem>

            <ListItem title="Is there a risk of misinterpretation when using AI for theological insights?">
            While AI can provide valuable insights, it's essential to approach them as supplementary. We encourage users to combine AI's insights with personal reflection, discussions, and guidance from spiritual leaders.
            </ListItem>

            <ListItem title="How does the AI prayer generator work?">
            Our prayer generator utilizes advanced algorithms trained on liturgical texts and prayers. When provided with a theme or intention, it crafts prayers that align with biblical teachings and sentiments.
            </ListItem>

            <ListItem title="Do you offer training on integrating AI into our church's programs?">
            Yes, we provide workshops designed to educate staff on the potential and responsible use of AI in religious studies and engagements.
            </ListItem>

            <ListItem title="Are there any costs associated with using Bible Intelligence tools?">
            While we offer some tools and insights for free, advanced features or customized solutions might come with associated costs. Please get in touch with us for detailed pricing.
            </ListItem>

            <ListItem title="How can we ensure our congregation understands the balance between traditional teachings and AI insights?">
            Education is key. We recommend hosting sessions or workshops (which we can assist with) to explain the role of AI as a tool, not a replacement, in the spiritual journey.
            </ListItem>




          </List>
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
