import { assets, workData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';


const Work = ({isDarkMode}) => {
    
    const { t } = useTranslation('common');

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }} 
        id='work' className='h-screen w-full px-[12%] py-15 scroll-mt-10 md:scroll-mt-30'>

        <motion.h3 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }} 
            className='text-center mb-2 text-lg text-light-text dark:text-dark-text'>
            {t('work_sub_title')}
            </motion.h3>

        <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }} 
            className='text-center text-5xl text-light-text dark:text-dark-text'>
            {t('work_title')}
        </motion.h2>

        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}  
            className='text-center max-w-2xl mx-auto mt-5 mb-12 text-light-text dark:text-dark-text'>
                {t('work_description')}
        </motion.p>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }} 
            className='grid grid-cols-auto my-10 gap-5 text-light-text dark:text-dark-text'>
            
            {workData.map((project, index) => (
                <motion.div
                    onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}  
                    className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                    key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-light-theme dark:bg-dark-theme w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-3 flex items-center justify-center duration-500 group-hover:bottom-7 border border-light-text dark:border-dark-text'> 
                        <div>
                            <p className='text-sm text-center text-light-text dark:text-dark-text '>{project.description}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>

        <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }} 
            target='_blank' href='https://github.com/eugenekartashian' className='w-max flex items-center justify-center gap-2 text-light-text dark:text-dark-text border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-light-hover duration-500 dark:border-white dark:hover:bg-dark-hover'>
            {t('work_btn')}
            <Image src={isDarkMode ? assets.right_arrow_light : assets.right_arrow} alt='Right arrow' className='w-6' />
        </motion.a>
    </motion.div>
  )
}

export default Work
