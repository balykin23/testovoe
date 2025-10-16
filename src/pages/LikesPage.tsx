'use client'

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ISocialUser } from '@/mocks/types';
import { UserItemSkeleton } from '@/components/skeletons';
import styles from '@/styles/pages/Page.module.css';

interface ILikesPageProps {
  users?: ISocialUser[]; // Полный список всех пользователей, кто поставил лайк
  postImage?: string;  // Изображение публикации, которую лайкнули
  isLoading?: boolean; // Состояние загрузки
}

const LikesPage: React.FC<ILikesPageProps> = ({ users = [], postImage, isLoading = false }) => {
  const router = useRouter();

  // Обработчик возврата назад
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <button
          type="button"
          className={styles.backButton}
          onClick={handleGoBack}
          aria-label="Вернуться назад"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className={styles.pageTitle}>Лайки</h1>
        <div className={styles.headerPlaceholder} />
      </header>

      <div className={styles.pageContent}>
        {isLoading ? (
          /* Отображаем скелетоны во время загрузки */
          <ul className={styles.userList}>
            {Array.from({ length: 5 }).map((_, index) => (
              <UserItemSkeleton key={index} />
            ))}
          </ul>
        ) : users.length === 0 ? (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>Нет лайков</p>
          </div>
        ) : (
          <ul className={styles.userList}>
            {users.map((user) => (
              <li key={user.id} className={styles.userItem}>
                <div className={styles.avatarContainer}>
                  <Image
                    src={user.avatar}
                    alt={`Аватар ${user.name}`}
                    width={48}
                    height={48}
                    className={styles.avatar}
                  />
                  {user.online && (
                    <span
                      className={styles.onlineIndicator}
                      aria-label="Пользователь онлайн"
                    />
                  )}
                </div>

                <div className={styles.userInfo}>
                  <div className={styles.nameWrapper}>
                    <span className={styles.userName}>{user.name}</span>
                    {user.verified && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.verifiedBadge}
                        aria-label="Верифицирован"
                      >
                        <path
                          d="M8 0L9.79611 2.33689L12.7023 2.28022L13.3541 5.10899L15.7063 6.47811L14.6459 9.16311L15.7063 11.8481L13.3541 13.217L12.7023 16.0458L9.79611 15.9891L8 18.3259L6.20389 15.9891L3.29772 16.0458L2.64588 13.217L0.293661 11.8481L1.35411 9.16311L0.293661 6.47811L2.64588 5.10899L3.29772 2.28022L6.20389 2.33689L8 0Z"
                          fill="#3B82F6"
                        />
                        <path
                          d="M5.5 8L7.5 10L10.5 6"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <p className={styles.likeText}>нравится ваша публикация</p>
                </div>

                {postImage && (
                  <div className={styles.postImagePreview}>
                    <Image
                      src={postImage}
                      alt="Превью публикации"
                      width={48}
                      height={48}
                      className={styles.postImage}
                    />
                  </div>
                )}

                <button
                  type="button"
                  className={styles.menuButton}
                  aria-label="Меню"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="4" r="1.5" fill="currentColor"/>
                    <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
                    <circle cx="10" cy="16" r="1.5" fill="currentColor"/>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LikesPage;

