import { format } from 'date-fns';

class CommonUtil {
  static formatDate(date: Date | null, desiredFormat?: string) {
    if (!date) return '';
    const dateFormat = desiredFormat ? desiredFormat : 'yyyy-MM-dd HH:mm:ss xx';
    return format(date, dateFormat);
  }
}

export default CommonUtil;
