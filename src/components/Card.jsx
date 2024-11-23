const Card = ({ title, value, color }) => {
  return (
    <div className={`flex items-center bg-gray-800 p-5 rounded-lg text-${color}`}>
      <div className="text-4xl">•</div>
      <div className="ml-4">
        <p className="text-lg">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default Card;
