import * as api from '@lp-labs/relative-time-label';
import { relativeTimeLabel } from '@lp-labs/relative-time-label';
console.log(relativeTimeLabel(0, 90000));
// @ts-expect-error invalid argument must be rejected by declarations
api.relativeTimeLabel('yesterday', 0);
