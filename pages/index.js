
import Link from 'next/link';

const IndexPage = () => {
  return <div >
      index page
      <Link prefetch href="/about">
        <a>About</a>
      </Link>
    </div>
}

export default IndexPage;
