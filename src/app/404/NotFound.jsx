import { Link } from 'react-router-dom';
import styleError from './NotFound.module.css';
export default function NotFound() {
  return (
    <div id={styleError.notfound}>
      <div className={styleError.notfound}>
        <div className={styleError.notfound_404}>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <Link to="/">Homepage</Link>
      </div>
    </div>
  );
}
