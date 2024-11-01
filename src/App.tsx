import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.tsx'
import BlogList from './BlogList.tsx'
import PostsDetails from './PostsDetails.tsx';
import Contact from './Contact.tsx';
import './cssModule/reset.css';
import styles from './cssModule/styles.module.css'
import { CSSProperties } from 'react';

interface CustomCSSProperties extends CSSProperties {
  '--color-primary'?: string;
  '--color-secondary'?: string;
  '--color-border'?: string;
  '--color-gray'?: string;
}

const colorStyles: CustomCSSProperties = {
  '--color-primary': '#333',
  '--color-secondary': '#06c',
  '--color-border': '#ccc',
  '--color-gray': '#888',
};

const App = () => {
  return (
    <>
      <div style={colorStyles}>
        <Header />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/posts/:postId" element={<PostsDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
