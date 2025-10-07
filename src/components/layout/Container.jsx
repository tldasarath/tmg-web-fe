export const Container = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-[1400px] mx-[40px] xl:mx-[80px] px:[50px] xl:px-[100px] ${className}`}>
      {children}
    </div>
  );
};