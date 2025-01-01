import { CONTACT } from "../constants"
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{ y: 0, opacity: 1}} 
        initial={{ y: -100, opacity: 0}}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">My Contacts
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p 
          whileInView={{ x: 0, opacity: 1}} 
          initial={{ x: -100, opacity: 0}}
          transition={{ duration: 1 }}
          className="my-4">{CONTACT.address}
        </motion.p>
        <motion.p 
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="my-4">{CONTACT.phoneNo}
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact