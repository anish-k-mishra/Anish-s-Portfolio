import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"



const Contact = () => {
  const formRef = useRef();
  const [form ,setForm] = useState( {
    name: '',
    email: '',
    message: ''
  })
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    
    setForm({...form, [name]:value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //template_qzu4d7c
    //service_6e6eqo7
    //Qz6iXz4frHCdZ4XL5
    emailjs.send(
      'service_6e6eqo7',
      'template_qzu4d7c',
      {
      from_name : form.name,
      to_name : 'Anish',
      from_email: form.email,
      to_email: 'anishh.k.mishra',
      message: form.message
      },
      'Qz6iXz4frHCdZ4XL5'
    ).then(() => {
      setLoading(false);
      alert(`Thanks for contacting! I'll get back to you ASAP.`)
      setForm({
        name: '',
        email:'',
        message:''
      }, (error) =>{
        setLoading(false);
        console.log(error);
        alert(`Something went wrong!`)
      })
    });
  }



  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden  ">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl max-h-100"
      >
        <p className={`${styles.sectionSubText} `}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>

            <input type="text" name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>

            <input type="email" name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>

            <textarea rows="5" name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mt-[-5px]"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")