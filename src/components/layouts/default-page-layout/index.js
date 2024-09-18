const DefaultPageLayout = ({ children }) => {
  return (
    <main className="h-screen w-screen flex flex-col justify-center p-5 font-open-sans">
      {children}
    </main>
  );
};
export default DefaultPageLayout;
