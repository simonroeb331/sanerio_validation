import LandingPage from '../../components/LandingPage';
import { trackPageView } from '../../lib/db';

export default function EnergieberaterPage() {
  try {
    trackPageView('energieberater');
  } catch (e) {
    console.error(e);
  }

  return <LandingPage targetGroup="energieberater" />;
}
