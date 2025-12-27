import { easeIn, motion } from 'motion/react'

const First = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1, ease: easeIn }}
        >
            <h1 className="text-4xl text-white font-bold">Hello World</h1>
        </motion.div>
    )
}

export default First
