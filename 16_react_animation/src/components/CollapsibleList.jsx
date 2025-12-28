import { motion } from 'motion/react'
import { useState } from 'react'

const CollapsibleList = () => {
    const [expanded, setExpanded] = useState(null)
    const items = [1, 2, 3]
    return (
        <div className="flex flex-col gap-2  justify-center">
            {items.map((id) => (
                <motion.div
                    key={id}
                    layout
                    onClick={() => setExpanded(prev => prev === id ? null : id)}
                    className="bg-white text-black p-4 rounded-lg text-center"
                >
                    <h3 className='font-semibold'>Item {id}</h3>
                    {expanded === id && (
                        <motion.p layout className='text-sm text-gray-400'>This section expands and contracts with a layout</motion.p>
                    )}
                </motion.div>
            ))}
        </div>
    )
}

export default CollapsibleList
