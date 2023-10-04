import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        We foster a close collaboration with each church's leadership team, striving to deeply understand both their specific needs and their theological stance on diverse topics.
        </p>
        <p>
        By examining the congregation's demographics and the current content being produced by the church, we identify optimal areas for the integration of our AI tools and content.
        </p>
        <p>
        Upon finalizing our evaluation, we present a holistic plan paired with a detailed budget to seamlessly integrate AI-driven solutions into their operations.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Leadership Consultation</TagListItem>
        <TagListItem>Theological Alignment</TagListItem>
        <TagListItem>Demographic Analysis</TagListItem>
        <TagListItem>Content Evaluation</TagListItem>
        <TagListItem>AI Tool Identificationt</TagListItem>
        <TagListItem>Budget Planning</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Beginning with a clear vision, we meticulously draft a roadmap for each AI tool and content initiative. This step-by-step plan ensures every aspect aligns with the church's needs and theological perspectives, paving the way for an impactful integration.
        </p>
        <p>
        To streamline the process and maintain transparent communication, we assign a dedicated account manager for each project. Their primary role is to be the bridge between Bible Intelligence and the church, ensuring feedback is incorporated and all concerns are promptly addressed.
        </p>
        <p>
        Our AI specialists then get to work on crafting bespoke AI tools tailored to your church's specifics. Simultaneously, our content team generates insightful, theologically-sound material that resonates with the congregation's spiritual journey.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Roadmapping</TagListItem>
        <TagListItem>Assigning an Account Mamanger</TagListItem>
        <TagListItem>Programming custom AI tools</TagListItem>
        <TagListItem>Developing required Content</TagListItem>
      </TagList>

     
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Once the AI tools and content have been crafted to perfection, the delivery phase commences. We seamlessly integrate our solutions into the church's existing systems, ensuring a hassle-free transition. Each tool and piece of content is designed to not only be user-friendly but to also resonate deeply with the church's congregation.
        </p>
        <p>
        Understanding the significance of continual adaptation, we're committed to progressing with your needs. Post-deployment, we engage in regular check-ins and offer guidance on maximizing the potential of our AI-driven solutions, ensuring they remain relevant and impactful.
        </p>
        <p>
        Our commitment doesn't end at delivery. We believe in forging long-term partnerships, and this is reflected in our dedication to providing ongoing support. Our team remains accessible, always ready to assist, iterate, and improve based on real-world feedback and the changing needs of your church.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
        Before any tool goes live, it undergoes rigorous testing to ensure its accuracy, reliability, and alignment with theological principles.
        </ListItem>
        <ListItem title="Monitoring">
        Post-launch, we actively monitor the performance and usage of our tools and content, gleaning insights to drive improvements and ensure optimal engagement.
        </ListItem>
        <ListItem title="Support">
        Our support team is always at your beck and call, offering technical assistance, content updates, and answering any queries that arise.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Faith Meets Future"
      >
        <p>
        At Bible Intelligence, our mission melds the timeless truths of faith with the cutting-edge potential of technology. These ten core values illuminate our path, guaranteeing that our collaboration with churches is both authentic and progressive.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Theological Integrity">
          We prioritize the accuracy and truth of Biblical teachings in every tool and piece of content we create.
          </GridListItem>
          <GridListItem title="Innovative Spirit">
          We're committed to harnessing the latest in AI technology to bridge ancient wisdom with modern insights.
          </GridListItem>
          <GridListItem title="Church-Centered">
          Every solution we offer is tailored to the unique needs and theological stances of each church.
          </GridListItem>
          <GridListItem title="Transparent Collaboration">
          Open and consistent communication forms the backbone of our partnerships with churches.
          </GridListItem>
          <GridListItem title="Ethical Responsibility">
          We uphold the highest standards of ethics both in our technological developments and business practices.
          </GridListItem>
          <GridListItem title="Continual Growth">
          We believe in learning and progressing, always striving to improve and better serve the spiritual community.
          </GridListItem>

          <GridListItem title="Diverse Inclusion">
          Recognizing the diverse tapestry of the Christian community, we respect and incorporate various theological viewpoints.
          </GridListItem>

          <GridListItem title="Stewardship">
          We use our resources wisely, always aiming to provide the best value for our clients.
          </GridListItem>

          <GridListItem title="Accessibility">
          Our tools and content are designed to be user-friendly, ensuring that everyone, regardless of their tech-savviness, can benefit.
          </GridListItem>

          <GridListItem title="Spiritual Enhancement">
          Our ultimate goal is to deepen spiritual engagement and understanding, fostering a closer relationship between individuals and God.
          </GridListItem>




        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
        Recognizing the transformative potential of AI for churches, Bible Intelligence strategically identifies areas where technology can most enhance spiritual growth. We craft custom AI tools tailored to these areas, generate meaningful content, and continuously monitor the results. Our iterative approach ensures we expand and refine our offerings month after month, ensuring churches benefit from the best of AI-driven insights.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
