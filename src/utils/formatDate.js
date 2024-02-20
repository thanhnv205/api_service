import moment from 'moment'

export const date = (d) => {
  return moment(d).format('YYYY-MM-DD')
}

export const dateView = (d) => {
  return moment(d).format('DD-MM-YYYY')
}

export const dateTime = (d) => {
  return moment(d).format('YYYY-MM-DD HH:mm:ss')
}

export const dateTimeWiew = (d) => {
  return moment(d).format('HH:mm DD/MM/YYYY')
}

export const time = (d) => {
  return moment(d).format('HH:mm:ss')
}

export const timeShort = (time) => {
  return moment(time).format('HH:mm')
}

export const dateTimeCal = (d) => {
  return moment(d).format('DD-MM-YYYY HH:mm')
}

export const formatBirthday = (day) => {
  return moment(day).format('DD/MM/YYYY')
}

export const formatMonthYear = (d) => {
  return moment(d).format('YYYY-MM')
}

export const maxDateByMonth = (date) => {
  return moment(date).clone().endOf('month')
}

export const minDateByMonth = (date) => {
  return moment(date).clone().startOf('month')
}

export const minDay = (date) => {
  return moment(date).clone().startOf('month').format('DD')
}

export const maxDay = (date) => {
  return moment(date).clone().endOf('month').format('DD')
}