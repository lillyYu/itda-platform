import 'scss/pages/wrong-access.scss';

import blob from 'images/blobanimation.svg';
import { Link } from 'react-router-dom';

const WrongAccess = () => {
  return (
    <div className="wrong-access">
      <div className='wrong-access-wrap'>
        <img src={blob} alt="blob" />

        <div className='wrong-text'>
          <header>
            <span>404 error</span>
            <p>Page Not Found | 잘못된 url입니다</p>
          </header>
        </div>

        <Link to="/">Go back to home</Link>
      </div>
    </div>
  )
}

export default WrongAccess