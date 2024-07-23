import AboutCard from '@components/AboutCard';
import RatesAndConditions from '@components/RatesAndConditions';
import Cashback from '@components/Cashback';
import FAQ from '@components/FAQ';

const creditCardTabsData = [
  { id: 'about', label: 'About card', component: AboutCard },
  { id: 'rates', label: 'Rates and conditions', component: RatesAndConditions },
  { id: 'cashback', label: 'Cashback', component: Cashback },
  { id: 'faq', label: 'FAQ', component: FAQ },
];

export default creditCardTabsData;
