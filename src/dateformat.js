export function formatDate(inputDate) {
    const months = {
      jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
      jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12'
    };
  
    // Normalize input date by replacing various delimiters with a single delimiter
    let normalizedDate = inputDate.toLowerCase().replace(/[\s\-\/]/g, '-');
  
    // Handle different date formats
    let parts;
    if (/^\d{4}-\d{2}-\d{2}$/.test(normalizedDate)) {
      // Format: YYYY-MM-DD
      parts = normalizedDate.split('-');
    } else if (/^\d{2}-[a-z]{3}-\d{4}$/.test(normalizedDate)) {
      // Format: DD-MMM-YYYY
      parts = normalizedDate.split('-');
      parts[1] = months[parts[1]];
    } else if (/^\d{2}-\d{2}-\d{4}$/.test(normalizedDate)) {
      // Format: DD-MM-YYYY
      parts = normalizedDate.split('-');
      [parts[0], parts[1], parts[2]] = [parts[2], parts[1], parts[0]];
    } else if (/^\d{2}-\d{2}-\d{2}$/.test(normalizedDate)) {
      // Format: DD-MM-YY
      parts = normalizedDate.split('-');
      parts[2] = '20' + parts[2];
      [parts[0], parts[1], parts[2]] = [parts[2], parts[1], parts[0]];
    } else {
      throw new Error('Unsupported date format');
    }
  
    // Ensure all parts are two digits
    parts[1] = parts[1].padStart(2, '0');
    parts[2] = parts[2].padStart(2, '0');
  
    return parts.join('');
  }
  
  // Example usage:
  console.log(formatDate('2022-01-01')); // Output: 20220101
  console.log(formatDate('01-jan-2022')); // Output: 20220101
  console.log(formatDate('01/01/2022')); // Output: 20220101
  console.log(formatDate('01-01-22')); // Output: 20220101

