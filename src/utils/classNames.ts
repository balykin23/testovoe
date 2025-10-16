type ClassValue = string | number | boolean | undefined | null;

export const cn = (...classes: ClassValue[]): string => {
  return classes
    .filter((cls): cls is string | number => {
      return cls !== null && cls !== undefined && cls !== false && cls !== '';
    })
    .join(' ');
};

export const classNames = cn;

