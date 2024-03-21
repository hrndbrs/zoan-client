"use client";

import { useEffect, SVGProps } from "react";
import { interpolate } from "@siluat/flubber";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import {
  shape1_close,
  shape2_close,
  shape3_close,
  shape1_open,
  shape2_open,
  shape3_open,
} from "./paths";

interface BurgerSVGPropType extends SVGProps<SVGSVGElement> {
  isOpen: boolean;
}

type PathMorphPropType = {
  paths: string[];
  isOpen: boolean;
};

function SvgComponent({ isOpen, ...props }: BurgerSVGPropType) {
  return (
    <svg
      width={37}
      height={40}
      viewBox="0 0 37 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <PathMorph paths={[shape1_close, shape1_open, shape1_close]} isOpen={isOpen} />
      <PathMorph paths={[shape2_close, shape2_open, shape2_close]} isOpen={isOpen} />
      <PathMorph paths={[shape3_close, shape3_open, shape3_close]} isOpen={isOpen} />
    </svg>
  );
}

function PathMorph({ paths, isOpen }: PathMorphPropType) {
  const pathIndex = isOpen ? 1 : 0;
  const progress = useMotionValue(0);
  const pathIndeces = paths.map((_, idx) => idx);
  const path = useTransform(progress, pathIndeces, paths, {
    mixer: (from, to) => interpolate(from, to),
  });

  useEffect(() => {
    animate(progress, pathIndex, {
      duration: 0.2,
      ease: "easeInOut",
    });
  }, [pathIndex, progress]);

  return <motion.path d={path} fill="#080808" />;
}

export default SvgComponent;
