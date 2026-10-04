import DynamicCategoryPage from "../component/DynamicCategoryPage";

const Electronics = () => (
  <DynamicCategoryPage
    categoryId="electronics"
    title="Electronics & Audio"
    subtitle="Earbuds, chargers & gadgets — delivered in 10 minutes"
    bannerImg="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1400&q=80"
    emptyIcon="🎧"
  />
);

export default Electronics;
