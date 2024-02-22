import dayjs from 'dayjs'

export const date = (d) => {
  return dayjs(d).format('YYYY-MM-DD')
}

export const dateView = (d) => {
  return dayjs(d).format('DD-MM-YYYY')
}

export const dateTime = (d) => {
  return dayjs(d).format('YYYY-MM-DD HH:mm:ss')
}

export const dateTimeWiew = (d) => {
  return dayjs(d).format('HH:mm DD/MM/YYYY')
}

export const time = (d) => {
  return dayjs(d).format('HH:mm:ss')
}

export const timeShort = (time) => {
  return dayjs(time).format('HH:mm')
}

export const dateTimeCal = (d) => {
  return dayjs(d).format('DD-MM-YYYY HH:mm')
}

export const formatBirthday = (day) => {
  return dayjs(day).format('DD/MM/YYYY')
}

export const formatMonthYear = (d) => {
  return dayjs(d).format('YYYY-MM')
}

export const maxDateByMonth = (date) => {
  return dayjs(date).clone().endOf('month')
}

export const minDateByMonth = (date) => {
  return dayjs(date).clone().startOf('month')
}

export const minDay = (date) => {
  return dayjs(date).clone().startOf('month').format('DD')
}

export const maxDay = (date) => {
  return dayjs(date).clone().endOf('month').format('DD')
}