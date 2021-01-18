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
      }
    }
  )}