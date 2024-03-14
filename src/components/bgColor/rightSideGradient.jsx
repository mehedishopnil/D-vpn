const rightSideGradient = () => {
  return (
    <div>
      {/* Circular gradient on the right side with simulated blur */}
      <div className="absolute hidden lg:block top-0 -right-[30px] bottom-0 w-[645px] h-[745px] rounded-l-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0  bg-[#FAE289] rounded-l-full"
          style={{
            transform: "translateX(95%)",
            filter: "blur(90px)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default rightSideGradient;
