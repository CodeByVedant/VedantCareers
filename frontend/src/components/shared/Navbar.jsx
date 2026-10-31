import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '@/redux/authSlice';
import { USER_API_END_POINT } from '../../utils/contants';
import axios from 'axios';
import { toast } from 'sonner';
import { LogOut, User2, Briefcase, Building2, Home } from 'lucide-react';

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Logout failed");
        }
    };

    return (
        <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
                {/* Brand Logo */}
                <div>
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-800">
                            Vedant<span className="text-[#6A38C2]">Careers</span>
                        </span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-10">
                    <ul className="flex font-medium items-center gap-6 text-gray-700">
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li>
                                        <Link to="/admin/companies" className="hover:text-[#6A38C2] transition flex items-center gap-1">
                                            <Building2 className="w-4 h-4" /> Companies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/jobs" className="hover:text-[#6A38C2] transition flex items-center gap-1">
                                            <Briefcase className="w-4 h-4" /> Jobs
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/" className="hover:text-[#6A38C2] transition flex items-center gap-1"><Home className="w-4 h-4" /> Home</Link></li>
                                    <li><Link to="/jobs" className="hover:text-[#6A38C2] transition flex items-center gap-1"><Briefcase className="w-4 h-4" /> Jobs</Link></li>
                                    <li><Link to="/browse" className="hover:text-[#6A38C2] transition">Browse</Link></li>
                                </>
                            )
                        }
                    </ul>

                    {/* Auth Actions / User Profile Dropdown */}
                    {!user ? (
                        <div className="flex items-center gap-2">
                            <Link to="/login">
                                <button className="border border-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition">
                                    Login
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="bg-[#6A38C2] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#5b30a6] transition">
                                    Signup
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="relative group">
                            <div className="flex items-center gap-3 cursor-pointer">
                                <img
                                    src={user?.profile?.profilePhoto || "https://avatar.iran.liara.run/public"}
                                    alt="avatar"
                                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                                />
                                <div>
                                    <h4 className="font-medium text-sm text-gray-800">{user?.fullname}</h4>
                                    <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                                </div>
                            </div>

                            {/* Dropdown Menu on Hover */}
                            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 shadow-xl rounded-xl p-3 hidden group-hover:block transition-all z-50">
                                {
                                    user && user.role === 'student' && (
                                        <div className="flex flex-col space-y-2">
                                            <Link to="/profile" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm py-1.5 px-2 rounded-md hover:bg-gray-50">
                                                <User2 className="w-4 h-4" /> View Profile
                                            </Link>
                                        </div>
                                    )
                                }
                                <div className="border-t border-gray-100 my-1 pt-1">
                                    <button
                                        onClick={logoutHandler}
                                        className="flex items-center gap-2 text-red-600 hover:text-red-700 text-sm w-full py-1.5 px-2 rounded-md hover:bg-red-50 transition"
                                    >
                                        <LogOut className="w-4 h-4" /> Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;