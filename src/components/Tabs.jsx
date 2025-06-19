export default function Tabs({ activeTab, setActiveTab }) {
  const tabs = ["All", "Approved", "Rejected"];

  return (
    <div className="flex w-full sm:w-fit gap-4 sm:gap-6 border-b border-blue-500 pl-4 sm:pl-6 mt-6 sm:mt-10 overflow-x-auto">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 min-w-[80px] sm:w-24 md:w-28 text-sm sm:text-base ${
            activeTab === tab
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
