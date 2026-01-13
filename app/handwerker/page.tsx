import LandingPage from '../../components/LandingPage';
import { trackPageView } from '../../lib/db';

export default function HandwerkerPage() {
  try {
    trackPageView('handwerker');
  } catch (e) {
    console.error(e);
  }

  return <LandingPage targetGroup="handwerker" />;
}
