import RegisterNav from "@/features/auth/components/RegisterNav";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <RegisterNav />
      {children}
    </div>
  );
}
