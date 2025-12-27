import { motion } from 'motion/react'

const Button = ({ children, stiffness = 300, damping = 15 }) => {
    return (
        <div className="mt-4">
            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                transition={{ type: 'spring', stiffness, damping }}
                className="bg-black text-white font-semibold py-2 px-4 rounded-lg cursor-pointer  border-2 border-transparent hover:border-purple-500"
            >
                {children}
            </motion.button>
        </div>
    )
}

export default Button
