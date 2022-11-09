import Navbar from "../components/Header/Navbar"
import seor from '../image/SEOR.svg'
import s from './Seor.module.css'
import group from '../image/group.svg'
import rgroup from '../image/rgroup.svg'
import usdt from '../image/usdt.svg'
import progress from '../image/progressbar.svg'
import { Footer } from "../components/Footer/Footer"
import close from '../image/close.svg'

export const Seor = () => {
    return (
        <div className="text-white">
            <Navbar/>
            <section className="containerr">
                <div className="mt-[200px] flex items-center text-[36px] font-extrabold gap-[20px]">
                    <img src={seor} alt="Seor" />
                    <h1>SEOR</h1>
                </div>
                <div className={s.seor_button}>
                    <button>Telegram</button>
                    <button>Twitter</button>
                    <button>Whitepeper</button>
                    <button>Tokenomics</button>
                </div>
                <div className="mt-[60px]">
                    <img className={s.group} src={group} alt="group" />
                    <img className={s.rgroup} src={rgroup} alt="rgroup" />
                </div>
                
                <main className={s.main_block}>
                    <div className={s.first_block}>
                        <div className="flex justify-between mb-[20px]">
                            <p className="opacity-30 text-[18px]">Raise Currency</p>
                            <h1 className="flex items-center gap-2 text-[18px] font-bold">
                                <span><img src={usdt} alt="usdt" /></span>
                                USDT
                            </h1>
                        </div>
                        <div className="flex justify-between mb-[20px]">
                            <p className="opacity-30 text-[18px]">Exchange Rate</p>
                            <h1 className="text-[18px] font-bold uppercase">
                            1 spn = 0.0024 usdt
                            </h1>
                        </div>
                        <div className="flex justify-between mb-[20px]">
                            <p className="opacity-30 text-[18px]">Swap Amount</p>
                            <h1 className="text-[18px] font-bold uppercase">
                            20 833 333.33 spn
                            </h1>
                        </div>
                        <div className="flex justify-between mb-[20px]">
                            <p className="opacity-30 text-[18px]">Total Raise</p>
                            <h1 className="text-[18px] font-bold uppercase">
                            $50 000
                            </h1>
                        </div>
                        <div className="flex justify-between mb-[20px]">
                            <p className="opacity-30 text-[18px]">Claim</p>
                            <h1 className="text-[18px] font-semibold ">
                            Claim on Gagarin
                            </h1>
                        </div>
                        <div className="flex justify-between mb-[20px]">
                            <p className="opacity-30 text-[18px]">Raise Currency</p>
                            <h1 className="flex items-center gap-2 text-[18px] font-bold">
                                <span><img className="w-[20px]" src={seor} alt="usdt" /></span>
                                Polygon
                            </h1>
                        </div>
                        <div className={s.line}></div>
                        <h1 className="text-[18px] mb-[24px]">50% TGE, remaining in two months <br /> (25%:25%)</h1>
                        <div className="flex justify-between">
                            <p className=" opacity-30"> Swap end — 07 september, 2022 19:00</p>
                            <span className="text-primary-100 font-semibold text-[14px] opacity-100">10%</span>
                        </div>
                        <img className="mt-[12px]" src={progress} alt="progressbar" />
                        <div className="flex justify-between mt-[13px]">
                            <h1 className="flex items-center gap-2">
                                <span><img src={usdt} alt="usdt" /></span>
                                496.00
                            </h1>
                            <h1 className="flex items-center gap-2 text-[10px]">
                                206 666.66 / 20 833 333.33
                                <span><img className="w-[20px]" src={seor} alt="seor" /></span>
                            </h1>
                        </div>
                    </div>
                    <div>
                        <div className={s.second_block}>
                            <h1 className="uppercase text-[18px] font-bold mb-[30px]">Swap</h1>
                            <div className={s.time_block}>
                                <div>
                                    <img className="w-[40px] my-0 mx-auto" src={close} alt="close2" />
                                    <h1 className="text-[20px] font-semibold text-center mt-[24px]">You did not apply IDO of your <br /> application was rejected</h1>
                                </div>
                                <div className={s.time}>
                                    <h1 className="text-[20px] font-semibold uppercase mb-[24px]">Swap ends after</h1>
                                    <div className={s.timer}>
                                        <div>
                                            <h1 className="text-[36px] font-bold">01</h1>
                                            <p className="opacity-30 mt-[4px]">DAYS</p>
                                        </div>
                                        <div>
                                            <h1 className="text-[36px] font-bold">25</h1>
                                            <p className="opacity-30 mt-[4px]">HOURS</p>
                                        </div>
                                        <div>
                                            <h1 className="text-[36px] font-bold">45</h1>
                                            <p className="opacity-30 mt-[4px]">MINUTES</p>
                                        </div>
                                        <div>
                                            <h1 className="text-[36px] font-bold">15</h1>
                                            <p className="opacity-30 mt-[4px]">SECONDS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.b2_text}>
                                <h1 className="mb-[12px] font-medium">Dear investor</h1>
                                <p className="mb-[12px] font-medium">Pay your attension that SPORTPZCHAIN token (SPN) deposit is availible on several blockchain networks: BNB Chain, Polygon.</p>
                                <p className="mb-[12px] font-medium">The distribution of SPORTPZCHAIN token will carried out in polygon ony!</p>
                            </div>
                        </div>
                        <div className={s.block_3}>
                            <h1 className="uppercase text-[18px]">Project descreption</h1>
                            <div className="my-[24px]">
                                <button className="bg-primary-100 py-[8px] px-[24px] rounded-[4px] mr-[24px]">Now</button>
                                <button className="bg-[#252525] py-[8px] px-[24px] rounded-[4px] mr-[24px]">29 Aug</button>
                                <button className="bg-[#252525] py-[8px] px-[24px] rounded-[4px] ">29 Aug</button>
                            </div>
                            <p className="mb-[14px] leading-[140%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p className="leading-[140%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </main>
            </section>
            <div className="mt-[100px]">
                <Footer/>
            </div>
        </div>
    )
}