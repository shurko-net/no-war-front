import './App.scss';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return <>{t('helloWorld')}</>;
}

export default App;
