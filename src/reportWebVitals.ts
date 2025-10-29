import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

type WebVitalsMetric = {
  name: "CLS" | "FID" | "FCP" | "LCP" | "TTFB";
  value: number;
  delta: number;
  id: string;
};

const reportWebVitals = (onPerfEntry: (metric: WebVitalsMetric) => void) => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

// Uso correto:
reportWebVitals((metric: WebVitalsMetric) => {
  console.log(metric);
});

export default reportWebVitals;
