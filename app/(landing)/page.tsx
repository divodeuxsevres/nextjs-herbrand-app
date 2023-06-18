"use client"

import { Logo } from "@/components/logo";
import { Target, motion } from "framer-motion"

export default function Page() {
  /**
   * Work around this shit,
   * looks bad
   *
   * (edit): rework whole page, looks bad.
   */
  const animateFadeInitialProps: Target = {
    opacity: 0
  }

  const animateFadeAnimateProps: Target = {
    opacity: 1
  }

  return (
    <div className="overflow-x-hidden max-w-screen">
      <div className="h-screen w-full mt-32 items-center flex flex-col">
        <motion.div
          initial={animateFadeInitialProps}
          animate={animateFadeAnimateProps}
          transition={{
            delay: 2.7
          }}
          className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
        >
          <div className="absolute top-0 flex items-center justify-center w-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 aspect-square">
            <div className="absolute inset-0 translate-z-0 bg-[#5c5c5c] rounded-full blur-[120px] opacity-50" />
          </div>
        </motion.div>
        <motion.p
          initial={animateFadeInitialProps}
          animate={animateFadeAnimateProps}
          transition={{
            delay: 0.0
          }}
          className="text-7xl font-semibold tracking-tight text-center flex items-center gap-2">Tauchen Sie ein in</motion.p>
        <motion.p

          initial={animateFadeInitialProps}
          animate={animateFadeAnimateProps}
          transition={{
            delay: 0.9
          }} className="text-8xl font-semibold tracking-tight text-center flex items-center gap-2">die Welt von</motion.p>
        <motion.div
          initial={animateFadeInitialProps}
          animate={animateFadeAnimateProps}
          transition={{
            delay: 1.4
          }}
          className="flex flex-row gap-3 items-center justify-center">
          <p className="text-7xl font-semibold tracking-tight text-center flex items-center gap-2">Mercedes-Benz</p>
          <motion.div
            initial={animateFadeInitialProps}
            animate={animateFadeAnimateProps}
            transition={{
              delay: 1.9
            }}><Logo className="dark:fill-white w-64 mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
