function truncateString(str: string, maxLen: number) {
  if (str.length > maxLen) {
    let subStr = str.substring(0, maxLen);
    return subStr + '...';
  } else {
    return str;
  }
}

export default truncateString;
