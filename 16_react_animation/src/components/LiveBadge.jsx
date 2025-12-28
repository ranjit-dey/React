import { motion } from 'motion/react'

const LiveBadge = () => {
    return (
        <motion.div className="h-screen w-screen flex items-center justify-center">
            <motion.span
                animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                        '0 0 0px rgba(198,28,255,0.4)',
                        '0 0 8px rgba(200,0,255,0.7)',
                        '0 0 0px rgba(153,0,255,0.4)',
                    ],
                }}
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 1,
                }}
                className="bg-purple-600 rounded-full px-3 py-1 font-bold text-white"
            >
                LIVE
            </motion.span>
        </motion.div>
    )
}

export default LiveBadge
