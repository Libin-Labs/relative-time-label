export function relativeTimeLabel(
  target: number,
  now: number,
  style: 'long' | 'short' = 'long',
): string {
  if (!Number.isFinite(target) || !Number.isFinite(now))
    throw new TypeError('Timestamps must be finite');
  if (style !== 'long' && style !== 'short') throw new RangeError('Invalid style');
  const seconds = (target - now) / 1000,
    abs = Math.abs(seconds),
    units: { name: string; seconds: number }[] = [
      { name: 'second', seconds: 1 },
      { name: 'minute', seconds: 60 },
      { name: 'hour', seconds: 3600 },
      { name: 'day', seconds: 86400 },
      { name: 'month', seconds: 2592000 },
      { name: 'year', seconds: 31536000 },
    ],
    unit = units.find((_, i) => abs < [60, 3600, 86400, 2592000, 31536000, Infinity][i]!)!,
    count = Math.round(abs / unit.seconds),
    label = unit.name;
  const suffix =
    style === 'short'
      ? (
          { second: 's', minute: 'm', hour: 'h', day: 'd', month: 'mo', year: 'y' } as Record<
            string,
            string
          >
        )[label]!
      : label + (count === 1 ? '' : 's');
  return style === 'short'
    ? seconds < 0
      ? count + suffix + ' ago'
      : 'in ' + count + suffix
    : seconds < 0
      ? count + ' ' + label + (count === 1 ? '' : 's') + ' ago'
      : 'in ' + count + ' ' + label + (count === 1 ? '' : 's');
}
