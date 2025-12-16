const AddQuote = () => {
  return (
    <div className="flex items-center justify-center bg-slate-900 p-6">
      <div className="max-w-lg w-full bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white tracking-tight">Add a Quote</h2>
          <p className="text-slate-400 text-sm mt-1">Share a piece of wisdom with the world.</p>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="quote"
              className="block text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2"
            >
              The Message
            </label>
            <textarea
              id="quote"
              rows={4}
              className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition duration-200"
              placeholder="Enter the quote here..."
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="author"
              className="block text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2"
            >
              Author
            </label>
            <div className="relative">
              <input
                type="text"
                id="author"
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition duration-200"
                placeholder="e.g. Rumi"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-900/20 transform transition active:scale-[0.98]"
          >
            Publish Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuote;
