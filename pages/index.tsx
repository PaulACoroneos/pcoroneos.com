import { Header } from "../components/header";

const blogPosts = [1, 2, 3];

const Homepage = () => (
  <div className="container">
    <Header />
    {blogPosts.map((blogPost, index) => {
      <div>Hi</div>;
    })}
  </div>
);

export default Homepage;
