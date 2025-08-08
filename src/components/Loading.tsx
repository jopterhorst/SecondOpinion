import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-christmas-red-900 via-christmas-green-900 to-christmas-gold-900 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.h2
          className="text-2xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Second Opinion Laden...
        </motion.h2>
        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Een moment geduld terwijl we alles voorbereiden
        </motion.p>
      </div>
    </div>
  )
}

export default Loading
