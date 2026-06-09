import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from './components/HomePage';
import { ProductCreator } from './components/ProductCreator';
import { PassportView } from './components/PassportView';
import { ProductPage } from './components/ProductPage';
import { SolutionsPage } from './components/SolutionsPage';
import { CompanyPage } from './components/CompanyPage';
import { BookDemoPage } from './components/BookDemoPage';
import { SignInPage } from './components/SignInPage';
import { GetStartedPage } from './components/GetStartedPage';
import { TestGLB } from './components/TestGLB';
import { NotFoundPage } from './components/NotFoundPage';
import { ComingSoonPage } from './components/ComingSoonPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create/:productType" element={<ProductCreator />} />
        <Route path="/passport/:productType" element={<PassportView />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/resources" element={<ComingSoonPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/book-a-demo" element={<BookDemoPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/test-3d" element={<div style={{padding: '50px'}}><TestGLB /></div>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
