export default function NalitaFullScreenContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="hero has-background-nalita-light pt-6">
      <div className="hero-body">
        <div className="container has-text-centered">
          {children}
        </div>
      </div>
    </section>
  );
}