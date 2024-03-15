const leftSideGradient = () => {
  return (
    <div className="overflow-hidden">
      {/* Circular gradient on the left side with simulated blur */}
      <div className="absolute hidden lg:block top-[50] -left-[60px] bottom-0 w-[645px] h-[745px] rounded-r-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA75] to-[#701CB060] rounded-r-full"
          style={{
            transform: "translateX(-90%)",
            filter: "blur(90px)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default leftSideGradient;
