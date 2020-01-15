export default function getOne(options) {
  if (!Array.isArray(options)) return null;
  const randomNumber = Math.floor(Math.random() * options.length);
  return options[randomNumber];
}