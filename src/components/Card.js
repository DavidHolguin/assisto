export const Card = ({ title, children }) => (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );