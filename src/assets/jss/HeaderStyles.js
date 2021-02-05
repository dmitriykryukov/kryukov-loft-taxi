import { colors } from './Colors'

export default () => {
  return (
    {
      head: {
        paddingTop: '6px',
        paddingBottom: '6px',
        '& button': {
          textTransform: 'none'
        }
      },
      logo: {
      flexGrow: 1
      },
      activeLink: {
        color: colors.orange,
      }
      
    }
  )}