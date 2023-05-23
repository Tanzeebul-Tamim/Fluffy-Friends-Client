import './Pagination.css';

const Pagination = ({ totalToys, currentPage, setCurrentPage, itemsPerPage, setItemsPerPage }) => {

  const options = [5, 10, 15, 20];
  const totalPages = Math.ceil(totalToys / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleSelectChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="pagination">
        {pageNumbers.map((number) => {
          return (
            <button
              className={currentPage === number ? 'bg-pink-600 mx-1 text-white text-lg px-4 py-1 rounded-lg' : 'bg-pink-300 mx-1 hover:text-white hover:bg-pink-400 text-lg px-4 py-1 rounded-lg'}
              onClick={() => setCurrentPage(number)}
              key={number}
            >
              {number}
            </button>
          );
        })}
      </div>
      <div>
        <select className="focus:outline-none px-2 py-1 cursor-pointer" value={itemsPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
