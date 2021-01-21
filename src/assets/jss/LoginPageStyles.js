import { colors } from './Colors'
import background from '../images/map_background.jpg'

export default () => {
    return (
        {
            container: {
              width: '100%',
              overflow: 'hidden',
              minHeight: '100%',
              position: 'relative',
              height: '100vh',
              display: 'flex',
            },
            leftSide: {
              backgroundColor: colors.backgroundColor,
              width: '34%',
              height: '100%',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            rightSide: {
              width: '66%',
              backgroundImage: `url('${background}')`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100%',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            card: {
              width: '520px',
              borderRadius: '20px',
              padding: '48px 0',
            }
        })
}
