function formatTemperature({ temperature }: { temperature: number }) {
  return `${Math.round(temperature)}°`;
}

export { formatTemperature };
