export default function Managment_form() {
  return (
    <>
      <div className="w-full flex justify-center mt-4">
        <div className="sm:max-w-lg max-w-72 bg-blue-50 overflow-hidden rounded-2xl text-black">
          <form className="flex flex-col p-8 gap-4 text-center">
            <span className="text-base text-gray-500 font-semibold">
              Enter the Detailes to allot Seats
            </span>
            <div className="bg-white rounded-lg mt-4 mb-2 w-full shadow-md">
              <select
                className="text-gray-400 font-bold rounded-md p-2 w-full"
                id="subject1"
              >
                <option value="subject1">Subject Code</option>
                <option value="subject2">subject2</option>
                <option value="subject3">subject3</option>
              </select>
              <input
                type="date"
                className="w-full h-10 px-4 py-2 focus:outline-none border-t border-gray-300 border-b"
                placeholder="Select date"
              />

              <input
                type="email"
                className="w-full h-10 px-4 py-2 focus:outline-none border-t border-gray-300 border-b font-semibold"
                placeholder="Number or Exmination room avialible"
              />
            </div>
            <button className="bg-blue-600 text-white rounded-full py-3 px-4 font-semibold hover:bg-blue-700 transition-colors">
             Allot the Seats
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
