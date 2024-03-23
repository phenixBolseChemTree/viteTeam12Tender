
// базовый коннтейнер увиверсального размера
const BaseContainer = ({children}) => {
  return (
    <div className="pageContent bg-gray-300 min-h-1000 flex justify-center items-center mb-20 md:mx-10">
    {children}
    </div>
  );
}

export default BaseContainer;