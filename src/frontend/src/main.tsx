import { AuthProvider } from "@/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerSW } from "virtual:pwa-register";

// Register PWA service worker for background updates and offline support
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log("[PWA] New content available, please refresh.");
  },
  onOfflineReady() {
    console.log("[PWA] App is ready for offline use.");
  },
  onRegisteredSW(_swUrl, r) {
    if (r) {
      setInterval(
        () => {
          r.update();
        },
        60 * 60 * 1000,
      ); // Check for updates hourly
    }
  },
});

BigInt.prototype.toJSON = function () {
  return this.toString();
};

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </QueryClientProvider>,
);
