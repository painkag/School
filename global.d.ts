// global.d.ts
interface Window {
  gtag: (event: string, action: string, options: Record<string, any>) => void;
}
