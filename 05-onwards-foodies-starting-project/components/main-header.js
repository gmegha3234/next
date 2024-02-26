import styles from '@/components/main-header.module.css'
import Link from "next/link";
import logoImg from "@/assets/logo.png"
import Image from "next/image";
export default function MainHeader(){
    return (
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="A plate with food on it" width={200} height={200}priority></Image>
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}