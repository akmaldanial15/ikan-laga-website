import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout-wrapper min-h-screen bg-[#040714] text-foreground font-sans">
      {/* Admin specific layout wrappers or widgets can be added here */}
      {children}
    </div>
  );
}
