import React, { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const HomePage = lazy(() => import('./home'));
const UserPage = lazy(() => import('./user'));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="user/:userId" element={<UserPage />} />
    </Routes>
  );
};

export { Routing };
