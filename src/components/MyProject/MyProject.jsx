import s from './MyProject.module.css'
import Navbar from "../Header/Navbar"
import { ProfileBar } from '../ProfileBar'
import artery from '../../image/ARTERY.svg'
import eywa from '../../image/EYWA.svg'
import art from '../../image/art.svg'
import { Footer } from '../Footer/Footer'
import prev from '../../image/prev.svg'
import next from '../../image/next.svg'



export const MyProject = () => {
    return (
        <div className='text-white'>
           <Navbar/>
           <ProfileBar/>
           <section className='containerr'>
                <h1 className='mt-[64px] text-white text-3xl font-bold'>MY PROJECT</h1>
            <div className={s.project_block}>
                    <div className={s.project_bar}>
                        <h1>Project</h1>
                        <h1>Round</h1>
                        <h1>Pool</h1>
                        <h1>Price</h1>
                        <h1>Token</h1>
                        <h1>Status</h1>
                        <h1>Link</h1>
                    </div>
                    <div className={s.project_tx}>
                        <h1 className='flex'>
                            <span><img src={artery} alt="ARTERY" /></span>
                            ARTERY
                        </h1>
                        <h1>IDO</h1>
                        <h1>200$</h1>
                        <h1>$0.01</h1>
                        <h1>ARTR 20000</h1>
                        <h1>Finished</h1>
                        <h1>Click</h1>
                    </div>
                    <div className={s.project_tx}>
                        <h1 className='flex'>
                            <span><img src={eywa} alt="EYWA" /></span>
                            EYWA
                        </h1>
                        <h1>SEED</h1>
                        <h1>2000$</h1>
                        <h1>$0.06</h1>
                        <h1>EWA 33333</h1>
                        <h1>FSFC</h1>
                        <h1>Click</h1>
                    </div>
                    <div className={s.project_tx}>
                        <h1 className='flex'>
                            <span><img src={art} alt="ART WALLET" /></span>
                            ART WALLET
                        </h1>
                        <h1>SEED</h1>
                        <h1>2000$</h1>
                        <h1>$0.06</h1>
                        <h1>EWA 33333</h1>
                        <h1>FSFC</h1>
                        <h1>Click</h1>
                    </div>
                    <div className={s.project_tx}>
                        <h1 className='flex'>
                            <span><img src={artery} alt="ARTERY" /></span>
                            ARTERY
                        </h1>
                        <h1>IDO</h1>
                        <h1>200$</h1>
                        <h1>$0.01</h1>
                        <h1>ARTR 20000</h1>
                        <h1>Finished</h1>
                        <h1>Click</h1>
                    </div>
            </div>
            <div className='flex items-center justify-center gap-[5px] mt-[40px]'>
                <img src={prev} alt="prev" />
                <p className='text-center text-2xl underline'>12..5</p>
                <img src={next} alt="next" />
            </div>
           </section>
           <div className='pt-[100px]'>
            <Footer/>
           </div>
        </div>
    )
}