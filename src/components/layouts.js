import Header from "./header";

const Layouts = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layouts;
