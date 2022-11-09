import s from './Footer.module.css'
import m from '../../image/m.svg'
import twitter from '../../image/twitter.svg'
import telega from '../../image/telega2.svg'
import { Link } from 'react-router-dom'
import quill from '../../image/quillaudits.svg'

export const Footer = () => {
    return (
        <footer className='containerr text-white'>
            <div className={s.footer_block}>
                <div className={s.f_text}>
                    <p>ArtPad is a decentralized multi-chain fundraising platform <br /> enabling projects to raise capital and promise safety to <br /> early stage investors. Stake ArtPad tokens to get priority-access <br /> to promising projects.</p>
                    <div className='flex gap-8 mt-[40px]'>
                        <img className='duration-300 hover:-translate-y-3' src={m} alt="m" />
                        <img className='duration-300 hover:-translate-y-3' src={twitter} alt="twitter" />
                        <img className='duration-300 hover:-translate-y-3' src={telega} alt="telegram" />
                    </div>
                </div>

                    <div className={s.footer_nav}>
                            <p><Link>Home</Link></p>
                            <p><Link>Projects</Link></p>
                            <p><Link>Levels Staking</Link></p>
                            <p><Link>Apply for IDO</Link></p>
                            <p><Link>FAQ</Link></p>
                            <p><Link>Help Centre</Link></p>
                    </div>
                    <div className={s.community}>
                        <h1>Community:</h1>
                        <h2>Telegram</h2>
                        <h2>DEM</h2>
                    </div>

                <div className={s.audited}>
                    <h1>Audited by:</h1>
                    <img src={quill} alt="QuillAudits" />
                </div>
            </div>
        </footer>
    )
}