import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { PostProvider } from './contexts/PostContext.tsx'
import { CommentProvider } from './contexts/CommentContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider>
        <PostProvider>
          <CommentProvider>
              <App />
          </CommentProvider>
        </PostProvider>
      </AuthProvider>
    </StrictMode>,
  </BrowserRouter>
)
