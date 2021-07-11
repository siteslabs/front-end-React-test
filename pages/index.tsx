import Link from 'next/link';
import { SButton } from '../styled-components/styled-posts';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/posts">
        <SButton>Latest Posts</SButton>
      </Link>
    </div>
  );
}
