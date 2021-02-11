/* eslint-disable import/no-anonymous-default-export */
import { colors } from './Colors'

export default () => {
  return (
    {
      backGround: {
        position: 'absolute',
        inset: '0px',
        backgroundColor: 'rgb(28, 26, 25)',
        opacity: '0.5',
      },
      paperProfile: {
        top: '50%',
        left: '50%',
        padding: '60px 44px',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px'
      },
      paymentInfo: {
        display: 'flex',
        padding: '40px 0'
      },
      formInfo: {
        flex: '1 1 0',
        marginRight: '100px'
      },
      textField: {
        width: '355px',
        marginBottom: '24px'
      },
      cardInfo: {
        flex: '1 1 0px'
      },
      boxSave: {
        display: 'flex',
        justifyContent: 'center'
      },
      date: {
        display:' flex',
        gridGap: '35px'
      },
      card: {
        width: '347px',
        height: '182px',
        display:' flex',
        padding: '18px 28px',
        boxSizing: 'border-box',
        borderRadius: '10px',
        flexDirection: 'column',
        justifyContent: 'space-between'
      },
      topBottom: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent:' space-between'
      },
      masterCard: {
        width: '38px',
        height: '28px',
        display: 'flex',
        '&:before, &:after': {
          width: '28px',
          height: '28px',
          content: '""',
          flexShrink: '0',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          backgroundColor: '#f1f1f1',
        },
        '&:after': {
          marginLeft: '-10px'
        }
      },
      buttonSave: {
        width: '350px',
        marginTop: '30px',
        fontSize: '1.3rem',
        fontWeight: '400',
        borderRadius: '40px',
        letterSpacing: '0px',
        textTransform: 'none'
      }
    }
  )}
