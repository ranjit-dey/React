function Card({ userName, description, btnText }) {
    const buttonLabel = !btnText || btnText.trim() === '' ? 'View Profile' : btnText
    return (
        <div className="bg-slate-700 text-white rounded-xl p-6 w-full max-w-md mx-auto flex flex-col gap-4 shadow-lg mt-3">
            <h2 className="text-3xl text-blue-200 font-black tracking-wide">{userName}</h2>

            {/* Horizontal line */}
            <div className="h-px bg-slate-500" />

            <p className="text-base leading-relaxed">{description}</p>

            <button className="self-start px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition duration-300">
                {buttonLabel}
            </button>
        </div>
    )
}
export default Card
