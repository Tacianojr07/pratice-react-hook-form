import HeaderHome from "@/components/HeaderHome";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeaderHome />
        {children}
      </body>
    </html>
  );
}
