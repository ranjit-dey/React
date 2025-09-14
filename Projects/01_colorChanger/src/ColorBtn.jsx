function ColorBtn({ btnBg, btnText, onClick }) {
    return (
        <button
            className={`${btnBg} px-4 py-2 rounded-lg text-white font-semibold shadow hover:opacity-80 transition`}
            onClick={onClick}
        >
            {btnText}
        </button>
    )
}

export default ColorBtn
