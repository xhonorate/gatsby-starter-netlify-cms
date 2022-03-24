import React from "react";
import { motion } from "framer-motion";
 
interface Props {
    direction: string;
    children: [any];
}

export default function AOS({direction, children}: Props) {
    return (
        <motion.div
            initial={{}}
            whileInView={{}}

        >
            { children }
        </motion.div>
    );
}