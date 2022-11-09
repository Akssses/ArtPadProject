import { Link } from "react-router-dom"

export const ProfileBar = () => {
    return (
        <section className="containerr">
            <div className="text-white mt-[200px]">
                <Link to='/profile'>
                    <button className="py-[18px] mr-5 mb-5 duration-200 border border_primary w-[150px] text-xl hover:text-primary-100">Profile</button>
                </Link>
                <Link to='/steaking'>
                    <button className="py-[18px] mr-5 mb-5 duration-200 border border_primary w-[150px] text-xl hover:text-primary-100">Steaking</button>
                </Link>
                <Link to='/team'>
                    <button className="py-[18px] mr-5 mb-5 duration-200 border border_primary w-[150px] text-xl hover:text-primary-100">Team</button>
                </Link>
                <Link to='/my-project'>
                    <button className="py-[18px] mr-5 duration-200 border border_primary w-[150px] text-xl hover:text-primary-100">My Project</button>
                </Link>
            </div>
        </section>
    )
}