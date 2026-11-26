const footer = () => {
  return (
    <>
      <div className="bg-[#6249d4]">
        <div className="max-w-360 mx-auto text-center py-10 text-white">
          &copy; Copyright{" "}
          <span className="font-sans">{new Date().getFullYear()}</span>
        </div>
      </div>
    </>
  );
};

export default footer;
