/* eslint-disable import/no-anonymous-default-export */
import { colors } from './Colors'

export default () => {
  return (
    {
      container: {
        padding: '24px',
        position: 'absolute'
      },
       paper: {
        width: '486px',
        padding: '16px 0',
        borderRadius: '10px',
        paddingBottom: '34px',
        pointerEvents: 'all',
       },
       inputField: {
        padding: '0 20px'
       },
       formControl: {
        position: 'relative',
        minWidth: '100%',
        '&:first-child': {
          marginBottom: '8px'
        }
       },
       paperPlan: {
        top: '164px',
        left: '24px',
        padding: '32px 46px',
        position: 'absolute',
        maxWidth: '486px',
        boxSizing: 'border-box',
        borderRadius: '10px',
        pointerEvents: 'all',
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)'
      },
      planItems: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      card: {
        width: '118px',
        cursor: 'pointer',
        height: '167px',
        opacity: '0.6',
        padding: '12px',
        boxSizing: 'border-box',
        transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
        marginRight: '20px',
        borderRadius: '10px',
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)'
      },
      price: {
        color: colors.grey,
        fontSize: '11px',
        lineHeight: '11px'
      },
      media: {
        width: '95px',
        height: '72px',
        marginTop: '12px'
      },
      btnOrder: {
        marginTop: '30px',
        fontSize: '1.3rem',
        fontWeight: '400',
        borderRadius: '40px',
        letterSpacing: '0px',
        textTransform: 'none'
      }
    }
  )}