import Navbar from '../Header/Navbar'
import { ProfileBar } from '../ProfileBar'
import s from './Team.module.css'
import avatar from '../../image/avatar.png'
import { Footer } from '../Footer/Footer'

export const Team = () => {
    return (
        <div>
            <Navbar/>
            <ProfileBar/>
            <h1 className='text-3xl font-bold text-white containerr pt-[60px]'>TEAM</h1>
            <section className='containerr pb-[100px]'>
                <div className={s.team_block}>
                    <div className={s.team_card}>
                        <img src={avatar} alt="avatar" />
                        <div className={s.team_card_text}>
                            <div className={s.text_h}>
                                <h1 className='text-white text-3xl font-bold'>Maksnavin</h1>
                                <p>Активен до 22.09.2022 12:04</p>
                            </div>
                            <div className={s.progressbar}>
                                <p>10%</p>
                                <div>
                                    <h1>Lucky</h1>
                                    <div className='flex mx-[8px]'>
                                        <div className={s.progressing}></div>
                                        <div className={s.progress}></div>
                                    </div>
                                    <h1>Leader</h1>
                                </div>
                                <h2 className={s.ref_text}>Вас пригласил makeart</h2>
                            </div>
                        </div>
                    </div>

                    <div className={s.right_card}>
                        <div >
                            <h1 className='text-xl font-semibold text-white flex justify-between'>Members (active)</h1>
                            <p className='text-white text-3xl font-bold'>395 /<span className='text-xl'>6</span></p>
                        </div>
                        <div >
                            <h1 className='text-xl font-semibold text-white flex justify-between'>Сoins in the team</h1>
                            <p className='text-white text-3xl font-bold'>1 065 127</p>
                        </div>
                        <div >
                            <h1 className='text-xl font-semibold text-white flex justify-between mr-[20px]'>Delegated by the team</h1>
                            <p className='text-white text-3xl font-bold'>790 279</p>
                        </div>
                    </div>
                </div> 
                <div>
                    <h1 className='text-3xl text-white font-bold mt-[64px]'>Level 1</h1>
                    <h2 className='text-xl text-white font-semibold mt-[24px]'>Invited members</h2>
                    <div className='text-white flex gap-[14px] mt-[24px]'>
                        <p className='text-primary-100'>All (395)</p>
                        <p>Activated (6)</p>
                        <p>Not activated (389)</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}