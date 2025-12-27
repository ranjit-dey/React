import { motion } from 'motion/react'

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 1.5 } },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

const FeaturesList = () => {
    const features = ['Fast', 'Declarative', 'Powerful', 'Fun']

    return (
        <motion.ul variants={container} initial="hidden" animate="visible">
            {features.map((feature, index) => (
                <motion.li
                    variants={item}
                    key={index}
                    className="text-2xl text-white font-semibold"
                >
                    {feature}
                </motion.li>
            ))}
        </motion.ul>
    )
}

export default FeaturesList
