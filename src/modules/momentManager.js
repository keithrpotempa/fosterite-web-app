import moment from 'moment';

export default {
  getAge(dateString) {
    /* Note: 
      If a birthdate is unknown, it is listed as
      null in the database
    */ 
    if (dateString) {
      return moment(dateString, "YYYY-MM-DD").fromNow(true)
    } else {
      return "Unknown"
    }
  },
  getMomentFromNow(dateTimeString) {
    return moment(dateTimeString).fromNow()
  }
} 