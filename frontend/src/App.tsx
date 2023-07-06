import { Route, Routes, Navigate } from 'react-router-dom'
import { RecommendForm } from './Containers/RecommendForm'
import { PaymentForm } from './Containers/PaymentForm'
import { Sale } from './pages/Sale'
import { Product } from './pages/Sale/product'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import NotFound from './components/notFound'
import './App.css'
import { CartPage } from './pages/Cart'
import { RegisterPage } from './pages/Register'
import { LoginPage } from './pages/Login'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import { AdminNavbar } from './components/AdminNavbar'
import { AdminHomePage } from './pages/AdminHome'
import { AdminUsersPage } from './pages/AdminUser'
import { Footer } from './components/Footer'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/recommend' element={<RecommendForm />} />
            <Route path='/payment' element={<PaymentForm />} />
            <Route path='/sale' element={<Sale />} />
            <Route path='/sale/:id' element={<Product />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='*' element={<Navigate to='/not-found' />} />
          </Route>

          <Route element={<AdminNavbar />}>
            <Route path='/admin' element={<AdminHomePage />} />
            <Route path='/admin/users' element={<AdminUsersPage />} />
          </Route>
        </Routes>

        <Footer />
      </CartProvider>
    </AuthProvider>
  )
}

export default App
