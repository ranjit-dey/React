import { motion } from 'motion/react'

const DraggableCard = () => {
    return (
        <div>
            <motion.div
                className="px-5 py-2 bg-white font-semibold rounded-lg cursor-grabbing"
                drag
                dragConstraints={{ left: -130, right: 130, bottom: 80, top: -80 }}
                dragElastic={0.2}
            >
                Drag me!
            </motion.div>
        </div>
    )
}

export default DraggableCard
