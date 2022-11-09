import Navbar from "../Header/Navbar"
import './Profile.module.css'
import avatar from '../../image/avatar.png'
import telega from '../../image/telega.svg'
import email from '../../image/email.svg'
import edit from '../../image/edit.svg'
import { ProfileBar } from "../ProfileBar"
import { Footer } from "../Footer/Footer"

export const Profile = () => {
    return (
        <div>
            <Navbar/>
            <ProfileBar/>
            <div className="containerr text-white pb-[100px]">
            <h1 className="text-3xl font-bold text-white mt-[64px]">PROFILE</h1>
            <main className="profile_block flex items-center">
                <div className="profile_card flex bg-[#0E0E0E] p-[30px] rounded-2xl mt-[40px] max-w-[800px]">
                    <img className="avatar" src={avatar} alt="avatar" />
                    <div className="ml-[30px]">
                        <div className="flex flex-col md:flex-row md:mt-[35px] justify-between mt-[10px]">
                            <h1 className="profile_h1 text-3xl font-semibold mr-[50px] lg:mr-[282px]">Maksnavin</h1>
                            <div>
                                <button className="flex items-center mt-[20px] md:mt-[0px] translate-y-1.5 text-xl mr-[8px] text-primary-100">Edit <span className="ml-[8px] -translate-y-1"><img src={edit} alt="edit" /></span></button>
                            </div>
                        </div>
                        <p className="flex mt-[30px]">
                            <span className="mr-[8px]"><img src={email} alt="email" /></span> 
                            Electronnaja_Pchta@mail.com
                        </p>
                        <p className="flex mt-[30px]">
                            <span className="mr-[8px]"><img src={telega} alt="telega" /></span>
                            /t.me maksnavin
                        </p>
                    </div>
                </div>
                <div className="mt-[35px] wl ml-[40px] border border-[#CD3ED0]">
                    <div className="wallet py-[45px] px-[30px] bg-[#0E0E0E] flex justify-between rounded-2xl ">
                        <h1 className="font-semibold">Wallet</h1>
                        <p>ARTR-1111-1111-1111</p>
                    </div>
                    <div className="link py-[45px] px-[30px] bg-[#0E0E0E] flex justify-between rounded-2xl  mt-[40px]">
                        <h1 className="font-semibold mr-[120px]">Invitation link</h1>
                        <p>https://artr.link/maksnavin</p>
                    </div>
                </div>
            </main>
            </div>
            <Footer/>
        </div>
    )
}