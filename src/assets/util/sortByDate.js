export const sortByDate = (array) => {
  const sorted = array.sort((a, b) => {
    let dateA = [];
    let dateB = [];
    if (a.date_posted) {
      dateA = a.date_posted;
      dateB = b.date_posted;
    } else if (a.date_started) {
      dateA = a.date_started;
      dateB = b.date_started;
    } else if (a.date_sent) {
      dateA = a.date_sent;
      dateB = b.date_sent;
    }
    const date_A = new Date(dateA);
    const date_B = new Date(dateB);
    return date_A - date_B;
  });
  return sorted;
};
