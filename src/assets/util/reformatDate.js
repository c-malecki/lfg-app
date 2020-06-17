import format from "date-fns/format";

export const reformatDate = (date) => {
  return format(date, "Pp");
};
