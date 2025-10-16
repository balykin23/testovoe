import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Sidebar.module.css';

interface IUserData {
  id: string;
  name: string;
  avatar: string;
  verified: boolean;
}

interface IUserBarProps {
  user: IUserData;
}

export const UserBar = React.memo<IUserBarProps>(({ user }) => (
  <header className={styles.userBar}>
    <Link
      href={`/profile/${user.id}`}
      className={styles.userLink}
      aria-label="Перейти в профиль"
      prefetch={false}
    >
      <Image
        key={`avatar-${user.avatar}`}
        src={user.avatar}
        alt=""
        className={styles.avatar}
        width={44}
        height={44}
        priority
      />
      <span className={styles.userName}>
        {user.name}
        {user.verified && (
          <Image
            key="shazam-badge"
            src="/icons/shazamIcon.svg"
            alt="Подтверждённый аккаунт"
            className={styles.badgeImg}
            width={20}
            height={20}
            unoptimized
            loading="eager"
          />
        )}
      </span>
    </Link>

    <button
      type="button"
      className={styles.settingsBtn}
      aria-label="Открыть настройки"
    >
      <Image
        key="settings-icon"
        src="/icons/settingsIcon.svg"
        alt=""
        className={styles.settingsIcon}
        width={22}
        height={22}
        unoptimized
        loading="eager"
      />
    </button>
  </header>
));

UserBar.displayName = 'UserBar';

