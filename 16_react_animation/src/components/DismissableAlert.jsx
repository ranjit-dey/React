import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

const DismissableAlert = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className="mx-auto flex flex-col items-center">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="bg-black cursor-pointer px-4 py-2 rounded-lg font-semibold text-white mb-4"
            >
                Toggle alert
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-white py-3 px-6 rounded-lg bg-red-600 border-2 border-white/40"
                    >
                        This is an animated alert.
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default DismissableAlert
