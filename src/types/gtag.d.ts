declare global {
  interface Window {
    dataLayer: any[];
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

export {};

