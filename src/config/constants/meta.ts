import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'HonorSwap',
  description:
    'The most popular AMM on BSC by user count! Earn HNR through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by HonorSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://honorswap.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('HonorSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('HonorSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('HonorSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('HonorSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('HonorSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('HonorSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('HonorSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('HonorSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('HonorSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('HonorSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('HonorSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('HonorSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('HonorSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('HonorSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('HonorSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('HonorSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('HonorSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('HonorSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('HonorSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('HonorSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('HonorSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('HonorSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('HonorSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('HonorSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    default:
      return null
  }
}
