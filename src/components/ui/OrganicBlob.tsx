import { motion } from 'framer-motion';

interface OrganicBlobProps {
  color?: 'golden' | 'ocean' | 'leaf' | 'water';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  animated?: boolean;
}

export default function OrganicBlob({
  color = 'golden',
  position = 'top-right',
  size = 'lg',
  opacity = 0.15,
  animated = true
}: OrganicBlobProps) {
  const colorMap = {
    golden: '#F0B825',
    ocean: '#3750B4',
    leaf: '#7BA05B',
    water: '#5B9EA0',
  };

  const sizeMap = {
    sm: 'w-64 h-64',
    md: 'w-96 h-96',
    lg: 'w-[600px] h-[600px]',
    xl: 'w-[800px] h-[800px]',
  };

  const positionMap = {
    'top-left': '-top-32 -left-32',
    'top-right': '-top-32 -right-32',
    'bottom-left': '-bottom-32 -left-32',
    'bottom-right': '-bottom-32 -right-32',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <motion.div
      className={`absolute ${positionMap[position]} ${sizeMap[size]} pointer-events-none overflow-hidden`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: animated ? opacity : opacity,
        scale: animated ? [0.8, 1.2, 0.8] : 1,
      }}
      transition={{
        duration: 8,
        repeat: animated ? Infinity : 0,
        ease: "easeInOut"
      }}
    >
      <div
        className="w-full h-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
          opacity: opacity,
        }}
      />
    </motion.div>
  );
}
