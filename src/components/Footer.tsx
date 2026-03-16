export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border-subtle">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2 opacity-50">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-bg-0 rounded-full" />
          </div>
          <span className="font-black tracking-tighter text-lg">quarkmotion</span>
        </div>
        <p className="text-text-3 text-sm">
          © 2026 QuarkMotion. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
