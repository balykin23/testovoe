import React from 'react';
import Image from 'next/image';
import { cn } from '@/utils';
import styles from './Avatar.module.css';

export type TAvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface IAvatarProps {
  /** URL изображения */
  src: string;
  /** Alt текст */
  alt: string;
  /** Размер аватара */
  size?: TAvatarSize;
  /** Показывать индикатор онлайн */
  online?: boolean;
  /** Показывать бейдж верификации */
  verified?: boolean;
  /** URL иконки верификации */
  verifiedIcon?: string;
  /** Обработчик клика */
  onClick?: () => void;
  /** Дополнительные CSS классы */
  className?: string;
  /** Является ли кликабельным */
  clickable?: boolean;
  /** Дополнительные inline стили */
  style?: React.CSSProperties;
}

// Маппинг размеров на пиксели
const SIZE_MAP: Record<TAvatarSize, number> = {
  sm: 24,
  md: 32,
  lg: 40,
  xl: 48,
};

/**
 * Универсальный компонент аватара пользователя
 * Поддерживает индикаторы онлайн статуса и верификации
 */
export const Avatar = React.forwardRef<HTMLDivElement, IAvatarProps>(
  (
    {
      src,
      alt,
      size = 'lg',
      online = false,
      verified = false,
      verifiedIcon = '/icons/verified.svg',
      onClick,
      className,
      clickable = false,
      style,
    },
    ref
  ) => {
    const pixelSize = SIZE_MAP[size];
    const isInteractive = clickable || !!onClick;

    // Обработчик клика с остановкой всплытия
    const handleClick = (e: React.MouseEvent) => {
      if (!isInteractive) return;
      e.stopPropagation(); // Предотвращаем всплытие к родительским элементам
      onClick?.();
    };

    // Обработчик клавиатуры для accessibility
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!isInteractive) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation(); // Предотвращаем всплытие к родительским элементам
        onClick?.();
      }
    };

    const containerClass = cn(
      styles.container,
      styles[size],
      isInteractive && styles.clickable,
      className
    );

    return (
      <div
        ref={ref}
        className={containerClass}
        onClick={isInteractive ? handleClick : undefined}
        onKeyDown={isInteractive ? handleKeyDown : undefined}
        role={isInteractive ? 'button' : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        aria-label={isInteractive ? `Перейти к профилю ${alt}` : undefined}
        style={style}
      >
        <div className={styles.imageWrapper}>
          <Image
            src={src}
            alt={alt}
            width={pixelSize}
            height={pixelSize}
            className={styles.image}
          />

          {online && (
            <span
              className={styles.onlineIndicator}
              aria-label="Пользователь онлайн"
            />
          )}
        </div>

        {verified && (
          <Image
            src={verifiedIcon}
            alt="Верифицирован"
            width={size === 'sm' ? 12 : 16}
            height={size === 'sm' ? 12 : 16}
            className={styles.verifiedBadge}
            unoptimized
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

