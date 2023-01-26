import moment from 'moment';

export type DateFormats = 'human-friendly' | 'time-ago';

// function to get formatted date string
export const formatDate = (date: string, format: DateFormats): string => {
  if (format === 'human-friendly') {
    return moment(date).format('MMMM Do YYYY h:mm:ss a');
  } else if (format === 'time-ago') {
    return moment(date).fromNow(true);
  }
  return moment(date).format('MMMM Do YYYY h:mm:ss a');
};
