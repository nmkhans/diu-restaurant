// eslint-disable-next-line react/prop-types
const Title = ({ children }) => {
  return (
    <div>
      <h2 className="text-3xl text-primary font-semibold mb-10">
        {children}
      </h2>
    </div>
  );
};

export default Title;
