import Navbar from '../Header/Navbar'
import { ProfileBar } from '../ProfileBar'
import s from './Steaking.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import 'toolcool-range-slider';
import { Footer } from '../Footer/Footer';

export const Steaking = () => {
    return (
        <div>
            <Navbar/>
            <ProfileBar/>
            <section className='containerr'>
                <h1 className='text-white text-3xl font-bold mt-[64px]'>STEAKING</h1>
                <h2 className='text-white text-2xl font-bold mt-[40px]'>LEVEL: <span className='text-xl'>TIER 7</span></h2>
                <h2 className='text-white text-3xl font-bold mt-[24px]'>STAKED: <span className='text-3xl font-medium text-primary-100'>750,000 WARTR</span></h2>
                <p className='text-2xl text-white mt-[24px]'>Your token are unlocked</p>
                <div className={s.balance_blocks}>
                    <div>
                        <div className={s.balance_block}>
                            <h1>Balance: 0 wARTR</h1>
                            <div className={s.balance_button}>
                                <h2>Max</h2>
                                <h3>WARTR</h3>
                            </div>
                        </div>
                    <button className={s.button}>Stake</button>
                    </div>

                    <div>
                        <div className={s.balance_block}>
                            <h1>Balance: 0 wARTR</h1>
                            <div className={s.balance_button}>
                                <h2>Max</h2>
                                <h3>WARTR</h3>
                            </div>
                        </div>
                         <button className={s.button}>Unstake</button>
                    </div>
                </div>
                <div className='mt-[95px]'>
                    <h1 className='text-white text-3xl font-bold mb-[40px]'>STEAKING TIME</h1>
                    <toolcool-range-slider 
                        min="10"
                        max="50"
                        slider-height="20px"
                        slider-width="100%"
                        pointer-height="36px"
                        pointer-width="36px"
                        slider-bg-fill="#CD3ED0"
                        slider-bg="#363838"
                        slider-bg-hover="#363838"
                    />
                </div>
                <div className='flex justify-between teht-white mt-[25px]'>
                    <h1 className='text-white font-bold'>1 month</h1>
                    <h1 className='text-white font-bold'>3 month’s</h1>
                    <h1 className='text-white font-bold'>6 month’s</h1>
                    <h1 className='text-white font-bold'>12 month’s</h1>
                </div>
            </section>
            <div className='pt-[100px]'>

            <Footer/>
            </div>
        </div>
    )
}