import Signup from "containers/signup";
import type { NextPage } from "next";
import Meta from "seo";

const Home: NextPage = () => {
  return (
    <Meta
      title="Ubiscore | Get Started Now"
      description="Get started at Ubiscore now"
    >
      <Signup />;
    </Meta>
  );
};

export default Home;
