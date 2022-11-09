import { Link } from "react-router-dom"
import { Footer } from "../components/Footer/Footer"
import Navbar from "../components/Header/Navbar"


export const Sigin = () => {
    return (
        <div>
            <Navbar/>
            <div className="text-white containerr pt-[200px]">
                <div className="max-w-[400px] bg-[#0E0E0E] mx-auto p-[20px] rounded-[10px] border_1">
                    <div className="flex justify-center gap-[100px]">
                        <div>
                            <a className="text-[24px] duration-200 hover:text-primary-100">Sign in</a>
                            <div className="liniar"></div>
                        </div>
                        <Link to={'/signup'}>
                            <a className="text-[24px] duration-200 hover:text-primary-100">Sign up</a>
                        </Link>
                    </div>
                    <p className="mt-[40px] text-[18px] mb-[14px] text-center">Make sure you are using the correct URL:</p>
                    <p className="text-center text-primary-100 underline cursor-pointer mb-[40px]">art-pad.io</p>
                    <div>
                        <div>
                            <input className="bg-[#CD3ED0] opacity-10 p-[14px] rounded-[10px] w-full placeholder:text-[24px] text-[24px] placeholder:text-white mb-[20px]" type="text" placeholder="login" />
                        </div>
                        <div>
                            <input className="bg-[#CD3ED0] opacity-10 p-[14px] rounded-[10px] w-full placeholder:text-[24px] text-[24px] placeholder:text-white mb-[40px]" type="password" placeholder="Password" />
                        </div>
                        <button className="bg-[#CD3ED0] opacity-30 p-[14px] rounded-[10px] w-full placeholder:text-[24px] text-[24px]">
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-[100px]">
                <Footer/>
            </div>
        </div>
    )
}