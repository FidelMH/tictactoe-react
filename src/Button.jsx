function Button({ text, handleReset }) {
  return (
    <div>
      <button
        onClick={() => handleReset()}
        className="py-3 px-8 my-4 bg-sky-400 text-white rounded-xl hover:bg-sky-300"
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
