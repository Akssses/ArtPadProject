import { Link } from "react-router-dom"
import { Footer } from "../components/Footer/Footer"
import Navbar from "../components/Header/Navbar"

export const SignUp = () => {
    return (
        <div>
            <Navbar/>
            <div className="text-white containerr pt-[200px]">
                <div className="max-w-[400px] bg-[#0E0E0E] mx-auto p-[20px] rounded-[10px] border_1">
                    <div className="flex justify-center gap-[100px]">
                        <Link to={'/signin'}>
                        <a className="text-[24px] duration-200 hover:text-primary-100">Sign in</a>
                        </Link>
                        <div>
                            <a className="text-[24px] duration-200 hover:text-primary-100">Sign up</a>
                            <div className="liniar"></div>
                        </div>
                    </div>
                    <div className="mt-[40px]">
                        <div>
                            <input className="bg-[#CD3ED0] opacity-10 p-[14px] rounded-[10px] w-full placeholder:text-[24px] text-[24px] placeholder:text-white mb-[20px]" type="text" placeholder="login" />
                        </div>
                        <div>
                            <input className="bg-[#CD3ED0] opacity-10 p-[14px] rounded-[10px] w-full placeholder:text-[24px] text-[24px] placeholder:text-white mb-[20px]" type="password" placeholder="Email" />
                        </div>
                        <div>
                            <input className="bg-[#CD3ED0] opacity-10 p-[14px] rounded-[10px] w-full placeholder:text-[24px] text-[24px] placeholder:text-white mb-[20px]" type="password" placeholder="Password" />
                        </div>
                        <div>
                            <input className="bg-[#CD3ED0] opacity-10 p-[14px] rounded-[10px] w-full placeholder:text-[24px] text-[24px] placeholder:text-white mb-[40px]" type="password" placeholder="Confrim password" />
                        </div>
                        <button className="bg-[#CD3ED0] opacity-30 p-[14px] rounded-[10px] w-full placeholder:text-[24px] text-[24px]">
                            Sign up
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