import React from 'react'
import { Text, Box } from '@pangolindex/components'
import { useTranslation } from 'react-i18next'
import { Wrapper, IconWrapper, Icon, Link } from './styled'
import Twitter from '../../assets/svg/social/twitter.svg'
import Medium from '../../assets/svg/social/medium.svg'
import Github from '../../assets/svg/social/github.svg'
import Discord from '../../assets/svg/social/discord.svg'

interface SocialMediaProps {
  collapsed: boolean
}

export default function SocialMedia({ collapsed }: SocialMediaProps) {
  const { t } = useTranslation()

  const socialLinks = [
    {
      link: 'https://twitter.com/ContextFinance',
      icon: Twitter,
      title: 'Twitter'
    },

    {
      link: 'https://contextfinance.medium.com/',
      icon: Medium,
      title: 'Medium'
    },
    {
      link: 'https://github.com/ContextFinance',
      icon: Github,
      title: 'Github'
    },
    {
      link: 'https://discord.gg/P9Jzt9pbxM',
      icon: Discord,
      title: 'Discord'
    }
  ]

  return (
    <Wrapper>
      {!collapsed && (
        <Box textAlign="center">
          <Text fontSize={12} color="text4">
            {t('header.comeAndJoinUs')}
          </Text>
        </Box>
      )}

      <IconWrapper collapsed={collapsed}>
        {socialLinks.map((x, index) => {
          return (
            <Link key={index} href={x.link}>
              <Icon height={'16px'} src={x.icon} alt={x.title} />
            </Link>
          )
        })}
      </IconWrapper>

      {/* {!collapsed && (
        <Box display="inline-flex" justifyContent="space-between" alignItems="center">
          <img height={'28px'} src={AppStore} alt={'AppStore'} style={{ marginRight: '5px' }} />
          <img height={'28px'} src={PlayStore} alt={'PlayStore'} />
        </Box>
      )} */}
    </Wrapper>
  )
}
