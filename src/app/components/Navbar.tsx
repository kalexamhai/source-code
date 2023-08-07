import { memo } from 'react';

import Image from 'next/image';

import styles from '../page.module.css';

import Logo from '../images/logo.svg';
import Github from '../images/github.svg';
import Mail from '../images/mail.svg';


const Navbar = () => (
  <div className={styles.navbar}>
    <div className={styles.logo}>
      <Image src={Logo}
        alt='Kal Exam Hai Logo'
        height={36}
        width={36}
      />
            Kal Exam Hai!
    </div>
    <div className={styles.navIcons}>
      <Image src={Github}
        alt='Github Repo Link'
        height={24}
        width={24}
      />
      <Image src={Mail}
        alt='Developer Mail'
        height={24}
        width={24}
      />
    </div>
  </div>
);

export default memo(Navbar);
