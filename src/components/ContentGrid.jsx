import {
    AcademicCapIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
    BookOpenIcon,
    SpeakerWaveIcon,
    HeartIcon,
    MicrophoneIcon,
  } from '@heroicons/react/24/outline'
  
  const actions = [
    {
      title: 'Bible Study Guides',
      href: '#',
      icon: BookOpenIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
      text: 'Enhance your church`s educational depth, ensuring teachings are tailored and resonant with a church`s unique theological stance. Plus, with the convenience of physical copies delivered by Amazon, congregants can immerse in consistent, tangible lessons, bridging tradition with modern accessibility.',
    },
    {
      title: 'Audio Books',
      href: '#',
      icon: SpeakerWaveIcon,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
      text: 'Revitalize timeless Bible tales with our bespoke audiobooks, tailored to your church`s preferences - choose the narration style and voice, we can even make is sound exactly like your pastor. Ideal for sharing on your church`s YouTube channel, these retellings bridge sacred stories with contemporary listening, enhancing spiritual engagement in the digital age.',
    },
    {
      title: 'Group Discussion Questions',
      href: '#',
      icon: UsersIcon,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
      text: 'Deepen your congregation`s weekly reflection with group discussion questions, based on Sunday`s sermons. AI tools can intuitively extracts key sermon insights, generating thought-provoking questions that inspire personal application and foster meaningful conversations, ensuring the week`s teachings resonate and inspire long after Sunday.',
    },
    {
      title: 'Church Podcast',
      href: '#',
      icon: MicrophoneIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      text: 'Amplify your church`s voice with AI-enhanced Church Podcasts. Leadership provides the core views and ideas, and our state-of-the-art AI tools craft compelling virtual discussions, blending text and audio seamlessly. Ready for sharing on YouTube and various podcast platforms, these episodes offer a harmonious blend of authentic leadership insights and dynamic AI-driven dialogues, ensuring your message resonates with the congregation and the wider digital audience.',
    },
    {
      title: 'Daily Devotionals',
      href: '#',
      icon: HeartIcon,
      iconForeground: 'text-rose-700',
      iconBackground: 'bg-rose-50',
      text: 'Enrich your congregation`s daily walk with customised Daily Devotionals, crafted around themes or verses of your choice. Whether in the form of physical books, insightful blogs, or immersive YouTube audio, our AI-driven tools ensure personalized spiritual nourishment, grounding each day in reflection and purpose.',
    },
    {
      title: 'Church Online University',
      href: '#',
      icon: AcademicCapIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      text: 'Empower your congregation with a Church Online University, offering a curated series of courses diving deep into history, theology, and more. Harnessing AI expertise, we create tailored educational experiences that ignite passion for learning, fostering a deeper connection to faith and enriching the spiritual journey with informed perspectives, all from the comfort of home.',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function ContentGrid() {
    return (
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
              'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'inline-flex rounded-lg p-3 ring-4 ring-white'
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                <a  className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
              {action.text}
              </p>
            </div>
            <span
              className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              
            </span>
          </div>
        ))}
      </div>
    )
  }
  