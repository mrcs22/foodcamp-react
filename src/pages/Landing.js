import Header from "../components/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer";

export default function Landing({ states }) {
  return (
    <>
      <Header />
      <Content data={states} />
      <Footer data={states} />
    </>
  );
}
