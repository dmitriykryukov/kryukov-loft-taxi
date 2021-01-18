import { colors } from './Colors'

export default () => {
  return (
    {
      container: {
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 102px 0 98px'
      },
      title: {
        fontSize: '30px',
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: '2.75rem'
      },
      form: {
        marginBottom: '24px',
        '& label.Mui-focused': {
          color: colors.grey
        },
      },
      submit: {
        marginTop: '72px',
        fontSize: '1.3rem',
        fontWeight: '400',
        borderRadius: '40px',
        letterSpacing: '0px',
        textTransform: 'none'
      },
      newUser: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column'
      },
      user: {
        display: 'flex',
        justifyContent: 'space-between'
      }
       
    }
  )}