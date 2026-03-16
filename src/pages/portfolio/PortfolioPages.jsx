// pages/portfolio/LongFormPage.jsx
import PortfolioGallery from "../../components/PortfolioGallery";
import { PORTFOLIO } from "../../content/siteContent";

export function LongFormPage() {
  const { title, description, items } = PORTFOLIO.longform;
  return <PortfolioGallery title={title} description={description} items={items} />;
}

// pages/portfolio/ShortFormPage.jsx
export function ShortFormPage() {
  const { title, description, items } = PORTFOLIO.shortform;
  return <PortfolioGallery title={title} description={description} items={items} />;
}

// pages/portfolio/MotionPage.jsx
export function MotionPage() {
  const { title, description, items } = PORTFOLIO.motion;
  return <PortfolioGallery title={title} description={description} items={items} />;
}

// pages/portfolio/UIUXPage.jsx
export function UIUXPage() {
  const { title, description, items } = PORTFOLIO.uiux;
  return <PortfolioGallery title={title} description={description} items={items} />;
}
