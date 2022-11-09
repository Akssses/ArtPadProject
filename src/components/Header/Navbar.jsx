import React, { useState } from 'react';
import style from './Navbar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.svg'
import user from '../../image/user.svg'
import date from '../../image/date.svg'
import meta from '../../image/meta.svg'
import wc from '../../image/wc.svg'
import tw from '../../image/tw.svg'
import close from '../../image/close.svg'
import cursor from '../../image/cursor.svg'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [modal, setModal] = useState(false)

  const Modal = () => {
    return (
        <div className="modall text-white z-50">
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl mb-[18px]'>Select you’re wallet</h1>
                <img className='-translate-y-2' onClick={() => setModal(false)} src={close} alt="close"/>
            </div>
            <div className="line"></div>
            <div className=''>
                <div className="modal_button">
                    <img src={meta} alt="Metamask" />
                    <p>MetaMask</p> 
                </div>
                <div className="modal_button_center">
                    <img src={wc} alt="WalletConnect" />
                    <p>WalletConnect</p> 
                    <img className='translate-y-3 translate-x-10' src={cursor} alt="cursor" />
                </div>
                <div className="modal_button">
                    <img src={tw} alt="TrustWallet" />
                    <p>TrustWallet</p> 
                </div>
            </div>
        </div>
    )
  }
  return (
    <header className={style.header}>
      <div className='containerr'>
        <div className=''>
            <div className={style.box}>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <ul className={nav ? [style.menu, style.active].join(' ') : [style.menu]}>
                <li>
                <a href='##'>Home</a>
                </li>
                <li>
                    <Link to={'/projects'}>Projects</Link>
                </li>
                <li>
                <a href='##'>Levels</a>
                </li>
                <li>
                <a href='##'>Swap</a>
                </li>
                <li>
                <a href='##'>FAQ</a>
                </li>
                <li>
                <a href='##'>NFT Marketplace</a>
                </li>
            <div className={style.header_icons}>
                <div className={style.header_ic}>
                    <Link>
                        <img className="mr-[30px] translate-y-1 duration-200 hover:-translate-y-1" src={date} alt="date" />
                    </Link>
                    <Link>
                        <img className="duration-200 translate-y-1  hover:-translate-y-1" src={user} alt="user" />
                    </Link>
                </div>
                <div>
                    <button className={style.header_button}>Buy ARTR</button>
                    <button className={style.header_button} onClick={() => setModal(true)}>Connect Wallet</button>
                    <div className={style.modal}>
                        {
                            modal && (
                                    <Modal/>
                            )
                        }
                    </div>
                </div>
            </div>
            </ul>
            <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                {nav ? <AiOutlineClose color='#fff' size={25} /> : <AiOutlineMenu color='#fff' size={25} />}
            </div>
            </div>
        </div>
      </div>
    </header>
  )
};

export default Navbar;
