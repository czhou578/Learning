// This enables module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    // Add your module extensions here.
  function pad(a: number): number
  interface DateDetails {
    hours: number;
    minutes: number;
    seconds: number;
}
}
