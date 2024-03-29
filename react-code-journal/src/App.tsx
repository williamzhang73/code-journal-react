import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { EntryForm } from './pages/EntryForm';
import { EntriesList } from './pages/EntriesList';
import { NotFound } from './pages/NotFound';
import './css/layout.css';
import './css/styles.css';
import './css/reset.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<EntryForm />} />
        <Route path="entrylist" element={<EntriesList />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
