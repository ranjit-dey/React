import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

const StepSwitcher = () => {
    const [step, setStep] = useState(1)
    return (
        <div className="w-full h-full flex flex-col items-center ">
            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="bg-black cursor-pointer px-4 py-2 rounded-lg font-semibold text-white mb-4 border-2 border-transparent hover:border-purple-700"
                onClick={() => setStep((prev) => (prev === 1 ? 2 : 1))}
            >
                Toggle Step
            </motion.button>
            <div>
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="px-8 py-4 bg-white font-semibold rounded-lg"
                        >
                            Step 1
                        </motion.div>
                    )}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="px-8 py-4 bg-white font-semibold rounded-lg cursor-grabbing"
                        >
                            Step 2
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default StepSwitcher
