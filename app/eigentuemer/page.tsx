import LandingPage from '../../components/LandingPage';
import { trackPageView } from '../../lib/db';

export default function EigentuemerPage() {
  try {
    trackPageView('eigentuemer');
  } catch (e) {
    console.error(e);
  }

  return <LandingPage targetGroup="eigentuemer" />;
}
