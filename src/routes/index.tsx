// src/routes/index.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '../layout/MainLoyout';
import ReactPage from '../React';
import { AngularPage } from '../pages/home';
import { AngularPage2 } from '../pages/home2';



// --- Lazy Loading das Páginas ---
// Isso é crucial para escalabilidade e performance.
// O código de cada página só será carregado quando a rota for acessada.
// const HomePage = React.lazy(() => import('../pages/HomePage'));
// const LoginPage = React.lazy(() => import('../pages/LoginPage'));

// // Componente simples de fallback para o Suspense

export function AppRouter() {
  return (
    <Routes>
    {/* Redirecionar a raiz para o dashboard */}
    <Route path="/" element={<Navigate to="/react" replace />} />

    {/* Rotas do Dashboard usando o layout compartilhado */}
    <Route path="/" element={<DashboardLayout />}>
      <Route path="/react" element={<ReactPage/>} />
      <Route path="/angular" element={<AngularPage/>} />
      <Route path="/angular2" element={<AngularPage2/>} />

    </Route>

    {/* Página 404 */}
    <Route path="*" element={<div>Página não encontrada</div>} />
  </Routes>
  );
}