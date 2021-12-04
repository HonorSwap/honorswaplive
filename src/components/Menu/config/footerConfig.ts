import { FooterLinkType } from '@honorswap/uiex'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.honorswap.com/contact-us',
      },
      {
        label: t('Blog'),
        href: 'https://honorswap.medium.com/',
      },
      {
        label: t('Community'),
        href: 'https://docs.honorswap.com/contact-us/telegram',
      },
      {
        label: t('HNR token'),
        href: 'https://docs.honorswap.com/tokenomics/cake',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://honorswap.creator-spring.com/',
        isHighlighted: true,
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.honorswap.com/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.honorswap.com/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.honorswap.com/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/honorswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.honorswap.com',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://app.gitbook.com/@honorswap-1/s/honorswap/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.honorswap.com/help/',
      },
      {
        label: t('Careers'),
        href: 'https://docs.honorswap.com/hiring/become-a-chef',
      },
    ],
  },
]
