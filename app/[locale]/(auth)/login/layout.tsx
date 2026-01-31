import LoginHero from "./LoginHero";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="grid grid-cols-2">
        <LoginHero />
        {children}
      </div>
    </div>
  );
}
