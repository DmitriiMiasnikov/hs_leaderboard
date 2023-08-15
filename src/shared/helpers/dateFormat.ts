// 2000-12-30 => 30.12.2000
export const dateFormat = (date?: string | null) => {
  return date ? new Date(date).toLocaleDateString('RU-ru') : '';
};

// 2021-12-27T12:07:35Z => 27.12, 15:07
export const dateAndTimeFormat = (date?: string | null) => {
  return date
    ? new Date(date).toLocaleDateString('RU-ru', {
        day: 'numeric',
        month: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })
    : '';
};

// 2021-12-27T12:07:35Z => 15:07
export const timeFormat = (date?: string | null) => {
  return date
    ? new Date(date).toLocaleTimeString('RU-ru', {
        hour: 'numeric',
        minute: 'numeric',
      })
    : '';
};