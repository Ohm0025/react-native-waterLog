export const getNowTime = () => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  return `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }`;
};

export const setNextTime = (time: string) => {
  const [hour, minute] = time.split(":");
  const nextTime = new Date();
  nextTime.setHours(parseInt(hour) + 1);
  nextTime.setMinutes(parseInt(minute));
  return `${
    nextTime.getHours() < 10 ? `0${nextTime.getHours()}` : nextTime.getHours()
  }:${
    nextTime.getMinutes() < 10
      ? `0${nextTime.getMinutes()}`
      : nextTime.getMinutes()
  }`;
};

export const isBetweenTime = (
  timeStart: string,
  timeEnd: string,
  currentTime: string
) => {
  const [currentHr, currentMin] = currentTime.split(":");
  const [startHr, startMin] = timeStart.split(":");
  const [endHr, endMin] = timeEnd.split(":");

  if (currentHr >= endHr) {
    return false;
  } else {
    //currentHr < endHr
    if (currentHr < startHr) {
      return false;
    }
  }

  return true;
};

export const differeceTime = (
  time1: string,
  time2: string,
  minInterval: number = 60
) => {
  const [hour1, minute1] = time1.split(":");
  const [hour2, minute2] = time2.split(":");
  const minLeft =
    (parseInt(hour2) - parseInt(hour1)) * 60 +
    parseInt(minute2) -
    parseInt(minute1);

  return (minLeft * 100) / minInterval;
};

export const compareDate = (date1: string, date2: string) => {
  const [year1, month1, day1] = date1.split("-");
  const [year2, month2, day2] = date2.split("-");

  if (year1 > year2) return 1;
  if (year1 < year2) return -1;

  if (month1 > month2) return 1;
  if (month1 < month2) return -1;

  if (day1 > day2) return 1;
  if (day1 < day2) return -1;

  return 0;
};

export const getNowDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    date < 10 ? `0${date}` : date
  }`;
};
