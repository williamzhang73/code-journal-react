import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { EntryForm } from './pages/EntryForm';
import { EntriesList } from './pages/EntriesList';
import { NotFound } from './pages/NotFound';
import './css/layout.css';
import './css/styles.css';
import './css/reset.css';
import { useState } from 'react';
function App() {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<EntryForm isEditing={isEditing} />} />
        <Route
          path="entrylist"
          element={
            <EntriesList
              Edit={() => setIsEditing(!isEditing)}
              /*  isEditing={isEditing} */
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
