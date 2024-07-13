export const maskPhone = (phone) => {
  return phone
  .replace(/[^\d*#]/g, "")
    .replace(/^(\d{3})(\d)/, "$1 $2")
    .replace(/(\d{3})(\d)/, "$1 $2")
    .replace(/(-\d{4})\d+?$/, "$1");
};
