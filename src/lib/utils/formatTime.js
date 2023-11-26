function formatTime(date, separator = "-", includeSeconds = false) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Month is zero-based
  const seconds = date.getSeconds();

  return `${hours}
  ${separator}
  ${minutes}${includeSeconds ? `${separator}${seconds}` : ""}
  `;
}

export default formatTime;
