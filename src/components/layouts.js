import Header from "./header";

const Layouts = (props) => {
  return (
    <>
      <Header />
      {props.children}
      Footer
    </>
  );
};

export default Layouts;
