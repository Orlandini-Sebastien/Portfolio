'use client'
import { ReactElement } from 'react'
import { motion } from 'framer-motion'
type IframProps = {
  title: string
}

const TitleProgress = ({ title }: IframProps): ReactElement => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75, delay: 0.75 }}
      className="my-4 rounded border-b-2 bg-slate-50 p-2 text-3xl font-bold shadow "
    >
      {title}
    </motion.div>
  )
}

export default TitleProgress
