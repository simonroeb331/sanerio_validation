import { Suspense } from "react";
import AboutPage from "../../components/AboutPage";

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center text-slate-600">
      Lädt…
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <AboutPage />
    </Suspense>
  );
}
