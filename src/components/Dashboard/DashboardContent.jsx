const DashboardContent = () => {
  return (
    <div className="w-4/5 p-10 space-y-6">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Welcome Back, Ali 👋</h2>
          <p className="text-gray-400">
            Here's what's happening with your store today.
          </p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for anything..."
            className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-gray-300"
          />
          <span className="absolute left-3 top-2 text-gray-400">🔍</span>
        </div>
      </header>

      {/* Summary */}
      <section className="grid grid-cols-3 gap-6">
        <div className="bg-indigo-700 p-4 rounded-lg">
          <p>Total Income</p>
          <h3 className="text-2xl font-semibold">$632,000</h3>
        </div>
        <div className="bg-indigo-700 p-4 rounded-lg">
          <p>Total Outcome</p>
          <h3 className="text-2xl font-semibold">$632,000</h3>
        </div>
        <div className="bg-indigo-700 p-4 rounded-lg">
          <p>My Card Balance</p>
          <h3 className="text-2xl font-semibold">$5,750.20</h3>
        </div>
      </section>

      {/* Charts */}
      <section className="grid grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-3">Analytics</h4>
          {/* Example static chart */}
          <div className="h-40 bg-gray-700 rounded-lg"></div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-3">Activity</h4>
          <div className="h-40 bg-gray-700 rounded-lg"></div>
        </div>
      </section>

      {/* Transaction Table */}
      <section className="bg-gray-800 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-3">Transactions</h4>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sat, 20 Apr 2020</td>
              <td>Adobe After Effect</td>
              <td>$80.09</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Fri, 19 Apr 2020</td>
              <td>McDonald's</td>
              <td>$7.63</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DashboardContent;
