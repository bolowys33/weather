const InputSection = ({ value, onChange, onSubmit }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 mt-[40px]">
      <input
        type="text"
        className="bg-[#F0F0F0] h-[40px] w-[350px] rounded-full outline-[#007BFF] border-2 border-[#CCCCCC] px-3 text-[16px]"
        value={value}
        placeholder="Enter city to get weather"
        onChange={onChange}
      />
      <button
        onClick={onSubmit}
        className={`bg-[#004E89] px-4 py-3 text-white rounded-xl font-semibold text-[16px] ${
          !value ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={!value}
      >
        Get Weather
      </button>
    </div>
  );
};

export default InputSection;
