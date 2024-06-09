import Header from '../components/Header';
import PostWrapper from '../components/PostsWrapper';
import Footer from '../components/Footer';

function Posts() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <PostWrapper />
      <Footer />
    </div>
  );
}

export default Posts;
